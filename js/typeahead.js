
let objArray = [
    {name: "fox", link: "https://www.foxnews.com/"},
    {name: "fandango", link: "https://fandango.com"}, 
    {name: "cnn", link: "https://www.cnn.com/"}
];

let inputValue = document.getElementById("search-field");
let linkContainer = document.getElementById("site-list");

let inputFunction = function(e){
    linkContainer.innerHTML = ""; 
    for(i =0; i < objArray.length; i++){
        if(objArray[i].name.includes(e.target.value.toLowerCase()) && e.target.value !== ""){
            let newSite = `<li class="list-group-item m-2"><a href="${objArray[i].link}">${objArray[i].name}</a></li>`;
            linkContainer.insertAdjacentHTML("beforeend", newSite);
        }
    }
}


inputValue.addEventListener('input', inputFunction)