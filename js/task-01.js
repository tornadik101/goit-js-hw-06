const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const categoryItemCount = categoryItem.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemCount}`);
});

