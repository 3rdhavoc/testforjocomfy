import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full">
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
