import { Link, Form, useActionData } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";

const NewProduct = () => {
    const error = useActionData() as string;

    return (
        <>  
            <div className="flex justify-between items-center">
                <h2 className="text-center text-3xl font-bold text-slate-700">Registration</h2>

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
                <ProductForm />

                { error && <ErrorMessage>{ error }</ErrorMessage>}

                <input
                    type="submit"
                    className="mt-3 w-full bg-indigo-700 p-2 text-white font-bold text-xl cursor-pointer rounded hover:bg-indigo-600"
                    value="Register Product"
                />
            </Form>
        </>
    )
}

export default NewProduct