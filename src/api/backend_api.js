const API = process.env.REACT_APP_API_URL;

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
  const gameCategoryId = 'MLB1144';
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${gameCategoryId}&q=${query}`;

  try {
    const response = await fetch(endpoint);
    return response.json();
    
  } catch (error) {
    return error;
  }
}