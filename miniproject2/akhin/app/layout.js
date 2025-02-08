import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "./components/wrapper";
import Nav from "./components/nav";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Wrapper>
      <body>
          {children}
        <Nav />
      </body>
        </Wrapper>
    </html>
  );
}
