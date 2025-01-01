import "./_globals.scss";
import { Inter } from "next/font/google";
import NextuiProvider from "./nextui/nextui_provider";
import Header from "./components/header/header";
import BottomNavbar from "./components/bottom_navbar/bottom_navbar";
import Footer from "./components/footer/footer";
import { ReduxProvider } from "./redux/redux_provider";
import BackToTop from "./components/back_to_top";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "900"]});

export const metadata = {
  title: "Online Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className={`${inter.className} min-h-screen pb-[80px] lg:pb-0 text-sm lg:text-base !leading-normal`}>
        <NextuiProvider>
          <ReduxProvider>
            <Header />
            <BackToTop />
            {children}
            <Footer />
            <BottomNavbar />
          </ReduxProvider>
        </NextuiProvider>
      </body>
    </html>
  );
}
