import { API_URL } from './API_URL';

type Homepage = {
    id : number;
    title : string;
    description : string;
    cover : {
        thumnail : string;
        medium : string;
    } | null;
}


export async function getHomepage(): Promise<Homepage> {

    const response = await fetch(`${API_URL}/singles/homepage`);

    const data_str = await response.text();

    const data: Homepage = JSON.parse(data_str);

    return data;

}