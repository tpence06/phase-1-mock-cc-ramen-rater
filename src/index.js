// write your code here
const ramenAPI = "http://localhost:3000/ramens";
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const ratingDisplay = document.getElementById('rating-display');
const commentDisplay = document.getElementById('comment-display');

fetch(ramenAPI)
.then((res) => res.json())
.then(displayRamenImages)
.catch(console.err);

document.getElementById('new-ramen').addEventListener('submit', addNewRamen);

function displayRamenImages(ramenArray) {
    ramenArray.forEach(addRamenImageToPage);
}

function addRamenImageToPage(ramen) {
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;
    ramenImage.addEventListener('click', () => {
        displayRamenDetails(ramen)
    })

    ramenMenu.append(ramenImage);
}

function displayRamenDetails(ramen) {
    const detailImage = document.querySelector('.detail-image')
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;

    document.querySelector('.name').textContent = ramen.name;
    document.querySelector('.restaurant').textContent = ramen.restaurant;

    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
}

function addNewRamen(event) {
    event.preventDefault();
    console.log(event.target.name.value);

    const newRamen = {
        name: event.target.name.value,
        rating: event.target.rating.value,
        image: event.target.image.value,
        restaurant: event.target.restaurant.value,
        comment: event.target['new-comment'].value,
    };

    addRamenImageToPage(newRamen);
}