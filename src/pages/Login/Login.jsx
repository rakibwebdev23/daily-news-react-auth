import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../sides/Navbar/Navbar";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";


const Login = () => {

    const { userSignIn } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        userSignIn(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate(location?.state ? location.state : "/");
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-12 items-center">
                <h4 className="text-4xl text-center font-semibold">Please Login</h4>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required name="password"/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center text-black">Do not have an account ? Please <Link className="text-red-600 font-semibold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;