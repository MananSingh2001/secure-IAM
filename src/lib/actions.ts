"use server"

import { signOut, auth } from "@/auth"

export async function federatedLogout() {
  const session = await auth();
  
  // 1. Clear the local app session
  await signOut({ redirect: false });

  // 2. Build the Keycloak Logout URL
  const idToken = (session as any)?.id_token;
  const baseUrl = process.env.AUTH_KEYCLOAK_ISSUER;
  const clientId = process.env.AUTH_KEYCLOAK_ID;
  const postLogoutRedirectUri = encodeURIComponent(process.env.NEXTAUTH_URL || "http://localhost:3000");

  // Format: /protocol/openid-connect/logout?id_token_hint=...&post_logout_redirect_uri=...
  const logoutUrl = `${baseUrl}/protocol/openid-connect/logout?id_token_hint=${idToken}&client_id=${clientId}&post_logout_redirect_uri=${postLogoutRedirectUri}`;

  return logoutUrl;
}