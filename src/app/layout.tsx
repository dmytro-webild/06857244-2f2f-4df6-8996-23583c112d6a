import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'ChatPrivately | Secure & Distraction-Free Messaging',
  description: 'Chat privately and connect instantly with a clean, secure messaging platform for professionals and privacy-conscious individuals. No clutter, no tracking, just reliable communication.',
  keywords: ["private chat, secure messaging, real-time chat, personal chat, no tracking, data privacy, encrypted communication, distraction-free messaging"],
  openGraph: {
    "title": "ChatPrivately | Secure & Distraction-Free Messaging",
    "description": "Chat privately and connect instantly with a clean, secure messaging platform for professionals and privacy-conscious individuals.",
    "url": "https://chatprivately.com",
    "siteName": "ChatPrivately",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063165.jpg",
        "alt": "ChatPrivately desktop interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ChatPrivately | Secure & Distraction-Free Messaging",
    "description": "Chat privately and connect instantly with a clean, secure messaging platform.",
    "images": [
      "http://img.b2bpic.net/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063165.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
