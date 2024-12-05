
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrekingNews from "./BrekingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    // console.log(news);

    return (
        <div className="mt-5">
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:mt-10 md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>

    );
};

export default Home;