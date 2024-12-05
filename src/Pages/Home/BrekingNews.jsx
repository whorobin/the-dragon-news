import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
    return (
        <div className="flex justify-between items-center">
            <button className='btn btn-outline font-semibold border-1 border-b-4 px-5'>
                Breaking News
            </button>
            <Marquee pauseOnHover={true} speed={100} className="text-2xl">
                <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</Link>
                <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</Link>
                <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</Link>
            </Marquee>
        </div>
    );
};

export default BrekingNews;