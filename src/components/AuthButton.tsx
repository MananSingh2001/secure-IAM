import { signIn, signOut, auth } from "@/auth";

export default async function AuthButton() {
  const session = await auth(); // Get the current session on the server

  if (!session) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("keycloak");
        }}
      >
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign In with Keycloak
        </button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <p>Signed in as {session.user?.name}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="text-red-500 underline">Sign Out</button>
      </form>
    </div>
  );
}
