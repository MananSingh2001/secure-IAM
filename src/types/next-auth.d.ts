import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      roles: string[];
    } & DefaultSession["user"];
  }

  interface Profile {
    realm_access?: {
      roles: string[];
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles: string[];
  }
}
