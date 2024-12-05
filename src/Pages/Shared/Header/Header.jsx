import logo from '../../../assets/assets/logo.png';

const Header = () => {
    return (
        
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='my-3 text-xl'>
                Journalism Without Fear or Favour
            </p>
            <p className='text-2xl'>
                <time>November 28, 2024</time>
            </p>
        </div>
    );
};

export default Header;