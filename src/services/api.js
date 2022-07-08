export async function getCategories(endPoint) {
  if (endPoint === undefined) {
    endPoint = 'categories';
    console.log('fui chamado');
  }
  const returnCategories = await fetch(`https://api.mercadolibre.com/sites/MLB/${endPoint}`);
  console.log('fui chamado');
  const categories = await returnCategories.json();
  console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return categoryId !== undefined ? getCategories(categoryId) : getCategories(query);
}
