var input = document.getElementById('search-input')
var res = document.getElementById('search-results')
var searchButton = document.getElementById('search-button')

input.oninput = function() {
    if (input.value != "") {
        res.style.display = 'block'
    }
    else{
        res.style.display = 'none'
    }
  };


var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '/search.json',
    limit: 4
  })

// sjs.search('jekyll')
function indexSearch() {
    if (input.value) {
        document.location.href = '/search?q='+input.value
    }
}