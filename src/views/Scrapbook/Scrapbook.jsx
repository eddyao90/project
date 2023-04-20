import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Link, NavLink } from 'react-router-dom';
import './Scrapbook.css';
import Comments from "../../components/Comment/Comment";

const Scrapbook= () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <>
            <div className="container-main">
                <main>
                    <aside className="aside-profile">
                        <div className="img-profile">
                        </div>
                        <div className="info-bio">
                            <h3>Profile</h3>
    
                            <p>Traveler</p>
                        </div>
    
                        <div className="social-media">

                            <div className="profile-sidebar">
                            <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                            to="/profile"
                            >
                            Profile
                            </NavLink>
                            </div>

                            <div className="scrapbook-sidebar">
                            <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                            to="/scrapbook">
                            Scrapbook
                            </NavLink>
                            </div>
    
                            <div className="photos">
                            <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                            to="/photos">
                            Photos
                            </NavLink>
                            </div>
    
    
                        </div>
    
                    </aside>
    
                    <div className="main-middle">
                        <section className="welcome-scrapbook">
                            <h2>Scrapbook</h2>
                            <Comments />
                        </section>
                        
    
                    </div>
                </main>
            </div>
        </>
    )
}

export default Scrapbook;