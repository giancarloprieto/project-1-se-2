// Inicializar el mapa centrado en Bogotá, Colombia
var map = L.map('map').setView([4.628370634268591, -74.06627799950036], 13);

// Agregar capa de tiles de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar marcador en las coordenadas de Bogotá
L.marker([4.628370634268591, -74.06627799950036]).addTo(map)
    .bindPopup('¡Bienvenido a Bogotá!<br>Proyecto de Ingeniería de Software 2.')
    .openPopup();
