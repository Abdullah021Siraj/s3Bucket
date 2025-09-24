import { Inter } from 'next/font/google'; 
import './globals.css';

// Configure the font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter', 
});

export const metadata = {
  title: 'S3',
  description: 'SPA',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}