        // Function to fetch location information
        function getLocationInfo() {
            fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                document.getElementById('ip-address').textContent = data.ip;
                document.getElementById('latitude').textContent = data.latitude + "°";
                document.getElementById('longitude').textContent = data.longitude + "°";
                document.getElementById('magnetic-decl').textContent = data.magnetic_declination;
                document.getElementById('time-zone').textContent = data.timezone;
            })
            .catch(error => {
                console.log('Error fetching location information: ', error);
            });
        }

        // Call the function when the page loads
        window.onload = getLocationInfo;