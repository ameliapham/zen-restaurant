import { API_URL } from "./API_URL";


export type Dish = {
  id: number;
  title: string;
  description: string;
  price: number;
  illustration: {
    thumbnail: string;
    medium: string;
  } | null;
  dishCategory: {
    id: number;
  };
};

export async function getDishes(): Promise<Dish[]> {
  const response = await fetch(
    `${API_URL}/collections/dishes?page=1&perPage=100&relations=dishCategory`
  );
  const body_str = await response.text();
  /*
    "{ data: [{}, {}, {}], page: 1, total: 0, perPage: 100 }" <- you have
    "[{}, {}, {}]" <- you wish
  */

  const body_obj = JSON.parse(body_str) as { data: Dish[] };

  const dishes = body_obj.data;

  return dishes;
}
