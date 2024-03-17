import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "CODILLION - BORN TO CODE",
  description: "OFFICIAL WEBSITE OF CODILLION",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <body>
      <NextTopLoader />
        {children}
        </body>
    </html>
  );
}
