import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./utils/helper";
export const exludeRoute: string[] = ["/api/cookie"];

/**
 *! Following code will not work as expected if user is demoted from admin, but the cookie is not updated.
 *! Also there could be issues if a non admin user is trying to access admin route
 */

export const middleware = async (request: NextRequest) => {
  const currentPath = request.nextUrl.pathname;
  const url = request.nextUrl.clone();
  const token = request.cookies.get("authorization");
  const encryptedUser = request.cookies.get("current-user");
  const user: any | undefined =
    encryptedUser && decrypt(encryptedUser?.value);
  /**
   * Special rule
   */

  
  for (let i = 0; i < exludeRoute.length; i++) {
    if (currentPath.match(exludeRoute[i])) return NextResponse.next();
  }

  if (currentPath.match("/login")) {
    if (token !== undefined) {
      if (user?.isAdmin) url.pathname = "/user";
      return NextResponse.redirect(url);
    }
  }

  if (!currentPath.match("/login") && token === undefined) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
