import { useParams } from "react-router-dom";
import Header from "../../sides/Header/Header";
import NavbarRightSide from "../../sides/NavbarRightSide/NavbarRightSide";
import Navbar from "../../sides/Navbar/Navbar";



const News = () => {

    const newsData = useParams();
    console.log(newsData);


    return (
        <div className="">
            <Header></Header>
            <div className="mt-6">
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-4 mt-10">
                <div className="col-span-3">
                    <p className="text-3xl font-semibold">Daily News</p>
                    <p></p>
                </div>
                <NavbarRightSide></NavbarRightSide>
            </div>
        </div>
    );
};

export default News;