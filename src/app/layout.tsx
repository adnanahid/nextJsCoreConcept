import "./globals.css"; // Ensure the file exists
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "My Second Next.js App",
  description: "Learning Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {/* Main Content */}
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
