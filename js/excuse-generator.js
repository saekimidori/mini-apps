document.getElementById('party').addEventListener('click', partyExcuse)
document.getElementById('office').addEventListener('click', officeExcuse)
document.getElementById('family').addEventListener('click', familyExcuse)
document.getElementById('children').addEventListener('click', childrenExcuse)
document.getElementById('college').addEventListener('click', collegeExcuse)

function partyExcuse() {
  fetch('https://excuser.herokuapp.com/v1/excuse/party/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('excuse').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function officeExcuse() {
  fetch('https://excuser.herokuapp.com/v1/excuse/office/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('excuse').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function familyExcuse() {
  fetch('https://excuser.herokuapp.com/v1/excuse/family/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('excuse').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function childrenExcuse() {
  fetch('https://excuser.herokuapp.com/v1/excuse/children/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('excuse').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function collegeExcuse() {
  fetch('https://excuser.herokuapp.com/v1/excuse/college/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('excuse').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}