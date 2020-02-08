// Create html, css, js.
// Fill in html, this includes header, body, footer.
// Aside has listed items(This is to be revisted AFTER complete original functionality is complete.)
// Listed items have more information when clicked on.
// Locate and find a close resemble for font.
// Try to use flexbox or grid display for wireframe and overall design.
// Build out cs
// for loop the images in the modal, to add one EvevntListener function.
// Commit once you complete each line of psuedocode or if it's too long break it down to two.
// Fully responsive site/api.
// Recreate the hamburger or modol usuer interface.


url = 'https://api.rawg.io/api/games';
console.dir(url);
let input = document.querySelector('input');
console.log(input);
let baseUrl = 'https://api.rawg.io/api';
console.log(baseUrl);
let img = document.querySelector('.img')
console.dir(img);
let modal = document.querySelector('#modal')
console.log(modal)
let button = document.querySelector('#button')
console.log(button)
// let span = document.querySelector('.close')[0];
// console.log(span)

// img.addEventListener('click', zoom); 
	
// function zoom(e) {
// 	e.preventDefault();
// 	modal.style.display = 'block';
	// let gameName = document.querySelector('.searchName');
    // function toggleModal() {
        // modal.classList.toggle("show-modal");
    // }
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    // img.addEventListener("click", toggleModal);
    // button.addEventListener("click", toggleModal);
    // window.addEventListener("click", windowOnClick);
	


// 	// let url = baseUrl + '' + '/'
// 	// console.dir(url);
// 	// console.log(url);

fetch(url)
	.then(res => {
		console.log('Got it!', res)
		return res.json();
})
	.then(res => {
		console.log('Success', res[0].background_image)
		// console.log('The game you selected is, ' +  + ' !')
		img.src = res[0].background_image
})
	.catch(err => {
		console.log('Nope, try again...', err)
});
// let unirest = req("unirest");

// let req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/developers/%7Bid%7D");

// require.headers({
// 	"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
// 	"x-rapidapi-key": "d44c1473bamsha6146e8fe55483fp1ae415jsn8eac860639ef"
// });

// req.end(function (res) {
// 	if (res.error) throw new E}	rror(res.error);

// 	console.log(res.body);
// });
