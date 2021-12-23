export async function fetchAllProducts() {
  const gameCategoryId = 'MLB1144';
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${gameCategoryId}`;

  try {
    const response = await fetch(endpoint);
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