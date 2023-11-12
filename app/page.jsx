import Products from "./components/Products"



export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col bg-[#e9e6e6] w-screen">
        <div className="flex flex-col lg:flex-row rounded-3xl w-full">
          <div className="w-full lg:w-4/6 aspect-video bg-[#b0e0d8] flex justify-center items-center">
            <img className="w-2/3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" src="/images/banner/product12.png" alt="" />
            <img className="w-1/3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" src="/images/banner/product11.png" alt="" />
          </div>
          <div className="lg:w-2/6 flex flex-col justify-between p-10 bg-[#50c7b3] gap-8 text-white">

            <span className="text-4xl 2xl:text-8xl">Weekend Brand Sale </span>

            <div className=" flex items-center justify-between">

              <span className="text-xl font-semibold ">ONLY 7 DAYS</span>
              <button className="bg-[#1e7264] rounded-xl py-3 px-4 whitespace-nowrap text-[#fff]">View Products</button>

            </div>
          </div>
        </div>
        <div className="bg-[#E2DBDB] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-10">
          <div className="flex-1 bg-[#e595a8] rounded-xl flex justify-center items-center  overflow-hidden">
            <img className="object-cover h-72 drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]" src="images/banner/product304.png" alt="" />

          </div>
          <div className="flex-1 relative bg-[#a6bedd] rounded-xl flex justify-center items-center  overflow-hidden">
            <img className="object-cover h-80 drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]" src="images/banner/product301.png" alt="" />
            <span className="absolute font-bold text-[100px] text-white/50">50% SALE</span>
          </div>
          <div className="flex-1 bg-[#bb9de2] rounded-xl flex justify-center items-center  overflow-hidden">
            <img className="object-cover w-[570px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]" src="images/banner/product40.png" alt="" />

          </div>

        </div>
      </div>
      <Products />
    </div>
  )
}  