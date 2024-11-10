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


// <!--
//   Copyright 2023 Google LLC

//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at

//       https://www.apache.org/licenses/LICENSE-2.0

//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
// -->
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Locator</title>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width,initial-scale=1">
//     <style>
//       html,
//       body {
//         height: 100%;
//         margin: 0;
//       }

//       gmpx-store-locator {
//         width: 100%;
//         height: 100%;

//         /* These parameters customize the appearance of Locator Plus. See the documentation at
//            https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md
//            for more information. */
//         --gmpx-color-surface: #fff;
//         --gmpx-color-on-surface: #212121;
//         --gmpx-color-on-surface-variant: #757575;
//         --gmpx-color-primary: #1967d2;
//         --gmpx-color-outline: #e0e0e0;
//         --gmpx-fixed-panel-width-row-layout: 28.5em;
//         --gmpx-fixed-panel-height-column-layout: 65%;
//         --gmpx-font-family-base: "Roboto", sans-serif;
//         --gmpx-font-family-headings: "Roboto", sans-serif;
//         --gmpx-font-size-base: 0.875rem;
//         --gmpx-hours-color-open: #188038;
//         --gmpx-hours-color-closed: #d50000;
//         --gmpx-rating-color: #ffb300;
//         --gmpx-rating-color-empty: #e0e0e0;
//       }
//     </style>
//     <script>
//       const CONFIGURATION = {
//         "locations": [
//           {"title":"R. Antônio Marroquim, 673","address1":"R. Antônio Marroquim","address2":"673 - Baixão, Arapiraca - AL, 57305-430, Brasil","coords":{"lat":-9.747371542852102,"lng":-36.67216227790985},"placeId":"ChIJ4yRJnZTVBQcR1Wq0m94kFvY"}
//         ],
//         "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
//         "mapsApiKey": "AIzaSyBDVUAt0I4FrAkr2ao8p42kdf-ui3A9lKo",
//         "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false,"actions":false}
//       };

//     </script>
//     <script type="module">
//       document.addEventListener('DOMContentLoaded', async () => {
//         await customElements.whenDefined('gmpx-store-locator');
//         const locator = document.querySelector('gmpx-store-locator');
//         locator.configureFromQuickBuilder(CONFIGURATION);
//       });
//     </script>
//   </head>
//   <body>
//     <!-- Please note unpkg.com is unaffiliated with Google Maps Platform. -->
//     <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6"></script>

//     <!-- Uses components from the Extended Component Library; see
//          https://github.com/googlemaps/extended-component-library for more information
//          on these HTML tags and how to configure them. -->
//     <gmpx-api-loader key="AIzaSyBDVUAt0I4FrAkr2ao8p42kdf-ui3A9lKo" solution-channel="GMP_QB_locatorplus_v10_cABD"></gmpx-api-loader>
//     <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
//   </body>
// </html>
