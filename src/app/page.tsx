import { auth, signIn } from "@/auth";
import LogoutButton from "../components/LogoutButton";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <h1 className="text-4xl font-bold mb-8">Secure Nexus Dashboard</h1>

      {!session ? (
        <form
          action={async () => {
            "use server";
            await signIn("keycloak", { prompt: "login" });
          }}
        >
          <button className="bg-blue-600 text-white py-3 px-8 rounded-full">
            Sign In with Keycloak
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-xl">Welcome, {session.user?.name}</p>
          {/* We use a Client Component for the Logout to handle the external redirect */}
          <LogoutButton />
        </div>
      )}
    </main>
  );
}
