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


let url = 'https://api.rawg.io/api/';
console.log(url)
let input = document.querySelector('#input');
console.log(input);
let baseUrl = '';
console.log(baseUrl);
let img = document.querySelector('img')
console.dir(img);
let modal = document.querySelector('.modal')
console.log(modal)
let button = document.querySelector('#button');
console.log(button)
let api = 'https://api.rawg.io/api/';
console.log(api)
let search = 'games?';
console.log(search)
let apiKey = 'api_key=d44c1473bamsha6146e8fe55483fp1ae415jsn8eac860639ef';
console.log(apiKey)
// let span = document.querySelector('.close')[0];
// console.log(span)

// for (let i = 0; i < .length; i++) {
	// img.src = ''
// }

function searchBar() {
	let url = api + input.value() + apiKey;
}


// function zoom(e) {
// 	e.preventDefault();
// 	modal.style.display = 'block';
	// let gameName = document.querySelector('.searchName');
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    function windowOnClick(event) {
        if (event.target === modal) {
        	event.preventDefault();
            toggleModal();
        }
    }

    img.addEventListener("click", toggleModal);
    // button.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
	


fetch(url)
	.then(res => {
		console.log('Got it!', res)
		return res.json();
})
	.then(res => {
		console.log('Success', res)
		// console.log('The charcater is, ' +  + ' !')
})
	.catch(err => {
		console.log('Nope, try again...', err)
});
