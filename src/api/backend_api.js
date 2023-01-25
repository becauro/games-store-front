import axios from "axios";

const PORT = process.env.REACT_APP_API_PORT || 3001;
const HOST = process.env.REACT_APP_API_HOST || "localhost";
const BACK = process.env.REACT_APP_WITH_BACK || "false" ;

export async function fetchAllProducts() {
 
  try {
  
    let response;

    if (BACK == "false") {
    
        console.log('It is running WITHOUT backend');
       
        response = await axios.get('local_data.json');
       
        return response.data;
        
   } else { 
    
        console.log('It is running WITH backend');

        const ENDPOINT = `http://${HOST}:${PORT}/products`;
        response = await fetch(ENDPOINT, {mode: "cors"});

        return response.json();
    }
  
  } catch (error) {

    return error;
  }
}

export async function fetchFilteredProducts(query) {

  const ENDPOINT = `http://${HOST}:${PORT}/products/search?name=${query}`;

  try {
    const response = await fetch(ENDPOINT);
    return response.json();
    
  } catch (error) {
    return error;
  }
}
