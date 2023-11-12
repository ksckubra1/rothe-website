import Link from "next/link";
import ProductItem from "@/app/components/ProductItem";
import { getCategoryTitleById } from "@/app/utils/cats";
export default async function CategoryPage({ params }) {
    let resp = await fetch(`http://localhost:3004/${params.cat}`)
    const categoryData = await resp.json()

    return (
        <div className="flex flex-col bg-[#E9E6E6] p-10 md:my-10 gap-6 max-w-7xl mx-auto rounded-xl shadow-xl">
            <div className="text-3xl">{getCategoryTitleById(params.cat)}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-between">
                {
                    categoryData.map(pr => {
                        return (
                            <Link key={pr.id} href={`/product/${params.cat}/${pr.id}`}>
                                <ProductItem
                                    pr={pr}
                                    key={pr.id}
                                    cat={params.cat}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    )
}