import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
import NewProduct from './views/NewProduct'
import EditProduct from './views/EditProduct'
import { action as newProductAction } from './actions/newProduct.action'
import { action as editProductAction } from './actions/editProduct.action'
import { action as deleteProductAction } from './actions/deleteProduct.action'
import { action as updateAvailabilityAction } from './actions/changeAvailability.action'
import { loader as productsLoader } from './loaders/productsLoader.loader'
import { loader as editProductLoader } from './loaders/editProductLoader.loader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'products/new',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'products/:id/edit', // ROA Pattern || Resource-oriented Design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'products/:id/delete',
                action: deleteProductAction
            },
            {
                path: 'products/:id/availability',
                action: updateAvailabilityAction
            }
        ]
    }
])