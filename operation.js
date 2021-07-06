/*
    After clicking the "Calculate" Button the showBill() function 
    will processed. It takes input like Type of service, Amount and 
    How many people are sharing the Total Amount. It generates the 
    output like Tip Amount, Total Amount and Amount Share by person.
 */
function showBill() {
    const service = document.getElementById("service");
    const optionValue = service.selectedIndex;
    const amountCheck = document.getElementById("amount").value;
    const countCheck = document.getElementById("count").value;
    const symbol = '+';
    if (amountCheck === "") {
        alert("Please Enter the Amount");
        return
    } else if (!optionValue) {
        alert("Please select the Service Options");
        return
    } else if (countCheck === "") {
        alert("Please Enter the 'How many people are sharing the Bill?'");
        return
    } else {
        document.getElementById("showOutput").style.display = "block";
        if (optionValue === 1) {
            tipTotal = eval(amountCheck * 0.1);
        } else if (optionValue === 2) {
            tipTotal = eval(amountCheck * 0.08);
        } else if (optionValue === 3) {
            tipTotal = eval(amountCheck * 0.06);
        } else if (optionValue === 4) {
            tipTotal = eval(amountCheck * 0.04);
        } else if (optionValue === 5) {
            tipTotal = eval(amountCheck * 0.02);
        }
        const Total = eval(amountCheck + symbol + tipTotal);
        const Sharing = eval(Total / countCheck);
        document.getElementById('tip').innerHTML = tipTotal;
        document.getElementById('total').innerHTML = Total;
        document.getElementById('share').innerHTML = Sharing;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (p) {
            const LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
            const mapOptions = {
                center: LatLng,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROAD_MAP
            };
            const geocoder = new google.maps.Geocoder();
            const map = new google.maps.Map(document.getElementById("displayMap"), mapOptions);
            geocoder.geocode({ location: LatLng })
                .then((response) => {
                    if (response.results[0]) {
                        map.setZoom(10);
                        const marker = new google.maps.Marker({
                            position: LatLng,
                            map: map,
                            title: "<div style = 'height:160px;width:160px'><b>Location:</b><br />" + response.results[0].formatted_address
                        });
                        google.maps.event.addListener(marker, "click", function (e) {
                            const infoWindow = new google.maps.InfoWindow();
                            infoWindow.setContent(marker.title);
                            infoWindow.open(map, marker);
                        });
                    } else {
                        window.alert("No results found");
                    }
                })
                .catch((e) => window.alert("Geocoder failed due to: " + e));
        });
    } else {
        alert('Geo Location feature is not supported in this browser.');
    }
}
