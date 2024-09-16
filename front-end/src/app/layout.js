import { AuthProvider } from "../hooks/auth";
import "./globals.css";

export const metadata = {
  title: "Meet bot",
  description: "Translate your online meetings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
        <footer></footer>
      </body>
    </html>
  );
}
