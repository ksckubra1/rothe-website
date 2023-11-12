import data from "../../../product.json"
export async function GET(req, { params }) {
    return Response.json(data[params.cat].find(item => item.id == params.id))
}