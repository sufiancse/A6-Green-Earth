const allCategory = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => showCategory(data.categories))
}
const showCategory = (categories) => {
    const categoryDiv = document.getElementById('all-categories')
    categories.forEach(category => {
        categoryDiv.innerHTML += `
        <h2 id="${category.id}" class="text-black hover:text-white hover:bg-[#15803D] rounded-sm hover:cursor-pointer p-1 pl-3">${category.category_name}</h2>
        `
        // console.log(category.id);
    });
}

const allPlant = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then(data => showAllPlant(data.plants))
}
const showAllPlant = (allData) => {
    const card = document.getElementById('card')
    allData.forEach(data => {
console.log(data.image);
        card.innerHTML += `
      <div class="bg-white p-4 rounded-xl space-y-2 ">
                        <div class="mx-auto">
                            <img src="${data.image}" class="max-h-[150px] w-full rounded-lg" alt="">
                        </div>
                        <h1 class="text-xl font-bold hover:cursor-pointer">${data.name}</h1>
                        <p class="text-sm text-gray-600 line-clamp-3">${data.description}</p>
                        <div class="flex justify-between">
                            <p class=" px-3  py-1 bg-[#DCFCE7] rounded-full text-[#15803D]">${data.category}</p>
                            <p class="text-xl font-bold">$<span>${data.price}</span></p>
                        </div>
                        <button class="btn bg-[#15803D] rounded-full text-white w-full">Add to Cart</button>
                    </div>

      `
    })
}

const plantCategory = () => {
  
}










allCategory()
allPlant()