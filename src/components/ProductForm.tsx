import type { Product } from "../types"

type ProductFormProps = {
    product?: Product
}

const ProductForm = ({ product } : ProductFormProps) => {
  return (
    <>
        <div className="flex flex-col gap-2">
            <label
                className="text-slate-600 text-lg font-semibold"
                htmlFor="name"
            >
                Product's Name:
            </label>

            <input 
                id="name"
                name="name"
                type="text"
                className="w-full p-3 bg-slate-100 border border-slate-300"
                placeholder="Product's name"
                defaultValue={product?.name}
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
                className="text-slate-600 text-lg font-semibold"
                htmlFor="price"
            >
                Product's Price:
            </label>

            <input 
                id="price"
                name="price"
                type="number"
                className="w-full p-3 bg-slate-100 border border-slate-300"
                placeholder="Product's price, e.g. 50, 100"
                defaultValue={product?.price}
            />
        </div>
    </>
  )
}

export default ProductForm