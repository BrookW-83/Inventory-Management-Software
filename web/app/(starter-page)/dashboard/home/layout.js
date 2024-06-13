import HomeNav from "@/components/home/HomeNavbar"

export default function Layout ({children}) {
    return (
        <div>
            <HomeNav/>
            {children}
        </div>
    )
}