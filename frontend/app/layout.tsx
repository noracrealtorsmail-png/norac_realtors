import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";

export const metadata: Metadata = {
  title: "Norac Realtors | Innovation, Technology, Research",
  description: "Redefining the future of real estate and investment excellence in Kenya.",
  icons: {
    icon: "/assets/logo/logo-2-removebg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-background text-foreground"
      >
        <Providers>
          <div className="fixed inset-0 -z-20 bg-background transition-colors duration-300" />
          <AnimatedGradientBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
