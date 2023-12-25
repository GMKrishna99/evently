import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <div>
      <Header />
      <body>{children}</body>
      <Footer />
    </div>
=======
    <html lang="en">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
>>>>>>> b40a0b33de36d41ba60f0dcc83b6a2ea3b85a1fb
  );
}
