
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NavbarLeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch('../../../public/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    return (
        <div className="space-y-10">
            {
                categories.map(category => <Link className="block " key={category.id} to={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default NavbarLeftSide;