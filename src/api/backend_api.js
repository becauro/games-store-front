const HOST = process.env.REACT_APP_API_HOST;
const PORT = process.env.REACT_APP_API_PORT;

export async function fetchAllProducts() {
 
  const ENDPOINT = `http://${HOST}:${PORT}/products`;

  try {

    const response = await fetch(ENDPOINT);

    return response.json();
  
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
