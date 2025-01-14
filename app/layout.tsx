// app/layout.tsx
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import ScrollToTop from "./component/ScrollToTop";
import { CartProvider } from './component/CartContext';


// Metadata for the document head
export const metadata: Metadata = {
  title: "Pc & Hight End performance Laptop",
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pc & Hight End performance Laptop</title>
        {/* Favicon Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="assets/images/favicons/site.webmanifest" />
        <meta name="description" content="Pc & Hight End performance Laptop" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />


        {/* Inline styles for jarallax */}
        <style type="text/css" id="jarallax-clip-0">
          {`#jarallax-container-0 {
            clip: rect(0 1348px 556px 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }`}
        </style>
        <style type="text/css" id="jarallax-clip-1">
          {`#jarallax-container-1 {
            clip: rect(0 1348px 901.90625px 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }`}
        </style>
      </head>

      <body className="custom-cursor">
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />

        <div className="preloader" style={{ display: 'none' }}>
          <div className="preloader__image" style={{ backgroundImage: 'url(assets/images/loader.png)' }} />
        </div>

        <CartProvider>
          <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </CartProvider>

        <ScrollToTop />
      </body>
    </html>
  );
}
