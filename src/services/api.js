export async function getAllProducts(categoryId) {
    
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const response = await fetch(endpoint);
  return response.json();
}
  