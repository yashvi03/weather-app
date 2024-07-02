export const container = document.getElementById("container");
export const bgContainer = document.getElementById('bg-container');
export const searchContainer = document.getElementById("search-container");


export const degreeChange = document.createElement('button');
degreeChange.classList.add("degree-change");
degreeChange.textContent = "Switch to °F";

export const suggestionContainer = document.createElement("div");
suggestionContainer.classList.add('suggestion-container');

export const searchInput = document.createElement("input");
searchInput.classList.add("searchInput");
searchInput.type = "text";
searchInput.placeholder = "place (enter at least 3 letters to search)";

export const searchIcon = document.createElement("span");
searchIcon.classList.add("material-symbols-outlined");
searchIcon.textContent = "search";

export const searchBar = document.createElement("div");
searchBar.classList.add("search-bar");
searchBar.appendChild(searchIcon);
searchBar.appendChild(searchInput);

searchContainer.appendChild(searchBar);
searchContainer.appendChild(degreeChange);

export const hourContainer = document.createElement("div");
hourContainer.classList.add("hour-container");

export const dayContainer = document.createElement("div");
dayContainer.classList.add("day-container");

