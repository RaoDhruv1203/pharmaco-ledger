
import { Card } from "@/components/ui/card";

const OldInvoices = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm animate-slideIn">
      <h2 className="text-2xl font-semibold text-pharmacy-text mb-6">
        Invoice History
      </h2>
      {/* We'll implement the full invoice list in the next iteration */}
      <p className="text-pharmacy-muted">Invoice history coming soon...</p>
    </Card>
  );
};

export default OldInvoices;
