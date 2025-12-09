import axios from 'axios'
import { DraftProductSchema, ProductSchema, ProductsSchema, UpdatedProductDraftSchema, type Product } from '../types'

type ProductData = {
    [k: string]: FormDataEntryValue
}

export const addProduct = async (formData : ProductData) => {
    try {
        const result = DraftProductSchema.parse({
            name: formData.name,
            price: Number(formData.price)
        });

        // API request
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        await axios.post(url, result);
    } catch (error) {
        console.error('Error creating the product:', error);
    }
}

export const getProducts = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const { data } = await axios(url);
        const parsedData = ProductsSchema.parse(data.data);
        return parsedData
    } catch (error) {
        console.error('Error fetching the products:', error);
    }
}

export const getProductById = async ( id: Product['id'] ) => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
            const { data } = await axios(url);
            const parsedData = ProductSchema.parse(data.data);
            return parsedData
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
}

export const updateProduct = async (formData: ProductData, id: string) => {
    try {
        const result = UpdatedProductDraftSchema.parse({
            name: formData.name,
            price: Number(formData.price),
            availability: formData.availability === 'true' ? true : false
        });

        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        await axios.put(url, result);
    } catch (error) {
        console.error('Error updating the product:', error);
    }
}

export const deleteProduct = async ( id: Product['id'] ) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.error('Error deleting the product:', error);
    }
}

export const updateAvailability = async ( id: Product['id'] ) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        await axios.patch(url)
    } catch (error) {
        console.error('Error changing availability:', error);
    }
}