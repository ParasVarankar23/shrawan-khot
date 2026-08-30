import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Birthday Shrawan 🎂 | A Friendship Since 2016",
  description:
    "A special birthday story celebrating ten years of friendship, memories, laughter, and unforgettable moments since 2016.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF9F2] text-[#263238]">
        {children}
      </body>
    </html>
  );
}

