import { redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import { updateProduct } from "../services/ProductService";

export async function action({ request, params } : ActionFunctionArgs) {
    const { id } = params;

    if (id !== undefined) {
        const data = Object.fromEntries(await request.formData());
        const emptyFields = Object.values(data).includes('');

        if (emptyFields) {
            const error = 'All fields are required';
            return error;
        }

        await updateProduct(data, id);
        return redirect('/');
    }
}