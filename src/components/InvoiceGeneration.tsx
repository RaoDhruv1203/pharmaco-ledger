
import { Card } from "@/components/ui/card";

const InvoiceGeneration = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm animate-slideIn">
      <h2 className="text-2xl font-semibold text-pharmacy-text mb-6">
        Generate Invoice
      </h2>
      {/* We'll implement the full invoice form in the next iteration */}
      <p className="text-pharmacy-muted">Invoice generation form coming soon...</p>
    </Card>
  );
};

export default InvoiceGeneration;
