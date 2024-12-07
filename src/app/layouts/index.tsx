import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import "../styles";

const eraserDust = localFont({
  src: "../font/EraserDust.ttf",
  variable: "--font-eraser-dust",
  weight: "100 200 300 400 500 600 700 800 900",
});

const SchoolSafetyChalkboardEraser = localFont({
  src: "../font/SchoolSafetyChalkboardEraser.ttf",
  variable: "--font-school_safety_chalkboard_eraser",
  weight: "100 200 300 400 500 600 700 800 900",
});

const ChildFundKoreaMinGuk = localFont({
  src: "../font/ChildFundKoreaMinGuk.ttf",
  variable: "--font-child-fund-korea-min-guk",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body
        className={`${eraserDust.variable} ${SchoolSafetyChalkboardEraser.variable} ${ChildFundKoreaMinGuk.variable}`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
};
