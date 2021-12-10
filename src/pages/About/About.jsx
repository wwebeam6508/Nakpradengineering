import React from "react"
import car from '../../assets/image/1.jpg'
import pro from '../../assets/image/2.jpg'
import mac from '../../assets/image/3.jpg'
import './About.scss'
export default function About() {
    return(
        <div className="about">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pro} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-md-block">
                            <h1>ประวัติบริษัท</h1>
                            <p>บริษัทได้ก่อตั้งและจดทะเบียนเมื่อ วันที่ 9 มีนาคม พ.ศ.2564 ณ จังหวัดลำปาง</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={mac} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1>จุดประสงค์</h1>
                        <p>เพื่อพัฒนาติดตั้งระบบและแก้ปัญหาให้กับองค์กรต่างๆ ไม่ว่าจะเป็นด้านซอฟแวร์หรืออุปกรณ์ด้านอื่น</p>
                    </div>
                    </div>
                        <div className="carousel-item">
                            <img src={car} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-md-block">
                        <h1>งานที่เกี่ยวข้อง</h1>
                        <p>ประเภทงานที่ทางบริษัททำเกี่ยวกับการรับจ้าง เขียนโปรแกรม ออกแบบเขียนเว็บไซต์ แอพพลิเคชั่น สร้างและออกแบบระบบซอฟแวร์</p>
                        <p>รวมถึงฮารด์แวร์ประเภท IOT ติดตั้งระบบ Network และรับก่อสร้างที่เกี่ยวข้องกับเทคโนโลยีอย่างเช่น ติดตั้งโซล่าเซลล์</p>
                    </div>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}