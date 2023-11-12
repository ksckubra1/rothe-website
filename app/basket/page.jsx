'use client';
import { useDispatch, useSelector } from "react-redux"
import { removeProduct } from "../store/basketSlice";
import { useEffect, useState } from "react";
import Link from "next/link";

const getSizeText = (s) => {
    switch (s) {
        case "size-xs":
            return "XS"
        case "size-s":
            return "S"
        case "size-m":
            return "M"
        case "size-l":
            return "L"


    }
}

export default function Basket() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.basket.products)
    const [totalPrice, setTotalPrice] = useState(0)


    const deleteProduct = (id) => {
        dispatch(removeProduct(id))
    }

    useEffect(() => {
        let feeSum = 0

        products.forEach(pr => {
            feeSum += pr.fee
        });

        setTotalPrice(feeSum)
    }, [products])


    return (
        <div className="relative">

            {
                products.length > 0 ?
                    <>
                        <div className="flex  max-w-6xl mx-auto gap-6 p-4 mb:p-0 mb-40 md:mt-20 md:p-10 flex-col  border-[#bdb9b963] border bg-[#E9E6E6] shadow-lg md:rounded-3xl">
                            {
                                products.map((pr, index) => {
                                    return (
                                        <div key={index} className="h-32 w-full shadow-xl flex overflow-hidden bg-[#E2DBDB] rounded-lg  shrink-0">
                                            <div className="w-3/12 md:w-2/12 overflow-hidden">
                                                <img src={pr.banner} className="h-full w-full object-cover" />

                                            </div>
                                            <div className="flex-1 items-center justify-center min-w-fit flex">{pr.title} {pr.size && "(" + getSizeText(pr.size) + ")"} </div>

                                            <div className="flex px-4 justify-center min-w-fit items-center">${pr.fee}</div>

                                            <div onClick={() => deleteProduct(index)} className="flex min-w-fit px-4 justify-center items-center ">
                                                <i className="text-xl fa-solid fa-trash"></i>
                                            </div>



                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="h-28 fixed bottom-5 md:bottom-10 p-4 w-full flex bg-[#E9E6E6] shadow-lg rounded-2xl border-[#bdb9b963] border">
                            <div className="flex-1 flex justify-center items-center min-w-fit text-sm md:text-md">Order Summary</div>
                            <div className="flex-1 flex justify-center items-center">{products.length} Piece</div>
                            <div className="flex-1 flex justify-center items-center">${totalPrice}</div>
                            <div className="flex-1 flex justify-center items-center">
                                <Link href={"/payment"}>
                                    <button className="py-2 md:px-6 px-4 text-sm md:text-md rounded-lg bg-[#EF4444] text-white">Approve</button>
                                </Link>
                            </div>
                        </div>

                    </>


                    :

                    <div className="h-[calc(100vh-4rem)] gap-3 flex-col w-screen justify-center items-center flex">
                        <i className="fa-solid fa-face-grimace text-[#acaaaaa2] text-6xl"></i>
                        <span className="text-4xl text-[#4240402a]">Basket is Empty</span>
                    </div>

            }




        </div >
    )
}