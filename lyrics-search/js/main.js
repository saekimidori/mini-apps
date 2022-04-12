document.querySelector('button').addEventListener('click', getLyrics)

function getLyrics() {
    let artist = document.getElementById('artist').value
    let title = document.getElementById('title').value

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = artist
        document.querySelector('h3').innerText = title
        document.querySelector('p').innerText = data.lyrics
    })
    .catch(err => {
        console.log(`error ${err}`)
        // document.querySelector('p').innerText = `${error}`
    });
}
