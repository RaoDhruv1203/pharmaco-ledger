
import { Card } from "@/components/ui/card";

const AddMedicine = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm animate-slideIn">
      <h2 className="text-2xl font-semibold text-pharmacy-text mb-6">
        Add New Medicine
      </h2>
      {/* We'll implement the full medicine form in the next iteration */}
      <p className="text-pharmacy-muted">Medicine form coming soon...</p>
    </Card>
  );
};

export default AddMedicine;
