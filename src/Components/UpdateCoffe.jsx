import Swal from 'sweetalert2'

const UpdateCoffe = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee);

        //send data to server
        // fetch('http://localhost:5000/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'success',
        //                 text: 'user added successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'ok'
        //             })
        //             form.reset();
        //         }

        //     })




    }

    return (

        <div className="bg-pink-300 p-24">
            <h2 className="font-bold text-4xl text-white">Add New Coffee</h2>

            <form onSubmit={handleAddCoffee}>
                {/* form row */}
                <div className=" md:flex gap-4 mb-8 ">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Name</span>

                        </div>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full " />

                    </label>

                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Chef</span>

                        </div>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full  " />

                    </label>
                </div>
                {/* supplier row */}
                <div className=" md:flex gap-4 mb-8">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>

                        </div>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full " />

                    </label>

                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Taste</span>

                        </div>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full  " />

                    </label>
                </div>
                {/* category row */}
                <div className=" md:flex gap-4 mb-8">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>

                        </div>
                        <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full " />

                    </label>

                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Details</span>

                        </div>
                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full  " />

                    </label>
                </div>

                <label className="form-control  ">
                    <div className="label">
                        <span className="label-text">Photo</span>

                    </div>
                    <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full  " />

                </label>




                <input className="bg-[#D2B48C] p-2 mt-8  btn btn-block" type="submit" value="add coffee" />





            </form>
        </div>

    );
};

export default UpdateCoffe;