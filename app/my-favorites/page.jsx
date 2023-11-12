'use client';
import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem";
import Link from "next/link";


export default function MyFavorites() {
    const favProducts = useSelector((state) => state.fav.favProducts)
    return (

        <div className="flex flex-col bg-[#E9E6E6] md:my-10 p-10 gap-10 max-w-7xl mx-auto rounded-xl shadow-xl">
            {
                favProducts.length > 0 ?
                    <> <h2 className="text-xl">My Favorites</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-between">
                            {
                                favProducts.map(pr => {
                                    return (

                                        <Link key={pr.cat + pr.id} href={`/product/${pr.cat}/${pr.id}`}>
                                            <ProductItem
                                                cat={pr.cat}
                                                pr={pr}
                                            />
                                        </Link>

                                    )
                                })
                            }
                        </div>
                    </>
                    :

                    <div className=" h-[calc(100vh-4rem)] gap-3 flex-col justify-center items-center flex">
                        <i className="fa-solid fa-face-grimace text-[#acaaaaa2] text-6xl"></i>
                        <span className="text-2xl lg:text-4xl text-[#4240402a]">No Favorite Added</span>
                    </div>

            }
        </div>
    )
}