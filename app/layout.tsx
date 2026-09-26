import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/components/CartContext";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const oswald=Oswald({subsets:["latin"],variable:"--font-oswald"});
export const metadata:Metadata={title:"BLAZE | Martial Arts Fitness",description:"打って、蹴って、理想の自分へ。自宅でできる格闘技フィットネス。"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}><CartProvider><Header/>{children}</CartProvider></body></html>}
