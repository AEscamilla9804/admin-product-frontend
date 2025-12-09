import { Link, useLoaderData } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails';
import type { Product } from '../types';

const Products = () => {
  const products = useLoaderData() as Product[];

  return (
    <>
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-slate-700">Products</h2>

            <Link
                to="products/new"
                className="px-3 py-2 rounded bg-indigo-700 text-sm font-bold text-white shadow-sm hover:bg-indigo-600"
            >
                Add Product
            </Link>
        </div>

        { products && 
          <div className='overflow-x-auto'>
            <table className="w-full mt-5 table-auto">
              <thead className="bg-slate-800 text-white">
                  <tr>
                      <th className="p-2">Product</th>
                      <th className="p-2">Price</th>
                      <th className="p-2">Availability</th>
                      <th className="p-2">Actions</th>
                  </tr>
              </thead>
              <tbody>
                { products.map(product => (
                  <ProductDetails 
                    key={product.id}
                    product={product}
                  />
                ))}
              </tbody>
            </table>
          </div>
        }
    </>
  )
}

export default Products