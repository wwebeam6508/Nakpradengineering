import { collection, getDocs, getFirestore, query, limit} from '@firebase/firestore'
export async function getWorksData(limitAt) {
    const db = getFirestore()
    const worksRef = collection(db, 'works')
    const worksQuery = query(worksRef, limit(limitAt))
    const querySnapshot = await getDocs(worksQuery)
    let data = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data())
        data[data.length - 1].id = doc.id
    })
    return data
}

export async function getWorksCount() {
    const db = getFirestore()
    const worksRef = collection(db, 'works')
    return await getDocs(worksRef)
    
}