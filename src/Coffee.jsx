import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = _id => {
        console.log(_id);

        //sweet alert

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainingCoffees)
                        }
                    })

            }

        });




    }


    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card w-96  card-side  bg-base-300 shadow-xl">
            <figure><img className="w-20 mr-4" src={photo
            } alt="Movie" /></figure>
            <div className="flex items-center justify-between  w-full  ">
                <div>
                    <p>{name}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>

                </div>

                <div >
                    <div className="join join-vertical">
                        <button className="btn join-item mb-2">view</button>
                        <Link to={`updateNewCoffee/${_id}`}>
                            <button className="btn join-item mb-2">edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;