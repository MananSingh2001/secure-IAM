"use client"

import { federatedLogout } from "@/lib/actions"

export default function LogoutButton() {
  return (
    <button 
      onClick={async () => {
        const logoutUrl = await federatedLogout();
        // Redirect the user to Keycloak to end the SSO session
        window.location.href = logoutUrl; 
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
    >
      Full Sign Out
    </button>
  )
}