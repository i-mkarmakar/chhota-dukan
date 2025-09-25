import "./global.css";
import { Poppins, Roboto } from "next/font/google";

import Provider from "./provider";
import Header from "../shared/widgets/header";

export const metadata = {
  title: "Chhota Dukan",
  description: "",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "700", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
