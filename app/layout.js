import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from 'next/image';
import Footer from "@/components/footer";
import { Container } from "postcss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <container >

          <header className=" mx-auto flex justify-between items-center px-4">

          <div className="flex py-4">
            <Image  className="inline-block py-3 mr-1" src="/logo.png" alt="Site Logo"  width={38} height={38}/>
            <h4 className="text-2xl text-[#8540F5] font-bold py-4">Talk</h4>
            <h4 className="text-2xl font-bold py-4" >Bussiness</h4>
          </div>

          <Navigation
            navLinks={[
              { title: "Home", href: "/" },
              { title: "About", href: "/about" },
              { title: "Services", href: "/services" },
              { title: "Systems", href: "/systems" },
            ]}
          />

          </header>

          <hr/>

          <main>{children}</main>

          <Footer/>
        </container>

        
      </body>
    </html>
  );
}
