import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Store() {
  return (
    <Card className="mt-6 bg-white w-3/4 ml-6">
      <CardHeader>
        <CardTitle>Store Name</CardTitle>
        <CardDescription>
          Order Items from Store.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input placeholder="Item Name" />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Order</Button>
      </CardFooter>
    </Card>
  )
}
