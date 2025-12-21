import Footer from "@/components/Footer"
import "../globals.css"
import "../styles/globals.css"
import Nav from "./_components/Nav"
import Sidebar from "./_components/Sidebar"
import Topbar from "./_components/Topbar"
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Nav />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-secondary/40">
          <Topbar />
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Layout
