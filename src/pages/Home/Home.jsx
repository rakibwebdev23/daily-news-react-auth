import Header from "../../sides/Header/Header";
import Navbar from "../../sides/Navbar/Navbar";
import NavbarLeftSide from "../../sides/NavbarLeftSide/NavbarLeftSide";
import NavbarRightSide from "../../sides/NavbarRightSide/NavbarRightSide";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-blue-600">
                    <NavbarLeftSide></NavbarLeftSide>
                </div>
                <div className="col-span-2 border border-blue-600">
                    <p className="text-4xl text-lime-600 font-semibold">This is Home</p>
                </div>
                <div className="">
                    <NavbarRightSide></NavbarRightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;