document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const travelListItem = createTravelListItem(event.target);
  const travelList = document.querySelector('#country-list');
  travelList.appendChild(travelListItem);

  event.target.reset();

}

const createTravelListItem = function (form) {
  const travelListItem = document.createElement('ul');
  travelListItem.classList.add('country-list-item');

  const country = document.createElement('h3');
  country.textContent = form.country.value;
  travelListItem.appendChild(country);

  const city = document.createElement('h4');
  city.textContent = form.city.value;
  travelListItem.appendChild(city);

  const rating = document.createElement('p');
  rating.textContent = form.rating.value;
  travelListItem.appendChild(rating);

  return travelListItem;
}

const handleDeleteAllClick = function (event) {
  const travelList = document.querySelector('#country-list');
  travelList.innerHTML = '';
}
