export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isOnVotingPage =
        request.nextUrl?.pathname.startsWith("/dashboard/Voting");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      if (isOnVotingPage && !user) {
        return false;
      }

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
