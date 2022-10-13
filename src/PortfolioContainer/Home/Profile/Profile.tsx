import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className='profile-details'>
                    <div className='colz'>
                        <div className="colz-icon">
                            <a href='src/PortfolioContainer/Home/Profile/Profile#'>
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href='src/PortfolioContainer/Home/Profile/Profile#'>
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href='src/PortfolioContainer/Home/Profile/Profile#'>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href='src/PortfolioContainer/Home/Profile/Profile#'>
                                <i className="fa fa-youtube-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I'M <span className="highlighted-text">Sagor</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical loop={Infinity}
                                         steps={[
                                             'I am Backend Developer', 1000,
                                             'I am MERN Developer', 1000,
                                             'I am Python Developer', 1000
                                         ]}/>

                            </h1>
                        <span className="profile-role-tagline">Knock me for create application with front and back end operations</span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">Hire me</button>
                        <a href="public/soft.pdf" download='Sagor-resume.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
