import data from "../../product.json"
export async function GET(req, { params }) {
    const searchParams = req.nextUrl.searchParams
    const limit = searchParams.get('_limit')

    if (limit) {
        return Response.json(data[params.cat].slice(0, limit))
    }

    return Response.json(data[params.cat])
}