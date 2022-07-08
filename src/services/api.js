export async function getCategories(endPoint) {
  if (endPoint === undefined) {
    endPoint = 'categories';
  }
  const returnCategories = await fetch(`https://api.mercadolibre.com/sites/MLB/${endPoint}`);
  const categories = await returnCategories.json();
  return categories;
}

export async function getProduct(id) {
  const returnProducts = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const product = await returnProducts.json();
  return product;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return categoryId !== undefined ? getCategories(categoryId) : getCategories(query);
}
