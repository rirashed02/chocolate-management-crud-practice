import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import ChocolateCard from './components/ChocolateCard'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'

function App() {
  const loadedChocolates = useLoaderData()
  console.log(loadedChocolates)
  const [chocolates, setChocolates] = useState(loadedChocolates)

  return (
    <div>
      <div className="mb-10 mt-20 sm:w-full xl:w-1/3 md:w-1/3 mx-auto py-3 bg-gradient-to-r from-orange-950 via-orange-900 to-orange-950 rounded-md">
        <h1 className="md:text-3xl text-center font-semibold text-white">Chocolate Management system</h1>
      </div>
      <h1 className='w-9/12 mx-auto mb-10'><Link to='/addChocolate'> <FaPlus className='inline'></FaPlus> New Chocolates</Link></h1>
      <div>
        {
          chocolates.map(chocolate => <ChocolateCard key={chocolate._id} chocolate={chocolate} chocolates={chocolates} setChocolates={setChocolates}></ChocolateCard>)
        }
      </div>
    </div>
  )
}

export default App
