import './style/nav.css'
import LogoResphot from './LogoResphot.png' 

const Nav = () => (
    (
        <div className="navigation">
            <div className="title">
                <h1><span className="res">Res</span><span className="phot">Phot</span></h1>
            </div>
            <div className="for-img">
                <img src={LogoResphot} alt="logo"/> 
            </div>
        </div>
    )
)  

export default Nav; 
