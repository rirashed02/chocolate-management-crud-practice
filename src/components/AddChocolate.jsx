import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddChocolate = () => {
    const handleAddChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const addChocolate = { name, country, category, photo }
        console.log(addChocolate)

        fetch('http://localhost:5000/chocolates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Add your Coffee Successfully',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(../assets/images.jpg)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                      })
                      form.reset() 
                }
            })
    }


    return (
        <div className="w-full">
            <div className="mb-10 mt-20 sm:w-full xl:w-1/3 md:w-1/3 mx-auto py-3 bg-gradient-to-r from-orange-950 via-orange-900 to-orange-950 rounded-md">
                <h1 className="md:text-3xl text-center font-semibold text-white">Chocolate Management system</h1>
            </div>
            <div className="w-9/12 mx-auto mb-10">
                <p className="tex-1xl font-semibold mb-5"> <Link to='/'><FaArrowLeft className="inline"></FaArrowLeft> All Chocolate</Link></p>
                <hr />
            </div>
            <div className=" sm:w-full md:w-9/12 xl:w-9/12 bg-gray-100 mx-auto">
                <form onSubmit={handleAddChocolate} className="sm:w-full md:w-1/2 xl:w-1/2 mx-auto py-10">
                    <div className=" mb-12 text-center">
                        <h1 className="mb-2 text-2xl font-bold">New Chocolate</h1>
                        <p className="text-gray-500">use the below form to create a new product</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Enter your name" required className="input w-full" />
                        </label>
                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='country' placeholder="Enter your Country/Factory" required className="input w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Chocolate Category" required className="input w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo url" required className="input w-full" />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Save" className="btn w-full mt-10 bg-gradient-to-r from-orange-950 via-orange-900 to-orange-950 rounded-md text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddChocolate;