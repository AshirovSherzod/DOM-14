const API_URL = "https://fakestoreapi.com/products"
const wrapper = document.querySelector(".wrapper")
console.log(wrapper);

async function getAPI(url) {
    let data = await fetch(url, {
        method: "GET"
    })

    data.json()
        .then(res => mapCards(res))
        .catch(err => console.log(err))
}
getAPI(API_URL)

function mapCards(data) {
    let newData = ""
    data.forEach(e => {
        newData += `
        <div class="card">
            <div class="card__img">
                <img src="${e.image}" alt="">
            </div>
            <div class="card__desc">
                <h2>${e.title}</h2>
                <p>${e.price}</p>
            </div>
        </div>
        `
    }); 
    wrapper.innerHTML = newData
}