import HomeNav from "@/components/dashboard/HomeNavbar"

export default function Layout ({children}) {
    return (
        <div>
            <HomeNav/>
            {children}
        </div>
    )
}