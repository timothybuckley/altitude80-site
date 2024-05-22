import { Inter } from 'next/font/google';
import '../styles/globals.css'; // Make sure this line is present

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'altitude80',
  description: 'Reimagine Legacy Modernization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}