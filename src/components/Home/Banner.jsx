import { Link } from 'react-router-dom'

const Banner = ({setSearch}) => {



  return (
    <div className=" home bg-white bg-opacity-95 mt-2">
<div className='h-[40vw] flex flex-col items-center justify-center'>
<h3 className="text-center text-neutral-950 md:text-5xl sm:text-4xl text-2xl font-bold">I Grow By Helping People In Need</h3>
<form className='lg:w-[30%] w-[60%] mx-auto mt-6'>
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input 
        onChange={(e) =>{
          setSearch(e.target.value)
        }}
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          placeholder="Search"
          required
        />
        <Link
        //  onClick={()=>handleSearch(search)}
          
          className="text-white absolute right-2.5 bottom-2.5 bg-red-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </Link>
      </div>
    </form>
</div>

    </div>
  )
}

export default Banner
