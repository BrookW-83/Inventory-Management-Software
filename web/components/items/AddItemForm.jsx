import { Bird, Rabbit, Turtle } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AddItems() {
  return (
    <div className="relative hidden flex-col items-center gap-8 md:flex w-1/2 ml-12">
      <h1 className="text-2xl p-2 font-mono font-extrabold text-Primary border-b-2">Add New Items</h1>
      <form className="grid w-full items-start gap-6 bg-white rounded-xl">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Item Description</legend>
          <div className="grid gap-3">
            <Label htmlFor="model">Prefix</Label>
            <Select>
              <SelectTrigger
                id="model"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="genesis">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Rabbit className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Neural{" "}
                        <span className="font-medium text-foreground">
                          Genesis
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Our fastest model for general use cases.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="explorer">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Bird className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Neural{" "}
                        <span className="font-medium text-foreground">
                          Explorer
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Performance and speed for efficiency.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="quantum">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Turtle className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Neural{" "}
                        <span className="font-medium text-foreground">
                          Quantum
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        The most powerful model for complex computations.
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="temperature">Quantity</Label>
            <Input id="temperature" type="number" placeholder="0" />
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="top-p">Top P</Label>
              <Input id="top-p" type="number" placeholder="0.7" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="top-k">Top K</Label>
              <Input id="top-k" type="number" placeholder="0.0" />
            </div>
          </div> */}
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
          <div className="grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="system">
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">Shelf A</SelectItem>
                <SelectItem value="user">Shelf B</SelectItem>
                <SelectItem value="assistant">Shelf C</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Item Description</Label>
            <Textarea
              id="content"
              placeholder="You are a..."
              className="min-h-[9.5rem]"
            />
          </div>
           <Button>Add Item</Button>
        </fieldset>
      </form>
    </div>
  )
}
