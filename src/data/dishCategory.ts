import { API_URL } from "./API_URL";

export type DishCategory = {
  id: number;
  title: string;
};

export async function getDishCategories(): Promise<DishCategory[]> {
  const response =
    await fetch(`${API_URL}/collections/dish-categories?page=1&perPage=10
`);
  const body_str = await response.text();

  const body_obj = JSON.parse(body_str) as { data: DishCategory[] };

  const dishCategories = body_obj.data;

  return dishCategories;
}
