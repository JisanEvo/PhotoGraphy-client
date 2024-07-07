
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Page/Footer/Footer';
import BottomTabNavigation from '../Page/Navbar/Navbar';

const Main = () => {
    const location=useLocation()
    console.log(location)
    const noHeaderFooter=location.pathname.includes('login')||location.pathname.includes('register')
    return (
        <div className='container mx-auto'>
           {noHeaderFooter ||<BottomTabNavigation></BottomTabNavigation>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;