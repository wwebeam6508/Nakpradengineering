import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestion,  faBriefcase, faWrench, faPhone} from "@fortawesome/free-solid-svg-icons"
import logo from '../../assets/image/logo.jpg'
export default function Main() {
    const [home, setHome] = useState(false)
    const [service, setService] = useState(false)
    const [contact, setContact] = useState(false)
    const [about, setAbout] = useState(false)
    const [works, setWorks] = useState(false)
    const [gallary, setGallary] = useState(false)
    return(
        <div className="home">
            <div className="title">
                <img height="200px" width="300px" className="logo" src={logo}/>
                <h3 >หจก. นักปราชญ์ เอ็นจิเนียริ่ง</h3>
            </div>
            <div className="leftimage">
                {
                    contact && <h5 >ติดต่อเรา</h5>
                }
                {
                    service && <h5 >บริการของเรา</h5>
                }
            </div>
            <div className="topimage">
                {
                    home && <h5 >บริษัทรับสร้างและออกแบบระบบซอฟแวร์หรือ IT Solution นำเข้าสินค้าคอมพิวเตอร์ และ ติดตั้งและเคลื่อนย้ายระบบ</h5>
                }
            </div>
            <div className="bottomimage">
                {/* {
                    gallary && <h5 >รูปภาพ</h5>
                } */}
            </div>
            <div className="mainmenu container">
                <nav className="menu">
                    <input readOnly={true} type="checkbox" href="#" checked={true} className="menu-open" name="menu-open" id="menu-open" />
                    <label className="menu-open-button" htmlFor="menu-open">
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                    </label>
                    <Link onMouseEnter={()=>{setHome(true)}} onMouseLeave={()=>{setHome(false)}} className="menu-item item-1 notselect" to="/"> 
                        <FontAwesomeIcon  icon={faHome}/>
                    </Link>
                    <Link onMouseEnter={()=>{setAbout(true)}} onMouseLeave={()=>{setAbout(false)}} className="menu-item item-2" to="/about">
                        <FontAwesomeIcon  icon={faQuestion}/>
                    </Link>z
                    <Link onMouseEnter={()=>{setWorks(true)}} onMouseLeave={()=>{setWorks(false)}} className="menu-item item-3" to="/works">
                        <FontAwesomeIcon  icon={faBriefcase}/>
                    </Link>
                    {/* <Link onMouseEnter={()=>{setGallary(true)}} onMouseLeave={()=>{setGallary(false)}} className="menu-item item-5" to="/service">
                        <FontAwesomeIcon  icon={faPhotoVideo}/>
                    </Link> */}
                    <Link  onMouseEnter={()=>{setService(true)}} onMouseLeave={()=>{setService(false)}} className="menu-item item-4" to="/service">
                        <FontAwesomeIcon  icon={faWrench}/>
                    </Link>
                    <Link  onMouseEnter={()=>{setContact(true)}} onMouseLeave={()=>{setContact(false)}}  className="menu-item item-6" to="/contact">
                        <FontAwesomeIcon  icon={faPhone}/>
                    </Link>
                </nav>
            </div>
            <div className="rightimage">
                {
                    about && <h5 >เกี่ยวกับเรา</h5>
                }
                {
                    works && <h5 >โปรเจคของเรา</h5>
                }
            </div>
            
            <div className="footer mt-auto py-3">
                <div className="container">
                    <div id="Certificate-banners"></div>
                </div>
            </div>
            
        </div>
    )
}