import "./globals.css";

import NavBar from "./components/nav-bar";

export const metadata = {
  title: "raphael perez",
  description: "Ilustração para Arquitetura e Design de Interiores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <NavBar />
        </nav>
        {children}
      </body>
    </html>
  );
}
