import NextAuth, { AuthOptions } from 'next-auth';
import axios from 'axios';
import Credentials from 'next-auth/providers/credentials';
import { NextApiRequest, NextApiResponse } from 'next';
import { UserLoginResponse } from '@/modules/auth';

const options: AuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post<UserLoginResponse>(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
            identifier: credentials?.email,
            password: credentials?.password,
          });
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.username,
            jwt: data.jwt,
          };
        } catch (e) {
          throw e;
          // console.log('caught error');
          // const errorMessage = e.response.data.message
          // Redirecting to the login page with error message          in the URL
          // throw new Error(errorMessage + '&email=' + credentials.email)
        }
      },
    }),
  ],
  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    // Getting the JWT token from API response
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user?.jwt;
        token.id = user?.id;
        token.name = user?.name;
        token.email = user?.email;
      }
      return Promise.resolve(token);
    },

    // session: async ({ session, user }) => {
    //   session.jwt = user?.jwt;
    //   session.id = user?.user?.id;
    //   return Promise.resolve(session);
    // },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
// export default NextAuth(options);
