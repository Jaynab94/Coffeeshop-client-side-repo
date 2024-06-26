import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const { loginUser } = useContext(AuthContext)

    const handleloginBtn = (e) => {
        e.preventDefault();
        console.log("clicked");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //log in user

        loginUser(email, password)
            .then(result => {
                console.log(result.user);

                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime

                }

                //UPDATE USER LAST LOGGED IN TIME

                fetch('http://localhost:5000/user',{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2>Log in here</h2>
                    <form onSubmit={handleloginBtn}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to={'/signup'}><p>register</p></Link>
                </div>
            </div>
        </div>
    );
};

export default LogIn;