import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
require('dotenv').config();

const secret = 'DYOTIS';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET,
    })
  ],
  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     // Custom logic after successful sign-in
  //     return true;
  //   },
  //   async redirect(url, baseUrl) {
  //     if (typeof url === 'string') {
  //       return url.startsWith(baseUrl) ? url : baseUrl;
  //     }
  //     return baseUrl;
  //   },    
  // },
  secret
});
