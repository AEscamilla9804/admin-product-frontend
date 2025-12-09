import { getProducts } from "../services/ProductService"

export async function loader() {
  return await getProducts();
}