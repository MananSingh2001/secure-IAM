import { auth } from "@/auth"

export default async function AdminDashboard() {
  const session = await auth();
  const roles = (session?.user as any)?.roles || [];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Nexus Control Center</h1>
      
      {/* Admin-only section */}
      {roles.includes("admin") ? (
        <div className="mt-6 p-6 bg-purple-100 border-l-4 border-purple-500 text-purple-900">
          <h3 className="font-bold">Admin Privileges Active</h3>
          <p>You have access to environment configuration and user management.</p>
        </div>
      ) : (
        <div className="mt-6 p-6 bg-blue-50 text-blue-700 rounded">
          <p>Standard user view. Please contact an admin for elevated access.</p>
        </div>
      )}
    </div>
  )
}