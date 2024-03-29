import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../sides/Navbar/Navbar";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";


const Register = () => {

    const { createUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate("/login");
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-12 items-center">
                <h4 className="text-4xl text-center font-semibold">Please Register</h4>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                    </div>
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
                        <input type="password" placeholder="Password" className="input input-bordered" required name="password" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center text-black">Do you have an account ? Please <Link className="text-red-600 font-semibold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;