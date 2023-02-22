import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with Next 13</title>
      </head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
