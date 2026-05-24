export const metadata = {
  title: 'Asha Travels Admin',
  description: 'Sanity Studio for Asha Travels',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
