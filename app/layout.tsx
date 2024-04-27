import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/redux/provider";
import { ConfigProvider } from "antd";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolve College",
  description: "This is a evolve college website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fe5d26",
            },
          }}
        >
          <Provider>{children}</Provider>
        </ConfigProvider>
      </body>
    </html>
  );
}
