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
        <tr className="border-b text-center">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>

            <td className="p-3 text-lg text-gray-800">
                { formatCurrency(product.price) }
            </td>

            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form
                    method="POST"
                    action={`products/${product.id}/availability`}
                >
                    <button 
                        type="submit"
                        className={`
                            w-48 uppercase cursor-pointer font-bold border rounded-sm p-1
                            ${ isAvailable ? 'text-green-600' : 'text-red-600' }
                        `}
                    >
                        { isAvailable ? 'Available' : 'Not available'}
                    </button>
                </fetcher.Form>
            </td>

            <td className="p-3 text-lg text-gray-800">
                <div className="flex gap-2 items-center">
                    <div className="flex-1">
                        <button
                            className="w-full text-sm font-bold py-2 px-3 rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 cursor-pointer uppercase"
                            onClick={() => navigate(`/products/${product.id}/edit`)}
                        >
                            Edit
                        </button>
                    </div>

                    <div className="flex-1">
                        <Form
                            method="POST"
                            className="w-full"
                            action={`products/${product.id}/delete`}
                        >
                            <input 
                                type="submit" 
                                value="Delete"
                                className="w-full uppercase text-center text-sm font-bold py-2 px-3 rounded-sm text-white bg-red-700 hover:bg-red-600 cursor-pointer"
                            />
                        </Form>
                    </div>
                </div>
            </td>
        </tr> 
    )
}

export default ProductDetails