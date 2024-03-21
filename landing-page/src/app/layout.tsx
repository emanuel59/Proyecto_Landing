import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { montserrat } from "./fonts";
import Image from "next/image";
import styles from "./home.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={`${montserrat.className}`} >

        <nav className={styles.navegacion}>
          <div className="w-4/5">
          <a href="" className="text-black font-semibold" style={{display:"flex"}} ><Image src="/LOGO.jpg" alt="imgLOGO" width={50} height={50} style={{ borderRadius: '50%', marginTop: '-12px', marginRight: '5px' }}/> Comunidad Cristiana Vision de Fe</a>
          </div>
    
          <div className="w-1/4 text-black font-semibold">
            <a className="mx-2" href="">Contacto</a>
            <a className="mx-2" href="">ChatBot</a>
            <a className="mx-2 bg-blue-500 rounded-full text-white p-2" href="">Iniciar Sesión</a>
          </div>
        </nav>

        {children}</body>
    </html>
  );
}
