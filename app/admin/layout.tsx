import type { Metadata } from 'next';
import './admin.css';

export const metadata: Metadata = {
  title: 'Sanity Studio | Diyetisyen Oğuz',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-wrapper">
      {children}
    </div>
  );
}
