const API = process.env.REACT_APP_API_URL || "http://localhost:3001";

export async function fetchAllProducts() {
 
  const ENDPOINT = `${API}/products`;

  try {

    const response = await fetch(ENDPOINT);

    return response.json();
  
  } catch (error) {

    return error;
  }
}

export async function fetchFilteredProducts(query) {

  const ENDPOINT = `${API}/products/search?name=${query}`;

  try {
    const response = await fetch(ENDPOINT);
    return response.json();
    
  } catch (error) {
    return error;
  }
}
