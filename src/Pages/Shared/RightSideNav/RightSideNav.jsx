import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

import qZone1 from "../../../assets/assets/qZone1.png";
import qZone2 from "../../../assets/assets/qZone2.png";
import qZone3 from "../../../assets/assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            {/* log in part  */}
            <div className=" md:mt-10 space-y-3 md:space-y-5 mb-6">
                <h2 className="text-xl md:text-2xl font-bold">Login With</h2>
                <button className="w-full btn btn-outline">
                    <FaGoogle />
                    <span className="ml-2">Login with Google</span>
                </button>
                <button className="w-full btn btn-outline">
                    <FaGithub />
                    <span className="ml-2">Login with Github</span>
                </button>
            </div>

            {/* Find part  */}
            <div className=" md:mt-10 space-y-3 md:space-y-5 mb-6">
                <h2 className="text-xl md:text-2xl font-bold">Find Us On</h2>

                <div className="p-4 border border-gray-300 rounded-lg">

                    <a className="flex items-center gap-2 border border-gray-300 p-3 rounded-t-lg hover:text-sky-900" href=""><CiFacebook />
                        Facebook</a>
                    <a className="flex items-center gap-2 border border-gray-300 p-3 rounded--lg hover:text-sky-400" href=""><FiTwitter />Twitter</a>
                    <a className="flex items-center gap-2 border border-gray-300 p-3 rounded-b-lg hover:text-pink-500" href=""><FaInstagram />Instagram</a>
                </div>
            </div>

            {/* Q zone  */}

            <div className="bg-gray-100 p-4 rounded-lg md:mt-10 space-y-3 md:space-y-5 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-center">Q Zone</h2>
                <img className="w-full cursor-pointer" src={qZone1} alt="" />
                <img className="w-full cursor-pointer" src={qZone2} alt="" />
                <img className="w-full cursor-pointer" src={qZone3} alt="" />

            </div>

        </div>

    );
};

export default RightSideNav;