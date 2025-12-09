import { Link, Form, useLoaderData, useActionData } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import type { Product } from "../types"
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
    const product = useLoaderData() as Product;
    const error = useActionData() as string;

    const availabilityOptions = [
        { name: 'Available', value: true},
        { name: 'Not Available', value: false}
    ]

    return (
            <>  
                <div className="flex justify-between items-center">
                    <h2 className="text-center text-3xl font-bold text-slate-700">Edit Product</h2>

                    <Link
                        to="/"
                        className="px-3 py-2 rounded bg-indigo-700 text-sm font-bold text-white shadow-sm hover:bg-indigo-600"
                    >
                        Home
                    </Link>
                </div>

                <Form
                    className="mt-10 flex flex-col gap-4"
                    method="POST"
                >
                    <ProductForm 
                        product={product}
                    />

                    <div className="flex flex-col gap-2">
                        <label
                            className="text-slate-600 text-lg font-semibold"
                            htmlFor="availability"
                        >
                            Availability:
                        </label>

                        <select 
                            id="availability"
                            className="w-full p-3 bg-slate-100 border border-slate-300"
                            name="availability"
                            defaultValue={product?.availability.toString()}
                        >
                            {availabilityOptions.map(option => (
                                <option key={option.name} value={option.value.toString()}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    { error && <ErrorMessage>{ error }</ErrorMessage>}

                    <input
                        type="submit"
                        className="mt-3 w-full bg-indigo-700 p-2 text-white font-bold text-xl cursor-pointer rounded hover:bg-indigo-600"
                        value="Save Changes"
                    />
                </Form>
            </>
        )
}

export default EditProduct