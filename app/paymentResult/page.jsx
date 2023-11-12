'use client';
import styles from "./PaymentResult.module.css"
import PaymentResultAnim from "../lotties/payment.json"
import carCargo from "../lotties/car-cargo.json"
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearProducts } from "../store/basketSlice";


export default function PaymentResult() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearProducts())
    }, [])

    const [currentScreen, setCurrentScreen] = useState("payment")

    if (currentScreen === "payment") {
        setTimeout(() => {
            setCurrentScreen("carCargo")
        }, 3000);
    }


    const defaultOptions1 = {
        loop: false,
        autoplay: true,
        animationData: PaymentResultAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }

    };


    const defaultOptions2 = {
        loop: false,
        autoplay: true,
        animationData: carCargo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }

    };

    return (
        <div className="lg:py-28 h-[calc(100vh-4rem)] w-screen ">

            <div className={`${styles.paymentResultParent} lg:rounded-3xl lg:w-[70%] h-full`}>
                {currentScreen === "payment" &&
                    <Lottie
                        options={defaultOptions2}
                        height={450}
                        width={450}
                    />
                }
                {currentScreen === "carCargo" &&
                    <>
                        <Lottie
                            options={defaultOptions1}
                            height={350}
                            width={350}
                        />

                        <Link href={"/"}>
                            <button className="absolute bottom-10 right-10 bg-[#A672AF]  px-5 py-4 rounded-xl text-white" >Back to Shopping</button>
                        </Link>
                    </>
                }







            </div>
        </div>
    )
}