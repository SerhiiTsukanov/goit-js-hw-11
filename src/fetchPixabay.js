var API_KEY = '30081282-1c3fc5ff0122a52a3b21ea25b';
const BASE_URL = 'https://pixabay.com/api/';

// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('search');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// })


function fetchImag(search) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => response.json());
}

export default { fetchImag };