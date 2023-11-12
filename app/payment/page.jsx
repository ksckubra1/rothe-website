'use client';
import { useState } from "react";
import styles from "./PaymentPage.module.css"
import Link from "next/link";



export default function Payment() {
    const [isFlipped, setIsFlipped] = useState(false)

    const [cardOwner, setCardOwner] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [months, setMonths] = useState("")
    const [years, setYears] = useState("")
    const [cvv, setCvv] = useState("")
    return (
        <div className="py-28">

            <div className={`${styles.paymentParent}`}>
                <div className="w-1/2 bg-[#E9E6E6] flex items-center justify-center rounded-l-[50px]">
                    <div className="flex flex-col w-[50%] gap-10 text-[#8A8787]">
                        <span className="text-5xl font-bold">Enter Payment Method</span>
                        <div className="flex-col gap-6 flex">
                            <input onChange={(e) => setCardOwner(e.target.value)} className="h-12 text-lg rounded-lg outline-none px-4 bg-[#f8f7f7]" placeholder="Card Owner" type="text" />
                            <input onChange={(e) => setCardNumber(e.target.value)} className="h-12 text-lg rounded-lg outline-none px-4 bg-[#f8f7f7]" placeholder="Card Number" type="text" />
                            <div className="flex w-full gap-6">
                                <input onChange={(e) => setMonths(e.target.value)} className="h-12 w-1/3 text-lg rounded-lg outline-none px-4 bg-[#f8f7f7] text-center" placeholder="Month" type="number" />
                                <input onChange={(e) => setYears(e.target.value)} className="h-12 w-1/3 text-lg rounded-lg outline-none px-4 bg-[#f8f7f7] text-center" placeholder="Year" type="number" />
                                <input onBlur={() => setIsFlipped(false)} onFocus={() => setIsFlipped(true)} onChange={(e) => setCvv(e.target.value)} className="h-12 w-1/3 text-lg rounded-lg outline-none px-4 bg-[#f8f7f7] text-center" placeholder="Cvv" type="number" />
                            </div>
                            <Link href={"/paymentResult"}
                                className="bg-[#A885C3] h-12 rounded-lg text-[#E9E6E6] font-bold text-lg items-center flex justify-center">Make Payment
                            </Link>
                        </div>
                    </div>
                </div>


                <div className={styles.cardParent}>
                    <div onClick={() => setIsFlipped(!isFlipped)} className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
                        <div className={styles.cardFace + " " + styles.frontFace}>
                            <img className="absolute h-72" src="/images/icon/stars.png" alt="" />
                            <div className="absolute top-3 right-4">
                                <img className="w-24 drop-shadow-lg" src="/images/icon/master-card.png" alt="" />
                            </div>
                            <div className="h-20 text-5xl font-semibold drop-shadow-2xl">ROTHE</div>
                            <div className="h-16 flex gap-5 items-center">
                                <img className="h-12 drop-shadow-lg" src="/images/icon/card-chip2.png" alt="" />
                                <img className="h-8 drop-shadow-lg" src="/images/icon/contactless.png" alt="" />
                            </div>
                            <div className="flex-1  flex items-center">
                                <span className="drop-shadow-lg text-3xl font-bold">{cardNumber}</span>
                            </div>
                            <div className="h-16 justify-between flex text-xl items-center">
                                <div className="flex flex-col">
                                    <div className="text-[10px] text-white/50">Card owner</div>
                                    <div className="drop-shadow-2xl">{cardOwner}</div>

                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[10px] text-white/50">Validity date</div>
                                    <div className="drop-shadow-2xl">{months + "/" + years}</div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.cardFace + " " + styles.backFace}>
                            <div className="h-16 bg-[#dbd6d5ad] mt-10 drop-shadow-lg"></div>
                            <div className="mx-6 h-12 bg-[#F0F1F1] justify-between flex items-center">
                                <div className={styles.signature}>{cardOwner}</div>
                                <div className="drop-shadow-2xl text-black/70 text-xl mx-6">{cvv}</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}