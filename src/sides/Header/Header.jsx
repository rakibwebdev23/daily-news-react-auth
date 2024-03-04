import logo from "../../assets/images/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mb-4" src={logo} alt="" />
            <p className="text-base text-gray-500 mb-2">Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;