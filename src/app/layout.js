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
      <NextTopLoader color="#5f43ff" showSpinner={false} shadow="0 0 10px #5f43ff,0 0 5px #5f43ff"/>
        {children}
        </body>
    </html>
  );
}
