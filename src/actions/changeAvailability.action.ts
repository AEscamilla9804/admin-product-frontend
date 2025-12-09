import type { ActionFunctionArgs } from "react-router-dom";
import { updateAvailability } from "../services/ProductService";

export async function action({ params } : ActionFunctionArgs) {
    const { id } = params;
    await updateAvailability(Number(id));
    return null;
}