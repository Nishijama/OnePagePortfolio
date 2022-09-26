console.log("hello there!");

let images = document.querySelectorAll('.img-miniature')
let snippets = document.querySelectorAll('.project-description')
let tiles = document.querySelectorAll('.tile')

console.log(tiles);


tiles.forEach(tile => {
    let image = tile.children[0];
    let description = tile.children[1];
    description.style.visibility = 'hidden';

    tile.addEventListener('mouseover', () => {
        description.style.visibility = 'visible';
    });
    

    tile.addEventListener('mouseout', () => {
        description.style.visibility = 'hidden';
    })
})
