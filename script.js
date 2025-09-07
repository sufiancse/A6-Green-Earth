document.getElementById('all-trees-btn').addEventListener('click', function () {
    removeActive()
    const btn = document.getElementById('all-trees-btn')
    btn.classList.add('active')
    allPlant()
})

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
        <h2 id="category-btn-${category.id}" onclick="categoryButton(${category.id})" class="text-black hover:text-white hover:bg-[#15803D] rounded-sm hover:cursor-pointer p-1 pl-3 mb-1 category-btn">${category.category_name}</h2>
        `
        // console.log(category.id);
    });
}

const removeActive = () => {
    const categoryBtns = document.querySelectorAll(".category-btn")
    categoryBtns.forEach(btn => {
        btn.classList.remove('active')
    })
}
const categoryButton = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive()
            const clickBtn = document.getElementById(`category-btn-${id}`)
            // console.log(clickBtn);
            clickBtn.classList.add('active')
            showAllPlant(data.plants)
        })
}


const allPlant = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then(data => showAllPlant(data.plants))
}
const showAllPlant = (allData) => {
    const card = document.getElementById('card')
    card.innerHTML = ""
    allData.forEach(data => {
        // console.log(data.image);
        card.innerHTML += `
      <div class="bg-white p-4 rounded-xl space-y-2 ">
                        <div class="mx-auto">
                            <img src="${data.image}" class="max-h-[150px] w-full rounded-lg" alt="">
                        </div>
                        <h1  onclick="loadDetails(${data.id})" id=""  class="text-xl font-bold hover:cursor-pointer">${data.name}</h1>
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

const loadDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
}








window.onload = () => {
    document.getElementById("all-trees-btn").classList.add("active")
    allCategory()
    allPlant()
}

// allCategory()
// allPlant()