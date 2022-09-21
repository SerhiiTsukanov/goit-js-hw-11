const BASE_URL = '';


function fetchCountries (name) {

  return fetch(`${BASE_URL}${name}?fields=name,capital,population,languages,flags`)
  .then( response => response.json());
}

export default { fetchCountries };


