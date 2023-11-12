
const cats = [
    {
        title: "Skin Care",
        id: "skin_care"
    },
    {
        title: "Lipsticks",
        id: "lipsticks"
    },
    {
        title: "Dresses",
        id: "dresses"
    },
    {
        title: "Candles",
        id: "candles"
    },
    {
        title: "Cardigans",
        id: "cardigans"
    },
]

export const getCategoriesWithItems = async () => {
    const defaultLimit = 4
    const newArr = []

    for (let index = 0; index < cats.length; index++) {
        let resp = await fetch(`/api/cat/${cats[index].id}?_limit=${defaultLimit}`)
        const items = await resp.json()

        newArr.push({
            title: cats[index].title,
            id: cats[index].id,
            items: items
        })
    }

    return newArr
}

export const getCategoryWithItems = async (cat) => {
    let resp = await fetch(`/api/cat/${cat}`)

    return await resp.json()
}

export const getCategoryTitleById = (id) => {
    let c = cats.find(cat => id === cat.id)
    return c.title || "no title"
}