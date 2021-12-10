import React, { useRef, useState } from "react"
import { getWorksCount, getWorksData } from "./WorksProvider"
import './Works.scss'
import ProjectDetailModal from "./ProjectDetailModal/ProjectDetailModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import ImageViewer from 'react-simple-image-viewer'
export default function Works() {
    const [isShowMore, setIsShowMore] = useState(false)
    const [limit, setLimit ] = useState(8)
    const [works, setWorks ] = useState([])
    const projectDetailModal = useRef(null)
    useState(()=>{
        getWorks()
    },[works])
    return(
        <div className="works">
            <ProjectDetailModal ImageViewer={ImageViewer} ref={projectDetailModal} />
            <div className="group">
                {
                    works && works.map((work, idx)=>{
                        return (
                            <div className="imagezone" onClick={()=>{projectDetailModal.current.openModal({workId:work.id})}} key={idx}>
                                <div className="image" style={{backgroundImage:`url(${work.thumnail})`}}></div>
                                <h4 className="title">{work.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
            {
                isShowMore && 
                <div className="more">
                    <FontAwesomeIcon onClick={()=>{loadMore()}} className="icon" style={{fontSize:"80px"}} icon={faPlusCircle}/>
                </div>
            }
        </div>
    )

    async function getCount(worksize) {
        const count = await getWorksCount()
        if(worksize < count.size && worksize <= 8){
            setIsShowMore(true)
        } else {
            setIsShowMore(false)
        }
    }

    async function getWorks(moreLimit = 0) {
        let currentlimit = limit + moreLimit
        const querySnapshot = await getWorksData(currentlimit)
        setLimit(currentlimit)
        setWorks(querySnapshot)
        await getCount(querySnapshot.length)
    }

    async function loadMore() {
        await getWorks(4)
    }
}