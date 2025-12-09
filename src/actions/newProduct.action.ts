import { addProduct } from '../services/ProductService';
import { redirect } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';

export async function action({ request } : ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    const emptyFields = Object.values(data).includes('');

    if (emptyFields) {
        const error = 'All fields are required';
        return error;
    }

    await addProduct(data);

    return redirect('/');
}