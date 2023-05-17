import { redirect } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Api";
import { async } from "@firebase/util";
// import { redirect } from "./RedirectUtils"

export async function authRequired(request) {
  const pathName = new URL(request.url).pathname;
  console.log(pathName)
  const currentUser = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  if (!currentUser) {
    throw redirect(`/login?redirectTo=${pathName}&message=You must login first`);
  }

  return null;
}



