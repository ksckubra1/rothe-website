"use client";
import { useDispatch } from "react-redux";
import styles from "./ProductPage.module.css"
import { useEffect, useState } from "react";
import { addProduct } from "@/app/store/basketSlice";





export default function ProductPage({ params }) {
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [imageSrc, setImageSrc] = useState("")

    const [btnLeft, setBtnLeft] = useState(0)
    const [btnTop, setBtnTop] = useState(0)
    const [basketLeft, setBasketLeft] = useState(0)
    const [basketTop, setBasketTop] = useState(0)
    const [playBasketAnim, setPlayBasketAnim] = useState(false)


    const [checked, setChecked] = useState("")
    const [size, setSize] = useState("")



    useEffect(() => {
        fetch(`/api/cat/${params.cat}/${params.id}`)
            .then(resp => resp.json())
            .then(resp => {
                setData(resp)
                setImageSrc(resp.banner)
            })

    }, [])
    // console.log(resp.status);


    const basket = (e) => {
        if (window.innerWidth < 768) {
            dispatch(addProduct({
                id: params.cat + data.id,
                title: data.title,
                banner: data.banner,
                fee: data.fee,
                size: params.cat === "dresses" || params.cat === "cardigans" ? size : null
            }))
            return
        }

        setBtnTop(e.target.offsetTop - window.scrollY)
        setBtnLeft(e.target.offsetLeft - window.scrollX)
        setBasketTop(document.querySelector("[href='/basket']").offsetTop)
        setBasketLeft(document.querySelector("[href='/basket']").offsetLeft)

        setPlayBasketAnim(true)

        setTimeout(() => {
            setPlayBasketAnim(false)
            dispatch(addProduct({
                id: params.cat + data.id,
                title: data.title,
                banner: data.banner,
                fee: data.fee,
                size: params.cat === "dresses" || params.cat === "cardigans" ? size : null
            }))
        }, 1000);



    }

    return (
        <div className="flex bg-[#e2dbdb] md:py-12 justify-center items-center ">
            {
                playBasketAnim && < img className={`${styles.basket_btn} w-10 fa-solid fa-bag-shopping`} src="/images/icon/shop.png"
                    style={{
                        "--btnLeft": btnLeft + "px",
                        "--btnTop": btnTop + "px",
                        "--basketTop": basketTop + "px",
                        "--basketLeft": basketLeft + "px"
                    }}
                />
            }
            <div className="flex flex-col md:flex-row bg-[#E9E6E6] max-w-7xl w-full mx-auto md:rounded-xl shadow-xl overflow-hidden">
                <div className="md:w-1/2 md:aspect-[4/5] overflow-hidden">
                    <img className="w-full h-full object-cover" src={imageSrc} alt="" />
                </div>
                <div className="md:w-1/2 flex flex-col gap-y-12 justify-center bg-[#E9E6E6] p-10">

                    <span className="text-4xl font-semibold text-[#000000bd]">{data?.title}</span>
                    <div className="flex gap-4">
                        {
                            data?.images.map((image, index) => (
                                <img onClick={(e) => {
                                    setImageSrc(e.target.src)
                                }}
                                    key={index} className="flex-1 h-full w-full overflow-hidden shadow-lg object-cover rounded-lg " src={image} alt="" />
                            ))
                        }
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-1">
                            {
                                [...Array(5)].map((_, index) => {
                                    return <i key={index} className={`drop-shadow-sm fa-solid fa-star ${data?.rate > index ? "text-[#ffc000]" : "text-[#c7c7c3]"}`}></i>
                                })
                            }

                        </div>
                        <span className="text-sm text-[#0000009a]">{data?.evaluation} Evaluation</span>

                    </div>


                    {
                        (params.cat == "cardigans" || params.cat == "dresses") &&
                        <div className="flex gap-2 items-center relative overflow-hidden">
                            <input onChange={(e) => {
                                setChecked(e.target.checked);
                                setSize(e.target.id)
                            }
                            } className={styles.radio} type="radio" id="size-xs" name="size" />
                            <label htmlFor="size-xs" className="focus:border-[#444141a6] w-12 h-8 flex items-center justify-center border rounded-lg shadow-sm text-sm border-[#9b9a9a42]">XS</label>
                            <input onChange={(e) => {
                                setChecked(e.target.checked);
                                setSize(e.target.id)
                            }}
                                className={styles.radio} type="radio" id="size-s" name="size" />
                            <label htmlFor="size-s" className="focus:border-[#444141a6] w-12 h-8 flex items-center justify-center border rounded-lg shadow-sm text-sm border-[#9b9a9a42]">S</label>
                            <input onChange={(e) => {
                                setChecked(e.target.checked);
                                setSize(e.target.id)
                            }} className={styles.radio} type="radio" id="size-m" name="size" />
                            <label htmlFor="size-m" className="focus:border-[#444141a6] w-12 h-8 flex items-center justify-center border rounded-lg shadow-sm text-sm border-[#9b9a9a42]">M</label>
                            <input onChange={(e) => {
                                setChecked(e.target.checked);
                                setSize(e.target.id)
                            }} className={styles.radio} type="radio" id="size-l" name="size" />
                            <label htmlFor="size-l" className="focus:border-[#444141a6] w-12 h-8 flex items-center justify-center border rounded-lg shadow-sm text-sm border-[#9b9a9a42]">L</label>
                            {
                                !checked && <div className="text-sm">Please select size!</div>
                            }
                        </div>




                    }


                    <div className=" text-[#000000bd] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">Price:</span>
                            <span className="text-3xl">${data?.fee}</span>
                        </div>

                        <button className={`h-10 text-white bg-red-500 px-3 rounded-lg disabled:opacity-50`}
                            onClick={basket} disabled={(params.cat == "cardigans" || params.cat == "dresses") && !checked}>Add To Basket</button>

                    </div>



                </div>
            </div>

        </div >
    )
}