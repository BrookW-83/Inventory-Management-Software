import CreatePurchase from "@/components/purchases/CreatePurchase";
import PurchaseList from "@/components/purchases/PurchasesList";

export default function Purchases() {
  return (
    <div className="bg-(usr[]) p-4 mt-4">
      <div className="w-3/4"><CreatePurchase/></div>
      
      <div className="mt-4"><PurchaseList/></div>

    </div>
  );
}