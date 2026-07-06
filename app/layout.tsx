import type { Metadata } from "next";

import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";

import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {

  title:"MSME Financial Health Copilot",

  description:"IDBI Innovate 2026",

};

export default function RootLayout({

  children,

}:Readonly<{

  children:React.ReactNode;

}>){

  return(

    <html

      lang="en"

      suppressHydrationWarning

    >

      <body>

        <ThemeProvider>

          <TooltipProvider>

            {children}

          </TooltipProvider>

        </ThemeProvider>

      </body>

    </html>

  );

}