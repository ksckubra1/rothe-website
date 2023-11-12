"use client";

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/favSlice";

export default function ProductItem({ cat, pr }) {
    const dispatch = useDispatch()
    const [fav, setFav] = useState(false)

    const favProducts = useSelector((state) => state.fav.favProducts)
    useEffect(() => {
        const favItem = favProducts.find(fp => {
            return fp.id + fp.cat == pr.id + cat
        })

        setFav(favItem != null)
    }, [favProducts])


    const favToggle = (e) => {
        e.preventDefault()
        if (!fav) {
            dispatch(addProduct({
                cat: cat,
                id: pr.id,
                title: pr.title,
                banner: pr.banner,
                fee: pr.fee,
                evaluation: pr.evaluation,
                rate: pr.rate
            }))

            setFav(true)
        } else {
            dispatch(removeProduct({ id: pr.id, cat: cat }))
            setFav(false)
        }
    }



    return (
        <div className="flex flex-col overflow-hidden gap-6 h-[510px] bg-[#f5f5f5] rounded-3xl shadow-md ">
            <div className=" h-80 overflow-hidden relative" >
                <div onClick={favToggle} className="w-10 h-10 bg-[#ffffff63] rounded-full absolute flex items-center justify-center top-3 right-3 ">
                    <i className={`z-10 text-xl fa-solid fa-heart${fav ? " text-[#e75858ea]" : " text-[#0000003f]"}`}></i>
                </div>
                <img className="rounded-t-2xl w-full h-full object-cover" src={pr.banner} alt="" />
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-center flex-col px-10">
                    <div>{pr.title}</div>
                    <div className="flex gap-4">
                        <div className="flex gap-1">
                            {
                                [...Array(5)].map((_, index) => {
                                    return <i key={index} className={`text-sm drop-shadow-sm fa-solid fa-star ${pr?.rate > index ? "text-[#ffc000]" : "text-[#c7c7c3]"}`}></i>
                                })
                            }

                        </div>
                        <span className="text-sm text-[#0000009a]">({pr?.evaluation})</span>
                    </div>
                    <div className="flex gap-2 text-[#000000bd] items-center">
                        <span className="text-lg">Price:</span>
                        <span className="text-xl">${pr.fee}</span>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <div className="flex items-center flex-1 justify-center rounded-l-xl bg-[#afacac] gap-2 py-2 text-white">
                        <i className="fa-solid fa-truck-moving text-md"></i>
                        <span className="text-xs">Fast Delivery</span>
                    </div>
                    <div className="flex items-center flex-1 justify-center rounded-r-xl bg-[#0000006b] gap-2 py-2 text-white">
                        <i className="fa-solid fa-box text-md"></i>
                        <span className="text-xs">Free Cargo</span>
                    </div>
                </div>
            </div>

        </div>
    )

}