export async function getCategories(endPoint) {
  if (endPoint === undefined) {
    endPoint = 'categories';
  }
  const returnCategories = await fetch(`https://api.mercadolibre.com/sites/MLB/${endPoint}`);
  const categories = await returnCategories.json();
  console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return categoryId !== undefined ? getCategories(categoryId) : getCategories(query);
}
