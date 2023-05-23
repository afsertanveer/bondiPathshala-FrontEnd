import { Link } from 'react-router-dom';
import logo from '../assets/img/image.png';
const LogoTopCenter = () => {
    return (
        <div className="flex flex-row flex-wrap md:flex-nowrap py-8">
            <div className="basis-1/2 mx-auto">
                <div className="content-center">
                    <Link to="/">
                        <img src={logo} alt="SiteLogo" className='img mx-auto' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogoTopCenter