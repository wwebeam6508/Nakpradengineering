import { collection, doc, getFirestore, getDoc, getDocs} from '@firebase/firestore'
export async function getWorksDataById(workId) {
    const db = getFirestore()
    const worksRef = collection(db, 'works')
    const worksDoc = doc(worksRef, `${workId}`)
    const workSnap = await getDoc(worksDoc)
    if (workSnap.exists()) {
        return workSnap.data() 
    } else {
        return {
            error:{
                message:"ไม่มีข้อมูล"
            }
        }
    }
}

export async function getWorkGalleryById(workId){
    const db = getFirestore()
    const worksRef = collection(db, 'works')
    const worksDoc = doc(worksRef, `${workId}`)
    const galleryRef = collection(worksDoc, 'gallery')
    const workSnap = await getDocs(galleryRef)
    let data = []
    workSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data())
        data[data.length - 1].id = doc.id
    })
    return data
}