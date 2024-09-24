import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { StateProvider } from "@/state/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fayhr: A Decentralized Cooperative-As-A-Service Protocol",
  description:"Fayhr is a pioneering protocol designed to empower decentralized cooperatives by offering a comprehensive Cooperative-as-a-Service (CaaS) solution. Built on blockchain technology, Fayhr enables communities and organizations to collaboratively manage resources, decision-making, and governance through transparent, trustless, and automated processes. The protocol supports the creation, management, and growth of cooperatives, leveraging smart contracts to facilitate equitable participation and reward distribution among members.",
  keywords:"Decentralized Cooperative, Cooperative-as-a-Service (CaaS), Blockchain Protocol, Smart Contracts, Decentralized Governance, Resource Management, Community Empowerment, Fayhr Protocol"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <StateProvider>{children}</StateProvider>
          </ThirdwebProvider>
          </body>
    </html>
  );
}
