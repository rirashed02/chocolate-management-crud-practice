import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddChocolate from "./components/AddChocolate";
import UpdateChocolate from "./components/UpdateChocolate";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        loader:() => fetch('http://localhost:5000/chocolates')
    },
    {
        path:'/addChocolate',
        element:<AddChocolate></AddChocolate>
    },
    {
        path:'/chocolates/:id',
        element:<UpdateChocolate></UpdateChocolate>,
        loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
    }
])
export default router;