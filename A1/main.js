const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'
const data = []

const dataPanel = document.getElementById('data-panel')

axios.get(INDEX_URL)
  .then((response) => {
    data.push(...response.data.results)
    displayDataList(data)

  })
  .catch((err) => console.log(err))


dataPanel.addEventListener('click', (event) => {
  if (event.target.matches('.btn-show-movie')) {
    showMovie(event.target.dataset.id)
  }
})


function showMovie(id) {
  // get elements
  const modalTitle = document.getElementById('show-movie-title')
  const modalImage = document.getElementById('show-movie-image')
  const modalDate = document.getElementById('show-movie-date')
  const modalDescription = document.getElementById('show-movie-description')

  // set request url
  const url = INDEX_URL + id
  console.log(url)

  // send request to show api
  axios.get(url).then(response => {
    const data = response.data.results
    console.log(data)

    // insert data into modal ui
    modalTitle.textContent = data.title
    modalImage.innerHTML = `<img src="${POSTER_URL}${data.image}" class="img-fluid" alt="Responsive image">`
    modalDate.textContent = `release at : ${data.release_date}`
    modalDescription.textContent = `${data.description}`
  })
}


function displayDataList(data) {
  let htmlContent = ''
  data.forEach(function (item, index) {
    htmlContent += `
        <div class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top " src="${POSTER_URL}${item.image}" alt="Card image cap">
            <div class="card-body movie-item-body">
              <h6 class="card-title">${item.title}</h5>
            </div>
              <div class="card-footer">
             <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" data-id="${item.id}">More</button>
            </div>
          </div>
        </div>
      `
  })
  dataPanel.innerHTML = htmlContent
}

//分類區

const categoryOfMovie = {
  "1": "Action",
  "2": "Adventure",
  "3": "Animation",
  "4": "Comedy",
  "5": "Crime",
  "6": "Documentary",
  "7": "Drama",
  "8": "Family",
  "9": "Fantasy",
  "10": "History",
  "11": "Horror",
  "12": "Music",
  "13": "Mystery",
  "14": "Romance",
  "15": "Science Fiction",
  "16": "TV Movie",
  "17": "Thriller",
  "18": "War",
  "19": "Western"
}

let list = document.querySelector('#data-category')

for (var nameOfList in categoryOfMovie) {
  let li = document.createElement('li')
  li.className = nameOfList
  list.appendChild(li)
  li.innerHTML = categoryOfMovie[nameOfList]
}

let clickOnList = document.querySelector('#data-category')

clickOnList.addEventListener('click', function (i) {
  console.log(i.target.className)
  let data = []
  let results = []

  axios.get(INDEX_URL)
    .then((response) => {
      data.push(...response.data.results)
      data.forEach(function (item) {
        if (item.genres.includes(Number(i.target.className))) {
          results.push(item)
        }
        displayDataList(results)
      })

    })
    .catch((err) => console.log(err))


})



