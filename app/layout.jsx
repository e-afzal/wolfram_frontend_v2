import "./globals.css";

export const metadata = {
  title: "Wolfram Realty",
  description: "Wolfram Realty Concept based project",
  openGraph: {
    title: "Wolfram Realty",
    description: "Wolfram Realty Concept based project",
    url: "https://wolfram-ead.vercel.app",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddeima5fc/image/upload/v1719324267/wolfram_thumbnail_xpfvxh.jpg",
        width: 1000,
        height: 1000,
        // width: 1200,
        // height: 627,
      },
    ],
  },
  // <meta name=”robots” content="index, follow">
  // icons: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     href: '/favicon-32x32.png',
  //   },
  // ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
