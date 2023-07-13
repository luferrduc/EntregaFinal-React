

export const Item = ({title, platform, genres, price, images, developers }) => {
  return (
    <>
    <div className="mx-auto">
        <div>
            <img src={images[1]} alt="Imagen del juego" className="w-[15rem] h-[20rem]"/>
        </div>
        <div className="p-4">
            <div>
                <h3 className="font-bold">{title}</h3>
                <p>{genres.map(genre=>{
                  return <span key={genre} className="font-bold text-sm text-slate-800/70">{genre} </span>
            })}</p>
            </div>
   
            <p> <span className="font-bold">$</span>{price.toLocaleString('es-CL', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}</p>
        </div>
    </div>
    
    {/* <div className="w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg w-full h-[20rem]" src={images[1]} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
        </div>
    </div> */}
    </>
      
  )
}
