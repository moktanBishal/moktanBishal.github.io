const button = document.getElementById('button');
const detail = document.getElementById('detail');

function addElement() {
    localStorage.setItem('list', detail.value);

    const list = localStorage.getItem('list');
    document.getElementById('list').innerHTML += "<h3>" + Date() + "</h3><li>"  + list + "</li>" ;
}