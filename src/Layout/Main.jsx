
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Footer/Footer';
import BottomTabNavigation from '../Page/Navbar/Navbar';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <BottomTabNavigation></BottomTabNavigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;