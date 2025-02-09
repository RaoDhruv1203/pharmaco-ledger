
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import InvoiceGeneration from "@/components/InvoiceGeneration";
import OldInvoices from "@/components/OldInvoices";
import AddMedicine from "@/components/AddMedicine";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pharmacy-secondary/30 animate-fadeIn">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src="/lovable-uploads/3309b2b6-839b-4f3a-ba38-2ca9d7185037.png"
            alt="HealthCure Pharmacy"
            className="h-12"
          />
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-pharmacy-text hover:text-pharmacy-primary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="invoice" className="animate-slideIn">
          <TabsList className="w-full bg-white/50 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger
              value="invoice"
              className="flex-1 data-[state=active]:bg-pharmacy-primary data-[state=active]:text-white"
            >
              Invoice Generation
            </TabsTrigger>
            <TabsTrigger
              value="old-invoices"
              className="flex-1 data-[state=active]:bg-pharmacy-primary data-[state=active]:text-white"
            >
              Old Invoices
            </TabsTrigger>
            <TabsTrigger
              value="add-medicine"
              className="flex-1 data-[state=active]:bg-pharmacy-primary data-[state=active]:text-white"
            >
              Add Medicine
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="invoice">
              <InvoiceGeneration />
            </TabsContent>
            <TabsContent value="old-invoices">
              <OldInvoices />
            </TabsContent>
            <TabsContent value="add-medicine">
              <AddMedicine />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
