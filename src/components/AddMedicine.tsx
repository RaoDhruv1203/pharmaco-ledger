
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

// Define the form schema with Zod
const medicineFormSchema = z.object({
  name: z.string().min(2, {
    message: "Medicine name must be at least 2 characters.",
  }),
  quantity: z.number().min(1, {
    message: "Quantity must be at least 1.",
  }),
  quantityUnit: z.enum(["strip", "tablet", "box", "piece"]),
  dose: z.number().min(0, {
    message: "Dose must be a positive number.",
  }),
  batchNumber: z.string().min(1, {
    message: "Batch number is required.",
  }),
  expiryDate: z.string().min(1, {
    message: "Expiry date is required.",
  }),
});

type MedicineFormValues = z.infer<typeof medicineFormSchema>;

// Mock data for medicine suggestions (replace with actual data later)
const medicineSuggestions = [
  "Paracetamol",
  "Amoxicillin",
  "Ibuprofen",
  "Aspirin",
  "Cetirizine",
];

const AddMedicine = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Initialize the form
  const form = useForm<MedicineFormValues>({
    resolver: zodResolver(medicineFormSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      quantityUnit: "strip",
      dose: 0,
      batchNumber: "",
      expiryDate: "",
    },
  });

  const handleMedicineSearch = (value: string) => {
    const filtered = medicineSuggestions.filter((medicine) =>
      medicine.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const onSubmit = (data: MedicineFormValues) => {
    console.log(data);
    // Here we'll add the logic to save the medicine data
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm animate-slideIn">
      <h2 className="text-2xl font-semibold text-pharmacy-text mb-6">
        Add New Medicine
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Medicine Name with Auto-suggestions */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleMedicineSearch(e.target.value);
                      }}
                      placeholder="Enter medicine name"
                      className="w-full"
                    />
                    {suggestions.length > 0 && field.value && (
                      <div className="absolute z-10 w-full bg-white border rounded-md mt-1 shadow-lg">
                        {suggestions.map((suggestion) => (
                          <div
                            key={suggestion}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              form.setValue("name", suggestion);
                              setSuggestions([]);
                            }}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value, 10))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quantity Unit */}
            <FormField
              control={form.control}
              name="quantityUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="strip">Strip</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="box">Box</SelectItem>
                      <SelectItem value="piece">Piece</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dose */}
            <FormField
              control={form.control}
              name="dose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dose (mg)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Batch Number */}
            <FormField
              control={form.control}
              name="batchNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Batch Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Expiry Date */}
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-pharmacy-primary hover:bg-pharmacy-primary/90"
          >
            Add Medicine
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default AddMedicine;
