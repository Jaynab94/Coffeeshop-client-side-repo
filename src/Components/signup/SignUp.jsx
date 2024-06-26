
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)

        //creat a user

        createUser(email, password)
            .then(result => {

                console.log(result.user)

                // user send to database
                const createTm = result.user?.metadata?.creationTime;


                const user = { email, createTm: createTm };

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())

                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: "success",
                                text: "user added successfully",
                                icon: "success",
                                confirmButtonText: "ok"
                            })
                            form.reset();

                        }

                    })





            })
            .catch(error => {
                console.log(error.message)
            })

        //clear the form
        form.reset();
    }






    return (

        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content ">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignup}
                        className="card-body">
                        <h2>sign up here</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                    <Link to={'/login'}>  <p >login</p></Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;