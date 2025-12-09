import { redirect } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';
import { deleteProduct } from '../services/ProductService';

export async function action({ params } : ActionFunctionArgs) {
    const { id } = params;

    if (id !== undefined) {
        const confirmation = confirm('Are you sure you want to delete this item?');

        if (confirmation) {
            await deleteProduct(Number(id));
        }

        return redirect('/');
    }
}
