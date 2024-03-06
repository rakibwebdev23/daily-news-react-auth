import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className="btn btn-primary">Breaking News</button>
            <div>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link className="mr-14" to="/">Breaking News.......</Link>
                    <Link className="mr-14" to="/">Breaking News.......</Link>
                    <Link className="mr-14" to="/">Breaking News.......</Link>
                </Marquee>

            </div>
        </div>
    );
};

export default BreakingNews;