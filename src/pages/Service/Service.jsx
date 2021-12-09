import React from "react"
import './Service.scss'
export default function Service() {
    return(
        <div className="service">
            <div className="left">
                <div className="background"></div>
                <div className="des">
                    <h4>บริการออกแบบพัฒนาโปรแกรมเว็บไซต์ และ แอพพลิเคชั่น</h4>
                    <span style={{display:"block",width:"100%",wordWrap:"break-word"}}>
                        บริการออกแบบพัฒนาโปรแกรมโดยเริ่มจากสอบถามข้อมูลความต้องการเริ่มต้นจากผู้จ้างและทำการประเมินราคา
                        ตัวอย่างของโปรแกรมเช่น โปรแกรมจัดการบุคคลากรบริษัท, โปรแกรมซื้อขายของร้าน, โปรแกรมสต๊อกสินค้า และอื่นๆตามความต้องการของผู้จ้าง
                    </span>
                </div>
            </div>
            <div className="center">
                <div className="background"></div>
                <div className="des">
                    <h4>บริการติดตั้งระบบ Network และ อุปกรณ์ไฟฟ้าอื่นๆ</h4>
                    <span style={{display:"block",width:"100%",wordWrap:"break-word"}}>
                        บริการติดตั้งระบบ Network เครือข่ายและความปลอดภัยข้อมูลไซเบอร์ขององค์กรณ์รวมถึงระบบอุปกรณ์ไฟฟ้าอื่นๆเช่น ระบบโซล่าเซลล์แบบออนกริดและออฟกริด, ระบบควบคุมประตูไฟฟ้า เป็นต้น
                    </span>
                </div>
            </div>
            <div className="right">
                <div className="background"></div>
                <div className="des">
                    <h4>บริการนำเข้าจำหน่ายสินค้าอุปกรณ์คอมพิวเตอร์</h4>
                    <span style={{display:"block",width:"100%",wordWrap:"break-word"}}>
                        นำเข้าจำหน่ายสินค้าอุปกรณ์คอมพิวเตอร์ทั้งในและนอกประเทศ โดยอุปกรณ์จะ ซีพียู, เมนบอร์ด, จอคอมพิวเตอร์, แรม และ อุปกรณ์ไฟฟ้าอื่นๆ
                    </span>
                </div>
            </div>
        </div>
    )
}