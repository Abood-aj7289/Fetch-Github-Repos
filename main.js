// main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData= document.querySelector(".show-data");


getButton.onclick = function () { 
    getReops();
 }

// Get repos Function
function getReops() {

    if (theInput.value == "") { // if Value is Empty
        
        reposData.innerHTML = "<span>Please Write Github Username</span>";

    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => {
            return response.json();
        })
        .then((repositories) => {

            // Make the Container Empty
            reposData.innerHTML = ""

            // Loop on Repositories
            repositories.forEach(repo => {

                // Create The Main Div Element
                let mainDiv = document.createElement("div")

                // Create repo Name Text
                let repoName = document.createTextNode(repo.name);

                // Append The Text To main Div
                mainDiv.appendChild(repoName);

                
                // Create Repo Url Anchor
                let theUrl = document.createElement("a");

                // Create Repo Url TExt
                let theUrlText= document.createTextNode("Visit");

                // Append the repo url text to Anchor Tag
                theUrl.appendChild(theUrlText);

                // Add the Hypertext Reference "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                // Set Attribute Blank
                theUrl.setAttribute('target','_blank');

                // Append Url Anchor to Main Div
                mainDiv.appendChild(theUrl);

                // Create Stars Count Span
                let starsSpan = document.createElement("span");

                // Create The Stars count Text
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // Add stars count text to stars span
                starsSpan.appendChild(starsText);

                // Append stars count span to main div
                mainDiv.appendChild(starsSpan);

                // add class on main div
                mainDiv.className = 'repo-box'

                // Append the main Div to Container
                reposData.appendChild(mainDiv);
            });
        });
            }

}