import React, { useCallback, useRef, useState } from "react"
import { getWorksCount, getWorksData } from "./WorksProvider"
import './Works.scss'
import ProjectDetailModal from "./ProjectDetailModal/ProjectDetailModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import ImageViewer from 'react-simple-image-viewer'

export default function Works() {
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [isShowMore, setIsShowMore] = useState(false)
    const [limit, setLimit ] = useState(8)
    const [works, setWorks ] = useState([])
    const projectDetailModal = useRef(null)
    
    const [currentImage, setCurrentImage] = useState(0)
    const [images , setImages] = useState([])
    useState(()=>{
        getWorks()
    },[works])

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, [])

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    }
    return(
        <div className="works">
            <ProjectDetailModal ImageViewer={(params)=>{callImageViewer(params)}} ref={projectDetailModal} />
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
            
            {isViewerOpen && (
                <ImageViewer
                        src={ images }
                        currentIndex={ currentImage }
                        disableScroll={ false }
                        closeOnClickOutside={ true }
                        onClose={ closeImageViewer }
                />
                
            )}
        </div>
    )

    function callImageViewer(params) {
        setImages(params.images)
        openImageViewer(params.idx)
    }
    

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