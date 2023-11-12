
import Link from "next/link";
import ProductItem from "./ProductItem";
import { getCategoriesWithItems } from "../utils/cats";

export default async function Products() {
    const cats = await getCategoriesWithItems()


    return (
        <div className="flex flex-col bg-[#E9E6E6]  py-10 my-10 gap-10 max-w-7xl mx-auto rounded-xl shadow-xl">
            {cats.map(cat => <div key={cat.id} className="flex flex-col px-5">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-4xl whitespace-nowrap">{cat.title}</h2>
                    <Link className="w-full flex justify-end" href={`/product/${cat.id}`}> See All</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-between">
                    {
                        cat.items.map(pr => {
                            return (
                                <Link key={pr.id} href={`/product/${cat.id}/${pr.id}`}>
                                    <ProductItem
                                        cat={cat.id}
                                        pr={pr}
                                        key={pr.id + cat.id}
                                    />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>)}
        </div>
    )
}