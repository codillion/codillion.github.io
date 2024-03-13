export const metadata = {
  title: "NOTES - CODILLION",
  description: "OFFICIAL WEBSITE OF CODILLION",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <body>{children}</body>
    </html>
  );
}
