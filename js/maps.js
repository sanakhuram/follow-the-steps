function initMap() {
    // Define trail locations
    var trails = {
        bymarka: { lat: 63.4098, lng: 10.2848897},
        estenstadmarka: { lat: 63.384387, lng: 10.469506 },
        ladestien: { lat: 63.418629, lng: 10.506073 },
        geitfjellet: { lat: 63.4012, lng: 10.3965 },
        grakallen: { lat: 63.4252, lng: 10.2879 }
    };

    // Initialize the map
    var map = L.map('map').setView([63.4098, 10.3653], 12);

    // Add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers to the map
    for (var key in trails) {
        var marker = L.marker([trails[key].lat, trails[key].lng]).addTo(map)
            .bindPopup(key.charAt(0).toUpperCase() + key.slice(1));
    }

    // Event listener for the trail divs
    var trailDivs = document.querySelectorAll('.trails-section .trail');
    trailDivs.forEach(div => {
        div.addEventListener('click', function() {
            var trailName = div.dataset.trail;
            map.setView([trails[trailName].lat, trails[trailName].lng], 14);
        });
    });
}

// Initialize the map
document.addEventListener('DOMContentLoaded', initMap);
