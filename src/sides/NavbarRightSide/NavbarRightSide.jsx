import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '../../assets/images/qZone1.png';
import Qzone2 from '../../assets/images/qZone2.png';
import Qzone3 from '../../assets/images/qZone3.png';

const NavbarRightSide = () => {
    return (
        <div className=''>
            <p className="text-2xl font-bold">Login With</p>
            <div className='mt-4'>
                <button className="btn w-full text-blue-600 border border-blue-600">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className='btn w-full border border-gray-500 mt-2'>
                    <FaGithub></FaGithub>
                    <span className='text-gray-500'>Login With Github</span>
                </button>
            </div>
            <div className='mt-8'>
                <p className='text-xl font-semibold text-gray-800 '>Find Us</p>
                <div className=' border rounded-t-md mt-4'>
                    <a className='flex gap-2 items-center p-4' href="">
                        <span className='bg-gray-100 p-2 rounded-full'><FaFacebook className=' text-blue-600 mx-auto'></FaFacebook></span>
                        <span className='text-gray-700 text-sm'>Facebook</span>
                    </a>
                </div>
                <div className='border-x'>
                    <a className='flex items-center p-4 gap-2' href="">
                        <span className='bg-gray-100 p-2 rounded-full'><FaTwitter className=' text-blue-500'></FaTwitter></span>
                        <span className='text-gray-700 text-sm'>Twitter</span>
                    </a>
                </div>
                <div className=' border rounded-b-md'>
                    <a className='flex items-center p-4 gap-2' href="">
                        <span className='bg-gray-100 p-2 rounded-full'><FaInstagram className=' text-[#F40076]'></FaInstagram></span>
                        <span className='text-gray-700 text-sm'>Instagram</span>
                    </a>
                </div>
            </div>
            <div className='mt-4 bg-gray-100 p-4 rounded-t'>
                <p className='text-xl font-semibold text-gray-800 '>Q Zone</p>
                <div className='mt-4'>
                    <img src={Qzone1} alt="" />
                    <img src={Qzone2} alt="" />
                    <img src={Qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NavbarRightSide;