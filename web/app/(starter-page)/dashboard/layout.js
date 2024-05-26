import Header from "@/components/dashboard/Header"
import SideBar from "@/components/sidebar/SideBar"

export default function Layout({ children })
{
  return (
  <div className="flex">
    <SideBar/>
    <main className="w-full">
      <Header/>
      {children}
      </main>
  </div>
)
}
