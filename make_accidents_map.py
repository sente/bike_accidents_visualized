"""
    Yes, this is a hacky of doing things :)
"""

import json

accidents = json.load(open("data/accidents.json"))
data = accidents['accidents']

neighbors = ["new google.maps.LatLng(%s, %s)" % (d['lat'], d['lng']) for d in data]


with open('out/markers.html','w') as htmlout:
    htmlout.write("""
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cambridge Bicycle Accidents</title>
        <style>
          html, body, #map-canvas {
            height: 100%;
            margin: 0px;
            padding: 0px
          }
          #panel {
            position: absolute;
            top: 5px;
            left: 50%;
            margin-left: -180px;
            z-index: 5;
            background-color: #fff;
            padding: 5px;
            border: 1px solid #999;
          }
        </style>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
        <script>

    var ca = 42.3631821;
    var cb = -71.0976772;
    var cambridge = new google.maps.LatLng(ca, cb);

    var neighborhoods = [
    """)

    htmlout.write(',\n'.join(neighbors))



    htmlout.write("""
    ];

    var markers = [];
    var iterator = 0;

    var map;

    function initialize() {
      var mapOptions = {
        zoom: 14,
        center: cambridge 
      };

      map = new google.maps.Map(document.getElementById('map-canvas'),
              mapOptions);
    }

    function drop() {
      for (var i = 0; i < neighborhoods.length; i++) {
        setTimeout(function() {
          addMarker();
        }, i * 50);
      }
    }

    function addMarker() {
      markers.push(new google.maps.Marker({
        position: neighborhoods[iterator],
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      }));
      iterator++;
    }

    google.maps.event.addDomListener(window, 'load', initialize);

        </script>
      </head>
      <body>
        <div id="panel" style="margin-left: -52px">
          <button id="drop" onclick="drop()">Drop Markers</button>
         </div>
        <div id="map-canvas"></div>
      </body>
    </html>
    """)

print 'created /out/markers.html'



