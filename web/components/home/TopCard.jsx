import { Sheet, StretchHorizontal, StretchVertical, Warehouse } from "lucide-react";

const DataCard = () => {
    return ( 
        <div className="grid lg:grid-cols-6 gap-4 p-4"> 
        <div className="lg:col-span-2 col-span-1 bg-white lg:ml-12 flex justify-between w-3/4 p-2 border rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <div className="bg-blue-100 flex justify-center items-center p-2 rounded-lg space-x-3">
                    <Warehouse className=" text-Primary"/>
                    <h1 className="text-xl font-SemiBold">Total Inventory</h1>
                </div>
                <h2 className="text-Teritary font-light flex justify-center py-2">128754</h2>
            </div>
        </div>

        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-3/4 p-4 border rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <div className="bg-blue-100 flex justify-center items-center p-2 rounded-lg space-x-3">
                    <Warehouse className=" text-Primary"/>
                    <h1 className="text-xl font-SemiBold">Total Shelves</h1>
                </div>
                <h2 className="text-Teritary font-light flex justify-center py-2">128754</h2>
            </div>

        </div>

        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-3/4 p-4 border rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <div className="bg-blue-100 flex justify-center items-center p-2 rounded-lg space-x-3">
                    <Sheet className=" text-Primary"/>
                    <h1 className="text-xl font-SemiBold">Today's Entry</h1>
                </div>
                <h2 className="text-Teritary font-light flex justify-center py-2">54</h2>
            </div>

        </div>

        </div>
     );
}
 
export default DataCard;