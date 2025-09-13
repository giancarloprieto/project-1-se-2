// Inicializar el mapa centrado en el Parque Simón Bolívar
var map = L.map('map').setView([4.661264, -74.092653], 14);

// Agregar capa de tiles de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar marcador en el centro del parque
L.marker([4.661264, -74.092653]).addTo(map)
    .bindPopup('¡Parque Simón Bolívar!<br>El pulmón verde de Bogotá.')
    .openPopup();

// Función para cargar y mostrar el GeoJSON
fetch('parque-simon-bolivar.geojson')
    .then(response => response.json())
    .then(data => {
        // Agregar el GeoJSON al mapa con estilos personalizados
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: '#2E8B57',        // Color del borde (verde mar)
                    weight: 3,               // Grosor del borde
                    opacity: 0.8,            // Opacidad del borde
                    fillColor: '#90EE90',    // Color de relleno (verde claro)
                    fillOpacity: 0.4         // Opacidad del relleno
                };
            },
            onEachFeature: function (feature, layer) {
                // Agregar popup con información del parque
                if (feature.properties) {
                    let popupContent = `
                        <div style="font-family: Arial, sans-serif;">
                            <h3 style="margin: 0 0 10px 0; color: #2E8B57;">${feature.properties.name || 'Parque Simón Bolívar'}</h3>
                            <p style="margin: 5px 0;"><strong>Descripción:</strong> ${feature.properties.description || 'El parque urbano más grande de Bogotá'}</p>
                            <p style="margin: 5px 0;"><strong>Área:</strong> ${feature.properties.area || '113 hectáreas'}</p>
                            <p style="margin: 5px 0;"><strong>Tipo:</strong> ${feature.properties.tipo || 'Parque urbano'}</p>
                        </div>
                    `;
                    layer.bindPopup(popupContent);
                }
            }
        }).addTo(map);
        
        console.log('GeoJSON del Parque Simón Bolívar cargado exitosamente');
    })
    .catch(error => {
        console.error('Error al cargar el archivo GeoJSON:', error);
    });
