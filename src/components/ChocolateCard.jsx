import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateCard = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, country, category, photo } = chocolate;

    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = chocolates.filter(chocolate => chocolate._id !== _id)
                          setChocolates(remaining)
                        }
                      })
                }

            })
    }
    return (
        <div>
            <div className="w-9/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h1 className="font-semibold">{name}</h1>
                            </td>
                            <td>
                                <h1 className="font-semibold">{country}</h1>
                            </td>
                            <td>
                                <h1 className="font-semibold">{category}</h1>
                            </td>
                            <th>
                                <Link to={`chocolates/${_id}`}><button className="bg-orange-800 text-white p-2 rounded-md font-semibold mr-2">Edit</button></Link>
                                <button onClick={() => handleDelete(_id)} className="bg-orange-800 text-white p-2 rounded-md font-semibold">X</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChocolateCard;
