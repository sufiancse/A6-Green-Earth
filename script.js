let addToCarts = []

// remove active button
const removeActive = () => {
    const categoryBtns = document.querySelectorAll(".category-btn")
    categoryBtns.forEach(btn => {
        btn.classList.remove('active')
    })
}
// click All Trees to display all plants card
document.getElementById('all-trees-btn').addEventListener('click', function () {
    removeActive()
    const btn = document.getElementById('all-trees-btn')
    btn.classList.add('active')
    allPlant()

})

// load all category
const allCategory = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => showCategory(data.categories))
}
// display all category
const showCategory = (categories) => {
    const categoryDiv = document.getElementById('all-categories')
    categories.forEach(category => {
        categoryDiv.innerHTML += `
        <h2 id="category-btn-${category.id}" onclick="categoryButton(${category.id})" class="text-black hover:text-white hover:bg-[#15803D] rounded-sm hover:cursor-pointer p-1 pl-3 mb-1 category-btn">${category.category_name}</h2>
        `
    });
}

//similar category functional button
const categoryButton = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    showLoading()
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

// load all plants
const allPlant = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    showLoading()
    fetch(url)
        .then(res => res.json())
        .then(data => showAllPlant(data.plants))
}
// display all plants
const showAllPlant = (allData) => {
    const card = document.getElementById('card')
    card.innerHTML = ""

    allData.forEach(data => {
        // console.log(data.image);
        card.innerHTML += `
      <div id="${data.id}" class="bg-white p-4 rounded-xl space-y-2 shadow-md h-fit">
                        <div class="mx-auto">
                            <img src="${data.image}" class="max-h-[230px] md:max-h-[150px] w-full rounded-lg" alt="">
                        </div>
                        <h1  onclick="loadCardDetails(${data.id})" id=""  class="text-xl font-bold hover:cursor-pointer" >${data.name}</h1>
                        <p class="text-sm text-gray-600 line-clamp-3">${data.description}</p>
                        <div class="flex justify-between">
                            <p class=" px-3  py-1 bg-[#DCFCE7] rounded-full text-[#15803D]">${data.category}</p>
                            <p class="text-xl font-bold ">৳<span>${data.price}</span></p>
                        </div>
                        <button class="btn bg-[#15803D] rounded-full text-white w-full">Add to Cart</button>
                    </div>

      `
    })
}

// load plant id for modal
const loadCardDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showCardDetails(data.plants))
}
// display every plant details in modal
const showCardDetails = (cardDetails) => {
    const modal = document.getElementById('modal-div')
    modal.innerHTML = ""
    modal.innerHTML += `
                    <h3 class="text-xl font-bold mb-3">${cardDetails.name}</h3>
                    <img src="${cardDetails.image}" class="max-h-[300px] w-full rounded-lg" alt="" />
                    <p class="py-2 text-gray-700"><span class="font-semibold text-black">Category:</span> ${cardDetails.category}</p>
                    <p class=" text-gray-700"><span class="font-semibold text-black">Price:</span> ৳${cardDetails.price}</p>
                    <p class="py-2 text-gray-700"><span class="font-semibold text-black">Category:</span> ${cardDetails.description}</p>
 `
    document.getElementById('my_modal_5').showModal()
}


// add to cart sections start here
document.getElementById('card').addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        handleAddToCart(e)
    }
})

const handleAddToCart = (e) => {
    const btn = e.target
    const cardName = btn.parentNode.children[1].innerText
    const cardPrice = btn.parentNode.children[3].children[1].children[0].innerText
    const id = btn.parentNode.id
    let quantity = 1;

    alert(`${cardName} has been added to the cart.☑️`)

    const existing = addToCarts.find(cart => cart.id == id)
    if (existing) {
        existing.quantity += 1
    }
    else {
        addToCarts.push({
            title: cardName,
            price: cardPrice,
            id: id,
            quantity: quantity
        })
    }

    showCart(addToCarts);
}
// display cart
const showCart = (carts) => {
    const addCarts = document.getElementById('add-carts')
    const totalPrice = document.getElementById('total')
    const totalSection = document.getElementById('total-section')
    addCarts.innerHTML = ""

    let total = 0

    carts.forEach(cart => {
        // console.log(cart);
        const itemsTotal = cart.price * cart.quantity
        total += itemsTotal
        addCarts.innerHTML += `
         <div class="bg-[#F0FDF4] rounded-lg px-3 py-2 mb-3 flex justify-between items-center">
                        <div class="">
                            <h1 class="font-bold">${cart.title}</h1>
                            <p class="text-gray-500">৳<span>${cart.price}</span> x <span>${cart.quantity}</span></p>
                        </div>
                        <button onclick="deleteCart(${cart.id})" class="text-gray-500 cursor-pointer">❌</button>
                    </div>

        `
    })
    if (total === 0) {
        totalSection.classList.add("hidden")
    }
    else {
        totalSection.classList.remove("hidden")
    }
    totalPrice.innerText = total
}
// delete cart calculation
const deleteCart = (cartId) => {
    const itemsIndex = addToCarts.findIndex(cart => cart.id == cartId)
    if (itemsIndex !== -1) {
        if (addToCarts[itemsIndex].quantity > 1) {
            alert(`${addToCarts[itemsIndex].title} has been removed from the cart.❌`)
            addToCarts[itemsIndex].quantity -= 1;
        }
        else {
            alert(`${addToCarts[itemsIndex].title} has been removed from the cart.❌`)
            addToCarts.splice(itemsIndex, 1)
        }
    }
    showCart(addToCarts)
}

// show loading
const showLoading = () => {
        const card = document.getElementById('card')
        card.innerHTML = ""
        card.innerHTML += `
      <div class="col-span-3 mx-auto">
        <span class="loading loading-bars loading-xl text-green-900"></span>
    </div>
      `
}


// default active button
window.onload = () => {
    document.getElementById("all-trees-btn").classList.add("active")
    allCategory()
    allPlant()
}
