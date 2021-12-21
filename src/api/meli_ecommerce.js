export async function getAllProducts(categoryId) {
    
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const response = await fetch(endpoint);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
    
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const response = await fetch(endpoint);
  return response.json();
}