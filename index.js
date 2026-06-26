function SearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search");
    let h1 = document.querySelector("h1");
    h1.innerHTML = searchInput.value;
}



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", SearchSubmit);
