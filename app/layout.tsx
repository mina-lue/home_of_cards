import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home of Cards",
  description: "Your Collection, Your Tools, Your community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
