import { Link } from 'react-router-dom';
import github from './github.png';
import instagram from './instagram.png';
import linkedIn from './linkedin.png';

const Footer = () => {
    return ( 
        <footer>
            <div className='footer-container'>
                <div className='logos'>
                    <div>
                        <Link to='https://github.com/bankah-junior'><img src={github} alt='Github logo' title='Github'/></Link>
                    </div>
                    <div>
                        <Link to='https://www.instagram.com/@iam.bankah'><img src={instagram} alt='Instagram logo' title='Instagram'/></Link>
                    </div>
                    <div>
                        <Link to='https://www.linkedin.com/in/anthony-bekoe-bankah-080448240'><img src={linkedIn} alt='LinkedIn logo' title='LinkedIn'/></Link>
                    </div>
                </div>
                <div>
                    <span>Terms of Use</span>
                    <span> * </span>
                    <span>Privacy Policy</span>
                </div>
                <span>@2023 BankiDes</span>
            </div>
        </footer>
    );
}
 
export default Footer;