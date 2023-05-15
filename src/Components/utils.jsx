import { redirect } from "react-router-dom"
// import { redirect } from "./RedirectUtils"

export async function authRequired(request){
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const pathName = new URL(request.url).pathname
    if (!isLoggedIn) {
        throw redirect(
            `/login?redirectTo=${pathName}&message=You must login first`
            )
        }
        return null
}
