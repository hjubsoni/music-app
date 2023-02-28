import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;
export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  if (req.nextUrl.pathname.includes('/api/auth')) {
    return NextResponse.next();
  }
  if (req.nextUrl.pathname.startsWith('/player') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/login', '/player'],
};
