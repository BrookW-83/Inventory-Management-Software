import { BarChart4, BarChartHorizontalBig, BookAIcon, Home, ShieldOff, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function SideBar () {
    return (
    <div className="w-56 min-h-screen bg-Primary">
        <div className="flex p-4 space-x-3 items-center">
            <ShoppingCart className="text-Secondary"/>
            <span className="text-Secondary font-mono font-semibold text-lg">Inventory</span>
        </div>

        {/* Navigation  */}
        <nav className="flex flex-col gap-4 p-3 mt-6">
           <Link className="flex items-center space-x-2 text-Secondary" href="">
            <Home className="w-4 h-4"/><span className="font-extralight">Home</span></Link> 
            <div className="border-b border-extralight border-Secondary"></div>

            <button className="flex items-center space-x-2 text-Secondary" href="">
            <BookAIcon className="w-4 h-4"/><span className="font-extralight">Inventory</span></button> 
            <div className="border-b border-extralight border-Secondary"></div>
        

            <button className="flex items-center space-x-2 text-Secondary" href="">
            <ShoppingBag className="w-4 h-4"/><span className="font-extralight">Purchase</span></button> 
            <div className="border-b border-extralight border-Secondary"></div>
         
         
         <Link className="flex items-center space-x-2 text-Secondary" href="">
            <BarChart4 className="w-4 h-4"/><span className="font-extralight">Reports</span></Link> 
        
   
        
        </nav>
    </div>
    )
}