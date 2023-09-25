import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

  return (
<section className="bg-white dark:bg-gray-900 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-52">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">{error.status}</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{error.statusText}</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <p className="my-4 mb-10 text-lg font-light text-gray-500 dark:text-gray-400">{error.data}</p>
            <Link href={-1} className="bg-slate-800 text-white p-3 rounded-md my-8">Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
}

export default ErrorPage
