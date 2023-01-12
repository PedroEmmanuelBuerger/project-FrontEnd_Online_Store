export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

  const response = await fetch(endpoint);

  const data = await response.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, searchTerm) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${searchTerm}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return [];
  }
}

export async function getProductById(productId) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const endpoint = `https://api.mercadolibre.com/items/${productId}`;

  const response = await fetch(endpoint);

  const data = await response.json();

  return data;
}
