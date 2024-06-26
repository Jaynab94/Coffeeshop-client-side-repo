import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateNewCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        console.log('peyedii')


        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updatedCoffee);


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Updated!",
                    text: "Your file has been updated.",
                    icon: "success"
                });

                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'success',
                        text: 'file updated successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-pink-300 p-24">
            <h2 className="font-bold text-4xl text-white">Update Coffe: {name}</h2>

            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className=" md:flex gap-4 mb-8 ">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Name</span>

                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered w-full " />

                    </label>

                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Chef</span>

                        </div>
                        <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full  " />

                    </label>
                </div>
                {/* supplier row */}
                <div className=" md:flex gap-4 mb-8">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>

                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full " />

                    </label>

                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Taste</span>

                        </div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full  " />

                    </label>
                </div>
                {/* category row */}
                <div className=" md:flex gap-4 mb-8">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>

                        </div>
                        <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full " />

                    </label>

                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Details</span>

                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full  " />

                    </label>
                </div>

                <label className="form-control  ">
                    <div className="label">
                        <span className="label-text">Photo</span>

                    </div>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full  " />

                </label>




                <input className="bg-green-400 p-2 mt-8  btn btn-block" type="submit" value="Update coffee" />





            </form>
        </div>
    );
};

export default UpdateNewCoffee;