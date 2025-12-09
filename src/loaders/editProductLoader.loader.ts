import type { LoaderFunctionArgs } from "react-router-dom";
import { getProductById } from "../services/ProductService";

export async function loader({ params } : LoaderFunctionArgs) {
    const { id } = params;

    if (id !== undefined) {
        const product = await getProductById(Number(id));
     
        if (!product) {
            throw new Response('', { status: 404, statusText: 'Not Found' });
        }

        return product
    }
}