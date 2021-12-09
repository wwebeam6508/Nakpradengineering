
import { Route, Routes, useLocation } from 'react-router'
import './App.scss'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Main from './pages/Main/Main'
import Works from './pages/Works/Works'
import Service from './pages/Service/Service'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as firebase from 'firebase/app'
import {firebaseConfig} from './firebase/firebaseConfig'
firebase.initializeApp(firebaseConfig)
function App() {
    const location = useLocation()
    const [tabActive, settabActive] = useState(location.pathname)
    useEffect(() => {
        settabActive(location.pathname)
        window.scrollTo(0, 0)
    },[settabActive,location.pathname])
    return (
        <div>
            {
                tabActive !== '/' && 
                <nav className="main navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="title navbar-brand" href="#">Nakprad Engineering</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="menu navbar-nav">
                                <li className="nav-item">
                                    <Link className={`nav-link ${tabActive === '/' ? "active" : ""}`} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${tabActive === '/about' ? "active" : ""}`} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${tabActive === '/works' ? "active" : ""}`} to="/works">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${tabActive === '/service' ? "active" : ""}`} to="/service">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${tabActive === '/contact' ? "active" : ""}`} to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="works" element={<Works />} />
                <Route path="service" element={<Service />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            {/* <div class="footer mt-auto py-3">
                <div class="container">
                    <span class="text-muted">Place sticky footer content here.</span>
                </div>
            </div> */}
        </div>
        
    )
}

export default App
