var article = document.getElementById('firstArticle');
var newPeragraph = document.createElement('p');
newPeragraph.innerHTML = 'Here Added New Peragraph';
article.appendChild(newPeragraph);

// Added New Shopping Item

var shop = document.getElementById('shopList');
var newItem = document.createElement('li');
newItem.innerHTML = 'Item-10';
shop.appendChild(newItem)