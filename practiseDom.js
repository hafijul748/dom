var firstHeadng = document.querySelector('h2');
    firstHeadng.style.cssText = "color:white; background:navy; font-Size:28px; text-align:center; width:350px; line-height:40px; margin:auto";

    // Added New List Item
    var list = document.getElementById('domList');
    var newElement = document.createElement('li');
    newElement.innerHTML= "Hello";
    list.appendChild(newElement);
    list.style.cssText= 'color:orange; font-size:24px; list-style:none';
    newElement.setAttribute('title','This is Title');
    
    // Apply Some STyle In List Item
