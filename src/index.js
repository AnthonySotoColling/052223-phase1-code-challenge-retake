const chatecterAPI='http://localhost:3000/characters'
const showingCharecters=document.getElementById('character-bar')
const characterDetails=document.getElementById('detailed-info')
document.getElementById('votes-form').addEventListener('submit',votes)
const detaile=document.getElementById('detailed-info')
fetch(chatecterAPI)
    .then(res => res.json())
    .then(allCharecters)


function allCharecters(characters) {
    characters.forEach(showCharceters)
}
function showCharceters(character) {
    const names=document.createElement('span')
    names.textContent=character.name
    showingCharecters.append(names)
    names.addEventListener('click',() => detailes(character))
}

function detailes(characters) {

    detaile.querySelector('#name').textContent=characters.name
    detaile.querySelector('#image').src=characters.image
    detaile.querySelector('#vote-count').textContent=characters.votes

}
function voting(characters) {
    detaile.querySelector('#vote-count').textContent=parseInt(detaile.querySelector('#vote-count').textContent)+parseInt(characters.votes)
}
function votes(event) {
    event.preventDefault()
    const form=event.target
    const myVote={
        votes: form.votes.value,
    }
    voting(myVote)
}