import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CreatePurchase() {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Your Orders</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Purcahse Orders Form.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="bg-Primary">Create New Order</Button>
      </CardFooter>
    </Card>
  )
}
