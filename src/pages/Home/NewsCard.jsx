import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const {_id, image_url, title, details } = news;

    return (
        <div className="flex items-center">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-blue-600" to={`/news/${_id}`}>Read more.......</Link></p> : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

