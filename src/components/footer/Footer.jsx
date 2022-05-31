import { React, forwardRef } from 'react';


import logotipoWhiteGreen from '../../../assets/logotipo-w-g.png';
import facebook from '../../../assets/socialMedia/facebook.png';
import instagram from '../../../assets/socialMedia/instagram.png';
import twitter from '../../../assets/socialMedia/twitter.png';
import youtube from '../../../assets/socialMedia/youtube.png';



import './footer.css'

const Footer = forwardRef((props, ref) => {
    return(
        <footer ref={ref ? ref : null}>
            <img src={logotipoWhiteGreen} alt="Radio Eter MDP" />

            <div className="socialMedias">
                <a href="https://es-la.facebook.com/radioetermdp/" target='_blank' rel='oopener noreferrer'><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/radioetermdp/" target='_blank' rel='oopener noreferrer'><img src={instagram} alt="" /></a>
                <a href="https://twitter.com/radioetermdp" target='_blank' rel='oopener noreferrer'><img src={twitter} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCvjLT6lA90NbTzeRu9Xywkg" target='_blank' rel='oopener noreferrer'><img src={youtube} alt="" /></a>
            </div>

        </footer>
    )
})

export default Footer;