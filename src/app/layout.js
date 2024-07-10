import { Inter } from "next/font/google";
// import Head from "next/head";
import "./globals.css";
import clsx from "clsx";
// import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Deepak", // Default template title
    default: "deepak", // Default title if template is not provided
  },
  description: "deepak",
};

export default function RootLayout({ children }) {
  const pageTitle = metadata.title.template || metadata.title.default;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </>
  );
}
