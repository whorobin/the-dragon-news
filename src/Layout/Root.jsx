
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto font-Poppins px-5 md:px-5 lg:px-0'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;