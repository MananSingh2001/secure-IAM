"use server";

export async function logToNexusCore(userId: string, action: string) {
  try {
    await fetch("http://localhost:4000/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        action,
        resource: "system-dashboard",
        timestamp: new Date().toISOString(),
      }),
    });
    console.log(`✅ Audit log sent for ${action}`);
  } catch (error) {
    console.error("❌ Nexus-Core API is offline");
  }
}
