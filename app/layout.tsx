import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Viewport } from "next";
import { Toaster } from "sonner";

export const metadata = {
  title: "EasyContent AI",
  description: "Next gen AI platform",
  metadataBase: new URL("http://localhost:3000"),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
            {children}
          </main>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
