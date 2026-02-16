import { useNavigate, Form, useFetcher } from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsProps = {
    product: Product
}

const ProductDetails = ({ product } : ProductDetailsProps) => {
    const fetcher = useFetcher()
    const isAvailable = product.availability;
    const navigate = useNavigate();

    return (
        <tr className="w-full md:shadow-sm border border-gray-300 md:border-0 md:border-b md:border-black sm:table-row block bg-gray-100 md:bg-white rounded-lg sm:rounded-none p-2 mb-4 md:mb-4 sm:mb-0">
            <td className="px-2 py-1 text-gray-800 block sm:table-cell text-left sm:text-center">
                <span className="font-medium sm:hidden text-gray-400 text-xs uppercase tracking-wide">Product</span>
                <p className="text-lg font-semibold text-gray-900 leading-snug">{product.name}</p>
            </td>

            <td className="px-2 py-1 text-gray-800 block sm:table-cell text-left sm:text-center">
                <span className="font-medium sm:hidden text-gray-400 text-xs uppercase tracking-wide">Price</span>
                <p className="text-lg font-black md:font-normal">{formatCurrency(product.price)}</p>
            </td>

            <td className="px-2 py-1 block sm:table-cell text-left sm:text-center">
                <span className="font-medium sm:hidden text-gray-400 text-xs uppercase tracking-wide">Availability</span>

                <fetcher.Form method="POST" action={`products/${product.id}/availability`}>
                    <button
                        type="submit"
                        className={`
                            mt-1 px-3 py-1 text-sm font-bold border transition cursor-pointer
                            ${isAvailable 
                                ? 'text-green-700 border-green-600 bg-green-50' 
                                : 'text-red-700 border-red-600 bg-red-50'}
                        `}
                    >
                        {isAvailable ? 'Available' : 'Not Available'}
                    </button>
                </fetcher.Form>
            </td>

            <td className="p-2 block sm:table-cell">
                <div className="flex gap-2 mt-2 sm:mt-0">

                    <button
                        className="flex-1 text-sm font-bold py-2 rounded-md md:rounded-none text-white bg-indigo-700 hover:bg-indigo-600 transition cursor-pointer"
                        onClick={() => navigate(`/products/${product.id}/edit`)}
                    >
                        Edit
                    </button>

                    <Form method="POST" action={`products/${product.id}/delete`} className="flex-1">
                        <input
                            type="submit"
                            value="Delete"
                            className="w-full text-sm font-bold py-2 rounded-md md:rounded-none text-white bg-red-700 hover:bg-red-600 transition cursor-pointer"
                        />
                    </Form>

                </div>
            </td>
        </tr>

    )
}

export default ProductDetails