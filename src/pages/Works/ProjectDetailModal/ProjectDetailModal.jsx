import { forwardRef, useCallback, useImperativeHandle, useState } from "react"
import Modal from "react-modal"
import './ProjectDetailModal.scss'
import { getWorkGalleryById, getWorksDataById } from "./ProjectDetailModalProvider"
import ImageViewer from 'react-simple-image-viewer';
function PickMapPosition(props,ref) {
    const [workId, setWorkId] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false)
    const [workDetail, setWorkDetail] = useState({})
    const [galleryWork , setGalleryWork] = useState([])


    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [images , setImages] = useState([])
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, [])

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    }

    useImperativeHandle(ref, ()=>(
        {
            openModal:openModal
        }
    ))
    Modal.setAppElement("body")

    return(
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="ProjectDetail Modal"
            style={{content:{
                padding:"0"
            }}}
        >
            {
                workDetail && 
                <div className="project">
                    <div className="tab">
                        <div className="body">
                            <a onClick={closeModal} style={{position:"absolute"}} className="btn btn-default">Close</a>
                            <span style={{textAlign:'center'}}><h4>{workDetail.title}</h4></span>
                        </div>
                    </div>
                    <div className="main">
                        <div className="detail">
                                {   workDetail.detail && 
                                    <div style={{padding:"50px"}}>
                                        <span style={{display:"block",width:"100%",wordWrap:"break-word"}}>{workDetail.detail}</span>
                                    </div>
                                }
                        </div>
                        <div className="gallery">
                                {
                                    galleryWork && galleryWork.map((photo, idx)=>{
                                        return (
                                            <div className="imagezone" onClick={()=>{}} key={idx}>
                                                <div onClick={ () => openImageViewer(idx) } className="image" style={{backgroundImage:`url(${photo.source})`}}></div>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
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
        </Modal>
    )

    async function afterOpenModal() {
        const workDetailData = await getWorksDataById(workId)
        if(workDetailData.error){
            console.log(workDetailData.error.message)
        }else{
            setWorkDetail(workDetailData)
        }

        const galleryWorkData = await getWorkGalleryById(workId)
        setGalleryWork(galleryWorkData)
        setImages(galleryWorkData.map((image)=>{
            return image.source
        }))
    }

    function closeModal() {
        setIsOpen(false)
    }
    function openModal(props) {
        setIsOpen(true)
        setWorkId(props.workId)
    }
}

export default forwardRef(PickMapPosition)