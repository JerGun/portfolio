import { NextResponse } from "next/server"
import * as jose from "jose"

export async function middleware(req) {
  // const jwt = req.cookies.get("accessToken")
  // const url = req.url

  // if (url.includes("/admin") && url.pathname != "/admin/login") {
  //   if (jwt === undefined) {
  //     const url = req.nextUrl.clone()
  //     url.pathname = "/admin/login"
  //     return NextResponse.rewrite(url)
  //   }

  //   try {
  //     await jose.jwtVerify(
  //       jwt,
  //       new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
  //     )
  //     return NextResponse.next()
  //   } catch (error) {
  //     console.log(error);
  //     const url = req.nextUrl.clone()
  //     url.pathname = "/admin/login"
  //     return NextResponse.rewrite(url)
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin',
};
