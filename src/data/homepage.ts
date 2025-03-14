import { API_URL } from "./API_URL";

type Homepage = {
  id: number;
  title: string;
  description: string;
  cover: {
    thumbnail: string;
    medium: string;
  };
};

export async function getHomepage(): Promise<Homepage> {

    const response = await fetch(`${API_URL}/singles/homepage`, {
        method: "GET"
    });

    const text = await response.text();

    const homepage = JSON.parse(text) as Homepage;

    return homepage;

}


