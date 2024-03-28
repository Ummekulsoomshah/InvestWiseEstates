import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi=async (url)=>{
    const {data}=await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'e5f9d4bef3msh1d0b752d2f2046ep1d9de4jsnbd505b2e4dc1',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }


    })
    return data;
}