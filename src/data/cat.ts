import { API_URL } from "./API_URL";

type Cat = {
  id: number;
  name: string;
  age: 26;
  birthdate: string;
};

export async function getCats(): Promise<Cat[]> {
  const response = await fetch(`${API_URL}/collections/cats`, {
    method: "GET",
  });

  const text = await response.text();

  const obj = JSON.parse(text) as { data: Cat[]; };

  return obj.data;

}



