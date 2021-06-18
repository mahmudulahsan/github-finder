

// fetch('https://api.github.com/users/mahmudulahsan')
// .then(res => res.json())
// .then(data => {
//     console.log(data.bio);
// })


var form = document.querySelector("#myForm");
var propic = document.querySelector("#propic");
var about = document.querySelector("#about");
var bio = document.querySelector("#bio");
var load = document.querySelector("#load");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('#propic').innerHTML = "⌛";

    var search = document.querySelector('#search').value;

    fetch('https://api.github.com/users/'+search)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        propic.innerHTML = `
            <img src="${data.avatar_url}" width="350px" height="auto"/>
        `
        if(data.bio){
            bio.innerHTML = `
            <q>${data.bio}</q>
        `
        }else{
            bio.innerHTML = ``
        }

        about.innerHTML = `
            <p>Name : ${data.name}</p>
            <p>Location : ${data.location}</p>
            <p>Followers : ${data.followers}</p>
            <p>Institution : ${data.company}</p>
            <br>
            <p>Repositories : ${data.public_repos}</p>
            <p>Profile Link : <a href="https://github.com/${search}" >${data.html_url}</a></p>


        `
    })

})
