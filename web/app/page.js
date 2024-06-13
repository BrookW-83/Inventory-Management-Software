import HeadLineSection from "@/components/landing/HeadLineSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SocialProjectSection from "@/components/landing/SocialProjectSection";
import SolvingSection from "@/components/landing/SolvingSection";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" min-h-screen">
      <h2 className="text-3xl mb-4">Inventory Management Software</h2>
      <Link href = "/dashboard/home/landing">View Dashboard</Link>
      <HeadLineSection/>
      <ProblemSection/>
      <SocialProjectSection/>
      <SolvingSection/>
    </div>
  );
}
