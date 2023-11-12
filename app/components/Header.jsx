"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSlice as loadBasket } from "../store/basketSlice";
import { loadSlice as loadFav } from "../store/favSlice";

export default function Header(props) {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBasket())
        dispatch(loadFav())
    }, [])

    const basket = useSelector(state => state.basket.products.length)
    const fav = useSelector(state => state.fav.favProducts.length)

    const menuToggle = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const menuLinks = [
        {
            title: "My Favorites",
            route: "/my-favorites",
            icon: "fa-solid fa-heart",
            badge: fav
        },
        {
            title: "My Basket",
            route: "/basket",
            icon: "fa-solid fa-cart-shopping",
            badge: basket
        }
    ]

    return (
        <>
            <div className="w-screen bg-[#e9e6e6] flex px-10 justify-between h-16 items-center sticky top-0 z-20">
                <div className="hidden md:flex justify-between w-full">
                    <Link href={"/"} className="font-serif text-3xl">ROTHE</Link>

                    <div className="flex gap-x-10 items-center">
                        {
                            menuLinks.map((ml, index) => <Link key={index} href={ml.route}>
                                <div className="flex gap-2 items-center">
                                    <i className={ml.icon}></i>
                                    <span>{ml.title}</span>
                                    {
                                        ml.badge > 0 && <div className="bg-red-500 rounded-full flex justify-center px-2 items-center h-7 text-white">{ml.badge}</div>
                                    }
                                </div>
                            </Link>)
                        }

                    </div>
                </div>
                <div className="flex md:hidden justify-between items-center w-full">
                    <Link href={"/"} className="font-serif text-3xl">ROTHE</Link>
                    <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={menuToggle}></i>
                </div>
            </div >
            {
                showMobileMenu && <div className="fixed top-16 left-0 right-0 bottom-0 bg-[#e9e6e6] z-50 px-10">
                    {
                        menuLinks.map((ml, index) => <Link key={index} href={ml.route}>
                            <div className="flex gap-2 items-center text-lg" onClick={() => setShowMobileMenu(false)}>
                                <i className={ml.icon}></i>
                                <span>{ml.title}</span>
                                {
                                    ml.badge > 0 && <div className="bg-red-500 rounded-full flex justify-center px-2 items-center h-7 text-white">{ml.badge}</div>
                                }
                            </div>
                        </Link>)
                    }
                </div>
            }
        </>
    )
}