import React, { useState } from "react"
import './Contact.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addFormContact } from "./ContactProvider"
import { faAddressBook, faMailBulk, faMapMarked, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReCAPTCHA from "react-google-recaptcha"
const MySwal = withReactContent(Swal)
export default function Contact() {
    const [emailAddress, setEmailAddress] = useState("")
    const [detail, setDetail] = useState("")
    const [isHuman , setIsHuman] = useState(false)
    return(
        <div className="contact">
            <div className="container">
                <div className="row  content">
                    <div className="left col-sm-6">
                        <h4>ที่อยู่</h4>
                        <p>
                            <span><FontAwesomeIcon icon={faAddressBook}/> 178/1 หมู่.1 ถนน.ซุปเปอร์ไฮเวย์ ต.ปงแสนทอง อ.เมืองลำปาง จ.ลำปาง 52100</span>
                            <br/>
                            <a className="link-light" target="_blank" href="https://www.google.co.th/maps/place/%E0%B8%AB%E0%B8%88%E0%B8%81.%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8D%E0%B9%8C+%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B8%88%E0%B8%B4%E0%B9%80%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%87+Nakprad+engineering+ltd./@18.2739597,99.4583081,21z/data=!4m5!3m4!1s0x30d96bdeb4afb5a3:0x3999c3f3013ab7ae!8m2!3d18.2739272!4d99.4583534"><FontAwesomeIcon icon={faMapMarked}/> Google Map</a>
                        </p>
                        <h4>ช่องทางติดต่อ</h4>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faPhone}/> : 06-2434-6508, 09-4898-9795, 054-011-832
                            </span>
                            <br/>
                            <span>
                                <FontAwesomeIcon icon={faMailBulk}/> : nakpradeng@gmail.com
                            </span>
                        </p>
                    </div>
                    <div className="right col-sm-6">
                        <div className="form">
                            <h4>ติดต่อเรา</h4>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input value={emailAddress} onChange={(e)=>{setEmailAddress(e.target.value)}} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">รายละเอียด</label>
                                <textarea value={detail} onChange={(e)=>{setDetail(e.target.value)}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <ReCAPTCHA
                                    sitekey="6LcLN5IdAAAAAApOshM6Gq-k91EflRe1MBNlAP8Q"
                                    onChange={()=>{setIsHuman(!isHuman)}}
                                />
                                <button disabled={!isHuman} onClick={sendContactForm} type="button" className="btn btn-outline-light btn-lg">ส่ง</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    async function sendContactForm(){
        if( isEmpty(emailAddress) || isEmpty(detail)){
            MySwal.fire({
                icon: 'warning',
                title: 'กรุณากรอกข้อมูลให้ครบ'
            })
        } else {
            try {
                await addFormContact({email: emailAddress, detail: detail})
                MySwal.fire({
                    icon: 'success',
                    title: 'ขอบคุณที่ติดต่อเรา'
                }).then(()=>{
                    setDetail("")
                    setEmailAddress("")
                })

            } catch (error) {
                MySwal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด',
                    text:error
                })
            }
        }
    }
    
    function isEmpty(str) {
        return !str.trim().length
    }
}