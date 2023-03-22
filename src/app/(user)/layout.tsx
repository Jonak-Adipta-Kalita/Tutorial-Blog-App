import Header from "../../components/Header";
import "../../styles/globals.css";

export const metadata = {
  title: "JAK Blog App",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Banner */}
        {children}
      </body>
    </html>
  );
}
