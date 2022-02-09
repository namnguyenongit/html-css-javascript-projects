const input = document.querySelector('input[name="search"]')
const loader = document.querySelector('.loader')
const productsDOM = document.querySelector('.products')
let products = []

async function init() {
  products = await getProductsData()
  loader.classList.add('hide')
  productsDOM.classList.remove('hide')
  renderProducts(products)
}

init()

async function getProductsData() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

const renderProducts = (products) => {
  const productList = document.querySelector('.products')
  const productListItems = products.map((product) => {
    return `
      <div class="product">
        <img src="${product.image}">
        <div className="info">
          <h3>${product.title}</h3>
          <p>\$${product.price}</p>
        </div>
      </div>
    `
  })
  productList.innerHTML = productListItems.join('')
}

input.addEventListener('input', (e) => {
  filterProducts(e.target.value)
})

const filterProducts = (inputValue) => {
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase())
  })
  if (inputValue === '') {
    renderProducts(products)
  } else {
    renderProducts(filteredProducts)
  }
}
