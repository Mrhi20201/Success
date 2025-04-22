import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Success',
  description: 'My Ideal future Life and what I think Succses is!',
  openGraph: {
    title: 'Succses and my Ideal Life!',
    description: 'My Ideal future Life and what I think Succses is!',
    url: 'https://ai-aviation-journey.com',
    siteName: 'success',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e',
        width: 1200,
        height: 630,
        alt: 'Aviation and AI',
      },
    ],
    locale: 'en-AUS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Aviation Journey',
    description: 'My Ideal future Life and what I think Succses is!',
    images: ['https://images.unsplash.com/photo-1464037866556-6812c9d1c72e'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 pl-16">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}