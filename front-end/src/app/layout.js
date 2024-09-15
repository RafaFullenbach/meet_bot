import "./globals.css";

export const metadata = {
  title: "Meet bot",
  description: "Translate your online meetings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
