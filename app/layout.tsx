import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // base
  metadataBase: new URL('https://example.com'),

  // 기본
  title: {
    default: '',
    template: '%s - ',
  },
  description: '',

  // robots
  robots: {
    index: true,
    follow: true,
  },

  // og
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '',
    siteName: '',
    title: '',
    description: '',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: '',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    site: '',
    creator: '',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: '',
      },
    ],
  },
  // 기타
  formatDetection: {
    address: true, // 주소 형식을 감지하고 링크를 생성합니다.
    email: true, // 이메일 형식을 감지하고 링크를 생성합니다.
    telephone: true, // 전화번호 형식을 감지하고 링크를 생성합니다.
    date: true, // 날짜 형식을 감지하고 링크를 생성합니다.
    url: true, // URL 형식을 감지하고 링크를 생성합니다.
  },

  generator: 'Next.js',
  applicationName: 'Next.js',

  authors: [
    { name: '', url: '' },
    { name: '', url: '' },
  ],
  creator: '',
  publisher: '',
  keywords: [''],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
