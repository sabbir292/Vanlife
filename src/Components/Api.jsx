
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSLlT2GQdjGhICoHB0ELKzj_vX5HJiwTA",
  authDomain: "vanlife-1b4f7.firebaseapp.com",
  projectId: "vanlife-1b4f7",
  storageBucket: "vanlife-1b4f7.appspot.com",
  messagingSenderId: "245487527120",
  appId: "1:245487527120:web:102ba5e01a3f0f6077aad5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, 'vans')



export async function getVans(){
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}


export async function getVan(id){
    const vanRef =  doc(db, 'vans', id)
    const vanSnapshot = await getDoc(vanRef)

    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}


export async function getHostVans(){
    const partQuerySnapshot = query(vansCollectionRef, where('hostId', '==', '123'))
    // query function need to use to get the some part of the data collection.
    const querySnapshot = await getDocs(partQuerySnapshot)
    const dataArr = querySnapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}




// authentication 
import { getAuth } from "firebase/auth";

export const auth = getAuth(app)


// export async function getVans(id) {

//     const url = id? `/api/vans/${id}` : '/api/vans'
//     const res = await fetch(url)
//     if(!res.ok){
//         throw{
//             message:'Failed to load vans',
//             statusText: res.statusText,
//             status: res.status,
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans(id) {
//     const url = id? `/api/host/vans/${id}`: '/api/host/vans'
//     const res = await fetch(url)
//     if(!res.ok){
//         throw{
//             message:'Failed to load vans',
//             statusText: res.statusText,
//             status: res.status,
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }
