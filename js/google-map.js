// KEY = AIzaSyBDVUAt0I4FrAkr2ao8p42kdf-ui3A9lKo
// -9.747513247689607, -36.671967406867715

function initMap() {
    // Define a posição inicial do mapa
    var myLatlng = new google.maps.LatLng(-9.747451834463789, -36.67209109815257);

    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    { "visibility": "simplified" },
                    { "hue": "#ff0000" }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // Lista de endereços para adicionar marcadores
    var addresses = ['Rua Antonio Marroquin, 673, Arapiraca, Alagoas, Brasil'];

    // Para cada endereço, obtemos as coordenadas e adicionamos um marcador
    addresses.forEach(function(address) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBDVUAt0I4FrAkr2ao8p42kdf-ui3A9lKo`)
            .then(response => response.json())
            .then(data => {
                // Verifique se a resposta contém resultados válidos
                if (data.status === "OK" && data.results.length > 0) {
                    var p = data.results[0].geometry.location;
                    var latlng = new google.maps.LatLng(p.lat, p.lng);

                    // Usando o marcador tradicional
                    new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: 'images/loc.png'
                    });
                } else {
                    console.error("Geocodificação falhou para o endereço:", address, "Status:", data.status);
                }
            })
            .catch(error => console.error("Erro na solicitação de geocodificação:", error));
    });
}

// Carrega o Google Maps com a função de callback initMap
window.onload = function() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDVUAt0I4FrAkr2ao8p42kdf-ui3A9lKo&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
};
