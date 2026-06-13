import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PIIDM | #1 Digital Marketing Courses In Pune & Placements",
  description: "Enhance your digital skills. Join PIIDM's Performance Marketing & Gen-AI Powered Digital Marketing Courses with Placements at Affordable Fees.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
