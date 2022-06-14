var container = document.getElementById('finded')
var hideSearch = document.getElementById('hideSearch')
var params = window
    .location
    .search
    .replace('?', '')
    .split('&')
    .reduce(
        function (p, e) {
            var a = e.split('=');
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );
var template = `<section class="right-image">
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <div class="left-content">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div class="primary-button">
          <a href="{url}">Читать</a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <img src="assets/images/{image}" alt="">
    </div>
  </div>
</div>
</section>`
window.onload = function () {
  var sjs2 = SimpleJekyllSearch({
    searchInput: hideSearch,
    resultsContainer: document.getElementById('finded'),
    json: '/search.json',
    limit: 4,
    searchResultTemplate:template
})

setTimeout(() => {
    hideSearch.value = params['q']
    sjs2.search(hideSearch.value)
   
}, 200);
}



// container.innerHTML = template







