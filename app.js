document.addEventListener('DOMContentLoaded', function () {
    fetch('https://galvanize-cors.herokuapp.com/https://xkcd.com/77/info.0.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (dataResponse) {
            console.log(dataResponse)
            var title = document.querySelector('h1')
            console.log(title)
            title.innerText = dataResponse.title
            var text = document.querySelector('p')
            text.innerHTML = dataResponse.alt
            var xcdImage = document.querySelector('img')
            xcdImage.src = dataResponse.img
            console.log(xcdImage)
            var comicNum = document.querySelector('#comicNum')
            comicNum.innerHTML = dataResponse.num
            console.log(comicNum)


        })
})
