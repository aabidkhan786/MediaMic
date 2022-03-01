import React from 'react'
import logo from '../news.png'

export default function Navbar(props) {
    return (
        <div className="d-flex justify-content-center shadow-sm1 p-3 mb-5 bg-white rounded head-font head-section">
            <header>
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="newslogo" style={{width:'55px'}}/>
                    <h4 className='my-2 mx-2 head-font-size'>{props.title}</h4>
                    <a href="/"><i className="fa-solid fa-bars"></i></a>
                </div>
                <div className="category_section">
                    <ul>
                        <a href="/Business"><li><i className="fa-solid fa-chart-line"></i>Business</li></a>
                        <a href="/Sports"><li><i className="fa-solid fa-volleyball"></i>Sports</li></a>
                        <a href="/Entertainment"><li><i className="fa-solid fa-video"></i>Entertainment</li></a>
                        <a href="/Science"><li><i className="fa-solid fa-flask"></i>Science</li></a>
                        <a href="/Technology"><li><i className="fa-solid fa-microchip"></i>Technology</li></a>
                        <a href="/Health"><li><i className="fa-solid fa-briefcase-medical"></i>Health</li></a>
                    </ul>
                </div>
            </header>
        </div>
  );
}
