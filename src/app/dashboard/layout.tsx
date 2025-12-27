import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8 text-blue-400">Nexus Admin</h2>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:text-blue-300">
            Overview
          </Link>
          <Link href="/dashboard/users" className="block hover:text-blue-300">
            User Management
          </Link>
          <Link href="/dashboard/logs" className="block hover:text-blue-300">
            Audit Logs
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
