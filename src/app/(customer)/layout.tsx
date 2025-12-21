import Footer from "@/app/(customer)/_components/ui/footer"

import "../../styles/globals.css"
import Nav from "./_components/Nav"
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
