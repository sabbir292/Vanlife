// import { redirect } from "react-router-dom"
import { redirect } from "./RedirectUtils"

export async function authRequired(){
    const isLoggedIn = true
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        throw redirect("/login?message=You must login first")
    }
}
