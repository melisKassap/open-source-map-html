//default map cordinate
var map = L.map('map', {
    center: [41.02582417016868, 28.974252828509968],
    minZoom: 2,
    zoom: 8,

})
//default map cordinate


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map)

//coordinates of my position
L.marker([41.02582417016868, 28.974252828509968]).addTo(map)
    .bindPopup("I'm here!")
//coordinates of my position