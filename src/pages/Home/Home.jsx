import { useLoaderData } from "react-router-dom";
import Header from "../../sides/Header/Header";
import Navbar from "../../sides/Navbar/Navbar";
import NavbarLeftSide from "../../sides/NavbarLeftSide/NavbarLeftSide";
import NavbarRightSide from "../../sides/NavbarRightSide/NavbarRightSide";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const allNews = useLoaderData();
    console.log(allNews);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-4 mt-16">
                <div className="">
                    <NavbarLeftSide></NavbarLeftSide>
                </div>
                <div className="col-span-2">
                    {
                        allNews.map(news => <NewsCard
                        key={news._id}
                        news = {news}
                        ></NewsCard>)
                    }
                </div>
                <div className="">
                    <NavbarRightSide></NavbarRightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;