L.mapbox.accessToken = 'pk.eyJ1Ijoia2tzMzIiLCJhIjoiY2lsdXc5a2xwMDA2ZXcxbTZoMm5jZTIwcyJ9.CDYFvqPWF2TzCrJGMjl9sQ';
var map = L.mapbox.map('map', 'mapbox.light', {attributionControl: false,     
    legendControl: {
        // Any of the valid control positions:
        // https://www.mapbox.com/mapbox.js/api/v2.4.0/l-control/#control-positions
        position: 'bottomright'
    }}).setView([2., 17.], 4);

var popup = new L.Popup({ autoPan: false });

// hsvAfrica comes from the 'africa.json' script included above
var baseLayer = L.geoJson(hsvAfrica,  {
    style: getBaseStyle
    });

// Female + (F+M)
// hsvAfrica comes from the 'africa.json' script included above
var hsvLayer = L.geoJson(hsvAfrica,  {
    style: getStyle,
    onEachFeature: onEachFeature
    }).addTo(map);

// Female only
// hsvAfrica comes from the 'africa.json' script included above
var hsvFLayer = L.geoJson(hsvAfrica,  {
    style: getFStyle,
    onEachFeature: onEachFeature
    });

// Chimpanzee chimp data from http://maps.iucnredlist.org/map.html?id=15933
var chimpLayer = L.geoJson(chimpData, {
    pointToLayer: L.mapbox.marker.style,
    style: function(feature) { return feature.style; },
    onEachFeature: onEachFeature
});

// Rainforest data http://rmgsc.cr.usgs.gov/ecosystems/africa.shtml
var forestLayer = L.geoJson(rainforestData, {
    pointToLayer: L.mapbox.marker.style,
    style: function(feature) { return feature.style; },
    onEachFeature: onEachFeature
});

// Last Glacial Melt data http://anthro.unige.ch/lgmvegetation/download_page_js.htm
var lgmLayer = L.geoJson(lgmData, {
    pointToLayer: L.mapbox.marker.style,
    style: function(feature) { return feature.style; },
    onEachFeature: onEachFeature
});

// Rainforest data
var rainforestLayer = L.geoJson(africaRainforestData, {
    pointToLayer: L.mapbox.marker.style,
    style: function(feature) { return feature.style; },
    onEachFeature: onEachFeature
});




// Create a group of map Layers
var mapLayers = L.layerGroup([baseLayer, hsvLayer])

// Ion Icons
L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';
       
var icon0 = L.marker([16.2417,17.4750], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'close-round',       
    markerColor: 'orange',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Sahelanthropus tchadensis</i>").openPopup();
       
var icon1 = L.marker([0.7529,35.8750], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'close-circled',       
    markerColor: 'purple',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Orrorin tugenensis</i>").openPopup();
       
var icon2 = L.marker([10.2747,40.2552], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'asterisk',       
    markerColor: 'darkred',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Ardipithecus kadabba</i>").openPopup();
       
var icon3 = L.marker([10.4790,40.4377], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'plus-round',       
    markerColor: 'darkred',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Ardipithecus ramidus</i>").openPopup();
       
var icon4 = L.marker([3.5833,36.1167], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'plus-circledflash',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus anamensis</i>").openPopup();
       
var icon5 = L.marker([16.0650,18.5008], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'record',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus bahrelghazali</i>").openPopup();
       
var icon6 = L.marker([3.5833,36.1167], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'stop',       
    markerColor: 'pink',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Kenyanthropus platyops</i>").openPopup();
       
var icon7 = L.marker([11.5000,40.7500], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'flame',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus deyiremeda</i>").openPopup();
       
var icon8 = L.marker([-26.0157,27.7343], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'cloud',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus ?</i>").openPopup();
       
var icon9 = L.marker([11.1667,40.6333], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon10 = L.marker([-2.9961,35.3525], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon11 = L.marker([4.8004,35.9671], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon12 = L.marker([11.1000,40.5794], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon13 = L.marker([3.9478,36.1872], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon14 = L.marker([10.5600,40.5794], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon15 = L.marker([3.9478,36.1872], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon16 = L.marker([2.9234,36.0634], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-book',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afarensis</i>").openPopup();
       
var icon17 = L.marker([11.3500,40.8667], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'cloud',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo ?</i>").openPopup();
       
var icon18 = L.marker([-27.5333,24.7856], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'earth',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afaricanus</i>").openPopup();
       
var icon19 = L.marker([-26.0158,27.7344], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'earth',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afaricanus</i>").openPopup();
       
var icon20 = L.marker([-24.1408,29.2008], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'earth',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afaricanus</i>").openPopup();
       
var icon21 = L.marker([-25.9000,27.7500], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'earth',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus afaricanus</i>").openPopup();
       
var icon22 = L.marker([4.8004,35.9671], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'leaf',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus aethiopicus</i>").openPopup();
       
var icon23 = L.marker([3.5833,36.1167], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'leaf',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus aethiopicus</i>").openPopup();
       
var icon24 = L.marker([-10.1167,34.0000], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'bug',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo rudolfensis</i>").openPopup();
       
var icon25 = L.marker([-25.9292,27.7889], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-bell',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus robustus</i>").openPopup();
       
var icon26 = L.marker([-25.9292,27.7889], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-bell',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus robustus</i>").openPopup();
       
var icon27 = L.marker([-25.8270,27.8470], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-bell',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus robustus</i>").openPopup();
       
var icon28 = L.marker([-26.0128,27.7458], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'ios-bell',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus robustus</i>").openPopup();
       
var icon29 = L.marker([-25.8950,27.8014], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'erlenmeyer-flask',       
    markerColor: 'red',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Australopithecus sediba</i>").openPopup();
       
var icon30 = L.marker([-2.9936,35.3511], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'cube',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo habilis</i>").openPopup();
       
var icon31 = L.marker([3.9478,36.1872], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'cube',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo habilis</i>").openPopup();
       
var icon32 = L.marker([-2.9936,35.3511], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'heart',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus boisei</i>").openPopup();
       
var icon33 = L.marker([3.9478,36.1872], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'heart',       
    markerColor: 'green',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Paranthropus boisei</i>").openPopup();
       
var icon34 = L.marker([3.9478,36.1872], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'bug',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo rudolfensis</i>").openPopup();
       
var icon35 = L.marker([3.9478,36.1872], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'power',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo erectus</i>").openPopup();
       
var icon36 = L.marker([3.5833,36.1167], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'power',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo erectus</i>").openPopup();
       
var icon38 = L.marker([14.2417,40.3000], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'star',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo erectus/heidelbergensis</i>").openPopup();
       
var icon39 = L.marker([12.1058,42.0911], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'funnel',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo heidelbergensis</i>").openPopup();
       
var icon40 = L.marker([4.8004,35.9671], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'person',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo sapiens</i>").openPopup();
       
var icon41 = L.marker([10.2833,40.5000], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'man',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo sapiens (idaltu)</i>").openPopup();
       
var icon42 = L.marker([31.8550,8.8725], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'person',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo sapiens</i>").openPopup();
       
var icon43 = L.marker([-34.1081,24.3901], {       
  icon: L.AwesomeMarkers.icon({       
    icon: 'person',       
    markerColor: 'blue',       
    iconColor: 'black'       
  })       
}).bindPopup("<i>Homo sapiens</i>").openPopup();

var markers = L.layerGroup([icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30, icon31, icon32, icon33, icon34, icon35, icon36, icon38, icon39, icon40, icon41, icon42, icon43]).addTo(map);

var markers0 = L.layerGroup([icon0]);

var markers1 = L.layerGroup([icon1]);

var markers2 = L.layerGroup([icon2, icon3]);

var markers3 = L.layerGroup([icon4, icon5, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon18, icon19, icon20, icon21, icon29]);

var markers4 = L.layerGroup([icon6]);

var markers5 = L.layerGroup([icon17, icon24, icon30, icon31, icon34, icon35, icon36, icon38, icon39, icon40, icon41, icon42, icon43]);

var markers6 = L.layerGroup([icon22, icon23, icon25, icon26, icon27, icon28, icon32, icon33]);

// Routes
//Arrow line code starts from here
var coords = [[[-24.1408333333333, 29.2008333333333], [3.94777777777778, 36.1872222222222]],
              [[-24.1408333333333, 29.2008333333333], [-2.99361111111111, 35.3511111111111]],
              [[-24.1408333333333, 29.2008333333333], [3.58333333333333, 36.1166666666667]],
              [[-24.1408333333333, 29.2008333333333], [-2.99361111111111, 35.3511111111111]],
              [[-2.99361111111111, 35.3511111111111], [3.58333333333333, 36.1166666666667]],
              [[-2.99361111111111, 35.3511111111111], [3.94777777777778, 36.1872222222222]],
              [[-2.99361111111111, 35.3511111111111], [-2.99361111111111, 35.3511111111111]],
              [[-2.99361111111111, 35.3511111111111], [-25.9291666666667, 27.7888888888889]],
              [[-2.99361111111111, 35.3511111111111], [-25.895, 27.8013888888889]],
              [[3.58333333333333, 36.1166666666667], [-25.9291666666667, 27.7888888888889]],
              [[3.94777777777778, 36.1872222222222], [3.58333333333333, 36.1166666666667]],
              [[3.94777777777778, 36.1872222222222], [-2.99361111111111, 35.3511111111111]],
              [[3.94777777777778, 36.1872222222222], [-25.9291666666667, 27.7888888888889]],
              [[3.94777777777778, 36.1872222222222], [-25.895, 27.8013888888889]],
              [[-2.99361111111111, 35.3511111111111], [3.58333333333333, 36.1166666666667]],
              [[-2.99361111111111, 35.3511111111111], [-25.9291666666667, 27.7888888888889]],
              [[-2.99361111111111, 35.3511111111111], [-25.895, 27.8013888888889]],
              [[-25.9291666666667, 27.7888888888889], [3.58333333333333, 36.1166666666667]],
              [[-25.9291666666667, 27.7888888888889], [3.58333333333333, 36.1166666666667]]];


var all_species = [["africanus", "rudolphensis"],
                   ["africanus", "habilis"],
                   ["africanus", "aethiopicus"],
                   ["africanus", "boisei"],
                   ["habilis", "aethiopicus"],
                   ["habilis", "rudolphensis"],
                   ["habilis", "boisei"],
                   ["habilis", "robustus"],
                   ["habilis", "sediba"],
                   ["aethiopicus", "robustus"],
                   ["rudolphensis", "erectus"],
                   ["rudolphensis", "boisei"],
                   ["rudolphensis", "robustus"],
                   ["rudolphensis", "sediba"],
                   ["boisei", "erectus"],
                   ["boisei", "robustus"],
                   ["boisei", "sediba"],
                   ["robustus", "erectus"],
                   ["sediba", "erectus"]];

var arrowIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AsZEBQkjtoI0gAAANlJREFUOMutk00OwiAQhb8Z0MaFsVt3XsR7ei1v4Mq9a/vjog0FUkohkhAI5D2+zGNga4yo203TPyscoXAxzJhuvebTEe21lE5W6GJKKSG0K3Qxpf0HXbaWWkgXU5qaZIsodUeyOcrAQ4KXhKHAcNF7Wq2kS1KKS1bc5VjYU4GHFiSbo7STe13tkrVU7y/VmgEOyMgKeg2b6zCtNpNZvazfPQ0uifMeA1gEi9AAHQOfSTBuGo0cgN717kwy5/qmxXDlTMuJF8/YULx6WKDz/ifJuyMP7ty40PwAbH5TI+t+Hg8AAAAASUVORK5CYII=',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [-3, -76],
});


/** Used rotation code from https://github.com/shramov/leaflet-plugins/blob/master/layer/Marker.Rotate.js
As its not availabel on CDN
*/

/*
 * Based on comments by @runanet and @coomsie 
 * https://github.com/CloudMade/Leaflet/issues/386
 *
 * Wrapping function is needed to preserve L.Marker.update function
 */ (function () {
    var _old__setPos = L.Marker.prototype._setPos;
    L.Marker.include({
        _updateImg: function (i, a, s) {
            a = L.point(s).divideBy(2)._subtract(L.point(a));
            var transform = '';
            transform += ' translate(' + -a.x + 'px, ' + -a.y + 'px)';
            transform += ' rotate(' + this.options.iconAngle + 'deg)';
            transform += ' translate(' + a.x + 'px, ' + a.y + 'px)';
            i.style[L.DomUtil.TRANSFORM] += transform;
        },

        setIconAngle: function (iconAngle) {
            this.options.iconAngle = iconAngle;
            if (this._map) this.update();
        },

        _setPos: function (pos) {
            if (this._icon) this._icon.style[L.DomUtil.TRANSFORM] = '';
            if (this._shadow) this._shadow.style[L.DomUtil.TRANSFORM] = '';

            _old__setPos.apply(this, [pos]);

            if (this.options.iconAngle) {
                var defaultIcon = new L.Icon.Default;
                var a = this.options.icon.options.iconAnchor || defaultIcon.options.iconAnchor;
                var s = this.options.icon.options.iconSize || defaultIcon.options.iconSize;
                var i;
                if (this._icon) {
                    i = this._icon;
                    this._updateImg(i, a, s);
                }
                if (this._shadow) {
                    if (this.options.icon.options.shadowAnchor) a = this.options.icon.options.shadowAnchor;
                    s = this.options.icon.options.shadowSize;
                    i = this._shadow;
                    this._updateImg(i, a, s);
                }
            }
        }
    });
}());

// HSV2-IP route
// Boisei route
var arrow_colours = ["gray", "gray", "gray", "gray",
		     "gray", "gray", "gray", "gray", "gray", "gray",
                     "gray", "gray", "gray", "gray", 
                     "red", "gray", "gray", "gray", "gray"];
var width = [0, 0, 0, 0,
		     0, 0, 0, 0, 0, 0,
                     0, 0, 0, 0, 
                     7, 0, 0, 0, 0];
var boiseiRouteGroup = L.layerGroup().addTo(map);

for (var k = 0; k < coords.length; k++) {
  var coordinates = coords[k];
  var species = all_species[k];
  var i = 1;

  //Putting location marker
    marker = L.marker(coordinates[i-1]).bindPopup("<i>" + species[i-1] + "</i>").openPopup();
    boiseiRouteGroup.addLayer(marker);

    marker = L.marker(coordinates[i]).bindPopup("<i>" + species[i] + "</i>").openPopup();
    boiseiRouteGroup.addLayer(marker);
   
   //Code for putting arrow with appropriate rotation
    var firstPoint = coordinates[i-1].slice(),
        secondPoint = coordinates[i].slice(),
        slope = ((secondPoint[1] - firstPoint[1]) / (secondPoint[0] - firstPoint[0])),
        angle = Math.atan(slope),
        rotation;
    
    //Shifting the graph Origin to point of start point
    secondPoint[0] = secondPoint[0] - firstPoint[0];
    secondPoint[1] = secondPoint[1] - firstPoint[1];
	
    //Fourth quadrant
    if (secondPoint[0] > 0 && secondPoint[1] < 0) {
        rotation = (angle * 180/Math.PI)/2;
    }
    //Second quadrant
    else if (secondPoint[0] < 0 && secondPoint[1] > 0) {
        rotation = 180 + (angle * 180/Math.PI);
    }
    //Third quadrant
    else if (secondPoint[0] < 0 && secondPoint[1] < 0) {
        rotation =  180 + (angle * 180/Math.PI);
    }
    //First quadrant
    else if (secondPoint[0] > 0 && secondPoint[1] > 0) {
        rotation = (angle * 180/Math.PI);
    }
    //Drawing simple line
    line = L.polyline([coordinates[0], coordinates[i]], {
      color: arrow_colours[k],
      weight: width[k],
      opacity: 1.,
    });
  boiseiRouteGroup.addLayer(line)

  marker = L.marker(coordinates[i], {icon: arrowIcon,iconAngle: rotation, }).bindPopup("<i>" + species[i] + "</i>").openPopup();
  boiseiRouteGroup.addLayer(marker);
};



// HSV2-IT Primary route
var arrow_colours = ["gray", "gray", "gray", "gray",
		     "gray", "gray", "blue", "gray", "gray", "gray",
                     "gray", "gray", "gray", "gray", 
                     "blue", "gray", "gray", "gray", "gray"];
var width = [0, 0, 0, 0,
		     0, 0, 7, 0, 0, 0,
                     0, 0, 0, 0, 
                     7, 0, 0, 0, 0];
var hsv2ITPrimaryRouteGroup = L.layerGroup().addTo(map);

for (var k = 0; k < coords.length; k++) {
  var coordinates = coords[k];
  var species = all_species[k];
  var i = 1;

  //Putting location marker
    marker = L.marker(coordinates[i-1]).bindPopup("<i>" + species[i-1] + "</i>").openPopup();
    hsv2ITPrimaryRouteGroup.addLayer(marker);

    marker = L.marker(coordinates[i]).bindPopup("<i>" + species[i] + "</i>").openPopup();
    hsv2ITPrimaryRouteGroup.addLayer(marker);
   
   //Code for putting arrow with appropriate rotation
    var firstPoint = coordinates[i-1].slice(),
        secondPoint = coordinates[i].slice(),
        slope = ((secondPoint[1] - firstPoint[1]) / (secondPoint[0] - firstPoint[0])),
        angle = Math.atan(slope),
        rotation;
    
    //Shifting the graph Origin to point of start point
    secondPoint[0] = secondPoint[0] - firstPoint[0];
    secondPoint[1] = secondPoint[1] - firstPoint[1];
	
    //Fourth quadrant
    if (secondPoint[0] > 0 && secondPoint[1] < 0) {
        rotation = (angle * 180/Math.PI)/2;
    }
    //Second quadrant
    else if (secondPoint[0] < 0 && secondPoint[1] > 0) {
        rotation = 180 + (angle * 180/Math.PI);
    }
    //Third quadrant
    else if (secondPoint[0] < 0 && secondPoint[1] < 0) {
        rotation =  180 + (angle * 180/Math.PI);
    }
    //First quadrant
    else if (secondPoint[0] > 0 && secondPoint[1] > 0) {
        rotation = (angle * 180/Math.PI);
    }
    //Drawing simple line
    line = L.polyline([coordinates[0], coordinates[i]], {
      color: arrow_colours[k],
      weight: width[k],
      opacity: 1.,
    });
  hsv2ITPrimaryRouteGroup.addLayer(line)

  marker = L.marker(coordinates[i], {icon: arrowIcon,iconAngle: rotation, }).bindPopup("<i>" + species[i] + "</i>").openPopup();
  hsv2ITPrimaryRouteGroup.addLayer(marker);
};


// HSV2-IT secondary route
// Habilis route
var arrow_colours = ["gray", "gray", "gray", "gray",
		     "gray", "gray", "black", "gray", "gray", "gray",
                     "gray", "gray", "gray", "gray", 
                     "black", "gray", "gray", "gray", "gray"];
var width = [0, 0, 0, 0,
		     0, 0, 7, 0, 0, 0,
                     0, 0, 0, 0, 
                     7, 0, 0, 0, 0];
var hsv2ITSecondaryRouteGroup = L.layerGroup().addTo(map);

for (var k = 0; k < coords.length; k++) {
  var coordinates = coords[k];
  var species = all_species[k];
  var i = 1;

  //Putting location marker
    marker = L.marker(coordinates[i-1]).bindPopup("<i>" + species[i-1] + "</i>").openPopup();
    hsv2ITSecondaryRouteGroup.addLayer(marker);

    marker = L.marker(coordinates[i]).bindPopup("<i>" + species[i] + "</i>").openPopup();
    hsv2ITSecondaryRouteGroup.addLayer(marker);
   
   //Code for putting arrow with appropriate rotation
    var firstPoint = coordinates[i-1].slice(),
        secondPoint = coordinates[i].slice(),
        slope = ((secondPoint[1] - firstPoint[1]) / (secondPoint[0] - firstPoint[0])),
        angle = Math.atan(slope),
        rotation;
    
    //Shifting the graph Origin to point of start point
    secondPoint[0] = secondPoint[0] - firstPoint[0];
    secondPoint[1] = secondPoint[1] - firstPoint[1];
	
    //Fourth quadrant
    if (secondPoint[0] > 0 && secondPoint[1] < 0) {
        rotation = (angle * 180/Math.PI)/2;
    }
    //Second quadrant
    else if (secondPoint[0] < 0 && secondPoint[1] > 0) {
        rotation = 180 + (angle * 180/Math.PI);
    }
    //Third quadrant
    else if (secondPoint[0] < 0 && secondPoint[1] < 0) {
        rotation =  180 + (angle * 180/Math.PI);
    }
    //First quadrant
    else if (secondPoint[0] > 0 && secondPoint[1] > 0) {
        rotation = (angle * 180/Math.PI);
    }
    //Drawing simple line
    line = L.polyline([coordinates[0], coordinates[i]], {
      color: arrow_colours[k],
      weight: width[k],
      opacity: 1.,
    });
  hsv2ITSecondaryRouteGroup.addLayer(line)

  marker = L.marker(coordinates[i], {icon: arrowIcon,iconAngle: rotation, }).bindPopup("<i>" + species[i] + "</i>").openPopup();
  hsv2ITSecondaryRouteGroup.addLayer(marker);
};


// Base map and overlay maps
var baseMaps = { "Base map": baseLayer, "HSV-2 Female + Mixed (F+M)": hsvLayer, "HSV-2 Female only": hsvFLayer, "Chimpanzee data (<a href=\"http://maps.iucnredlist.org/map.html?id=15933\">iucnredlist</a>)": chimpLayer, "Tropical rainforest (<a href=\"http://rmgsc.cr.usgs.gov/ecosystems/africa.shtml\">USGS</a>)": forestLayer, "<a href=\"http://anthro.unige.ch/lgmvegetation/download_page_js.htm\">Last Glacial Maximum</a>": lgmLayer, "Rainforest data (Koppen-Geiger climate data)": rainforestLayer};


var overlayMaps = { "All Genera": markers,"Sahelanthropus": markers0,"Orrorin": markers1,"Ardipithecus": markers2,"Australopithecus": markers3,"Kenyanthropus": markers4,"Homo": markers5,"Paranthropus": markers6, "HSV2-IP route <i>(P. boisei)</i>": boiseiRouteGroup, "HSV2-IT primary route <i>(H. Habilis => P. boisei)</i>": hsv2ITPrimaryRouteGroup, "HSV2-IT secondary route <i>(P. boisei)</i>": hsv2ITSecondaryRouteGroup};


var control = L.control.activeLayers(baseMaps, overlayMaps); 
control.addTo(map);


// Base Layer
function getBaseStyle(feature) {
  return {
    stroke: true,
    weight: 2,
    opacity: 0.2,
    color: '#404040',
    fillOpacity: 0.7,
    fillColor:'#FFFFFF'
  };
}

function getStyle(feature) {
  return {
    stroke: true,
    weight: 2,
    opacity: 0.2,
    color: '#404040',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.hsv2)
  };
}

function getFStyle(feature) {
  return {
    stroke: true,
    weight: 2,
    opacity: 0.2,
    color: '#404040',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.hsv2f)
  };
}


// Get Color gradient
function getGradientColor(start_color, end_color, percent) {
  // strip the leading # if it's there
  start_color = start_color.replace(/^\s*#|\s*$/g, '');
  end_color = end_color.replace(/^\s*#|\s*$/g, '');

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if(start_color.length == 3){
    start_color = start_color.replace(/(.)/g, '$1$1');
  }
  if(end_color.length == 3){
    end_color = end_color.replace(/(.)/g, '$1$1');
  }

  // get colors
  var start_red = parseInt(start_color.substr(0, 2), 16),
      start_green = parseInt(start_color.substr(2, 2), 16),
      start_blue = parseInt(start_color.substr(4, 2), 16);

  var end_red = parseInt(end_color.substr(0, 2), 16),
      end_green = parseInt(end_color.substr(2, 2), 16),
      end_blue = parseInt(end_color.substr(4, 2), 16);

  // calculate new color
  var diff_red = end_red - start_red;
  var diff_green = end_green - start_green;
  var diff_blue = end_blue - start_blue;

  diff_red = ( (diff_red * percent) + start_red ).toString(16).split('.')[0];
  diff_green = ( (diff_green * percent) + start_green ).toString(16).split('.')[0];
  diff_blue = ( (diff_blue * percent) + start_blue ).toString(16).split('.')[0];

  // ensure 2 dichimps by color
  if( diff_red.length == 1 )
    diff_red = '0' + diff_red

  if( diff_green.length == 1 )
    diff_green = '0' + diff_green

  if( diff_blue.length == 1 )
    diff_blue = '0' + diff_blue

  return '#' + diff_red + diff_green + diff_blue;
}

// Compute percentage
function computePercent(val, min, max) {
  return ((val - min) / (max - min));
}

// get color depending on population.hsv2 value
function getColor(d) {
  return d > 80 ? '#FF0000' :
    d > 70 ? getGradientColor('#E85C02', '#FF3600', computePercent(d, 70, 80)) :
    d > 50 ? getGradientColor('#FF950A','#E85C02', computePercent(d, 50, 70)) :
    d > 30 ? getGradientColor('#E8B721', '#FF950A', computePercent(d, 30, 50)) :
    d > 10 ? getGradientColor('#FFF238', '#E8B721', computePercent(d, 10, 30)) :
    d > 1  ? getGradientColor('#FFFB13', '#FFF238', computePercent(d, 1, 10)) :
    '#FFFFFF';
}


map.on('baselayerchange', function(e) {
    var clayer = control.getActiveBaseLayer().name;
    if (clayer === "HSV-2 Female + Mixed (F+M)") {
      document.getElementById('hsv2-legend').style.display='block';
      document.getElementById('genera-legend').style.display='block';  
      document.getElementById('chimp-legend').style.display='none';
      document.getElementById('pygmy-legend').style.display='none'; 
      document.getElementById('rain-legend').style.display='none'; 
      document.getElementById('lgm-legend').style.display='none'; 
      document.getElementById('rf-legend').style.display='none'; 
    }
    if (clayer === "HSV-2 Female only") {
      document.getElementById('hsv2-legend').style.display='block';
      document.getElementById('genera-legend').style.display='block';  
      document.getElementById('chimp-legend').style.display='none';
      document.getElementById('pygmy-legend').style.display='none'; 
      document.getElementById('rain-legend').style.display='none'; 
      document.getElementById('lgm-legend').style.display='none';
      document.getElementById('rf-legend').style.display='none'; 
    }
    if (clayer === "Chimpanzee data (<a href=\"http://maps.iucnredlist.org/map.html?id=15933\">iucnredlist</a>)") {
      document.getElementById('hsv2-legend').style.display='none';
      document.getElementById('genera-legend').style.display='block';  
      document.getElementById('chimp-legend').style.display='block';
      document.getElementById('pygmy-legend').style.display='block';
      document.getElementById('rain-legend').style.display='none'; 
      document.getElementById('lgm-legend').style.display='none'; 
      document.getElementById('rf-legend').style.display='none'; 
    }
    if (clayer === "<a href=\"http://anthro.unige.ch/lgmvegetation/download_page_js.htm\">Last Glacial Maximum</a>") {
      document.getElementById('hsv2-legend').style.display='none';
      document.getElementById('genera-legend').style.display='block';  
      document.getElementById('chimp-legend').style.display='none';
      document.getElementById('pygmy-legend').style.display='none';
      document.getElementById('rain-legend').style.display='none'; 
      document.getElementById('lgm-legend').style.display='block'; 
      document.getElementById('rf-legend').style.display='none'; 
    }
    if (clayer === "Tropical rainforest (<a href=\"http://rmgsc.cr.usgs.gov/ecosystems/africa.shtml\">USGS</a>)") {
      document.getElementById('hsv2-legend').style.display='none';
      document.getElementById('genera-legend').style.display='block';  
      document.getElementById('chimp-legend').style.display='none';
      document.getElementById('pygmy-legend').style.display='none';
      document.getElementById('rain-legend').style.display='block'; 
      document.getElementById('lgm-legend').style.display='none'; 
      document.getElementById('rf-legend').style.display='none'; 
    }
    if (clayer === "Rainforest data (Koppen-Geiger climate data)") {
      document.getElementById('hsv2-legend').style.display='none';
      document.getElementById('genera-legend').style.display='block';  
      document.getElementById('chimp-legend').style.display='none';
      document.getElementById('pygmy-legend').style.display='none';
      document.getElementById('rain-legend').style.display='none'; 
      document.getElementById('lgm-legend').style.display='none'; 
      document.getElementById('rf-legend').style.display='block'; 
    }
});


function onEachFeature(feature, layer) {
//  if (feature.properties && feature.properties.popupContent) 
//      layer.bindPopup(feature.properties.popupContent);
    
  layer.on({
    mousemove: mousemove,
    mouseout: mouseout,
    click: zoomToFeature
  });
}

var closeTooltip;


function mousemove(e) {
  var layer = e.target;
  
  popup.setLatLng(e.latlng);
  var clayer = control.getActiveBaseLayer().name;
    if (clayer === "HSV-2 Female + Mixed (F+M)") {
      popup.setContent('<div class="marker-title">' + layer.feature.properties.admin + '</div>' +
        'HSV-2 distribution (females + mixed): ' + layer.feature.properties.hsv2 );

    }
    if (clayer === "HSV-2 Female only") {
      popup.setContent('<div class="marker-title">' + layer.feature.properties.admin + '</div>' +
        'HSV-2 distribution (female only): ' + layer.feature.properties.hsv2f );

    }
    if (clayer === "Chimpanzee data (<a href=\"http://maps.iucnredlist.org/map.html?id=15933\">iucnredlist</a>)") {
      popup.setContent('<div class="marker-title">' + layer.feature.properties.BINOMIAL + 
	', ' + layer.feature.properties.SUBSPECIES + '</div>' +
	layer.feature.properties.LEGEND);
    }
    if (clayer === "<a href=\"http://anthro.unige.ch/lgmvegetation/download_page_js.htm\">Last Glacial Maximum</a>") {
      popup.setContent('<div class="marker-title">' + layer.feature.properties.VEG_ID + '</div>');
    }
    if (clayer === "Tropical rainforest (<a href=\"http://rmgsc.cr.usgs.gov/ecosystems/africa.shtml\">USGS</a>)") {
      popup.setContent('<div class="marker-title">' + layer.feature.properties.vegetation + '</div>');    
    }
    if (clayer === "Rainforest data (Koppen-Geiger climate data)") {
      popup.setContent('<div class="marker-title">' + layer.feature.properties.forest + '</div>');    
    }
  if (!popup._map) popup.openOn(map);
  window.clearTimeout(closeTooltip);

  // highlight feature
  layer.setStyle({
    weight: 3,
    opacity: 0.3,
    fillOpacity: 0.9
  });

  if (!L.Browser.ie && !L.Browser.opera) {
    layer.bringToFront();
  }
}


function mouseout(e) {
  // Get current layer
  var clayer = control.getActiveBaseLayer().name;
  if (clayer === "HSV-2 Female + Mixed (F+M)")
    hsvLayer.resetStyle(e.target);
  if (clayer === "HSV-2 Female only")
    hsvFLayer.resetStyle(e.target);
  if (clayer === "Chimpanzee data (<a href=\"http://maps.iucnredlist.org/map.html?id=15933\">iucnredlist</a>)")
    chimpLayer.resetStyle(e.target);
  if (clayer === "<a href=\"http://anthro.unige.ch/lgmvegetation/download_page_js.htm\">Last Glacial Maximum</a>")
    lgmLayer.resetStyle(e.target);
  if (clayer === "Tropical rainforest (<a href=\"http://rmgsc.cr.usgs.gov/ecosystems/africa.shtml\">USGS</a>)")
    forestLayer.resetStyle(e.target);
  closeTooltip = window.setTimeout(function() {
    map.closePopup();
  }, 100);
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

map.legendControl.addLegend(getLegendHTML());

//map.legendControl.position('bottomleft');

function getLegendHTML() {
  var grades = [1, 10, 20, 30, 40, 50, 60, 70, 80],
  labels = [],
  from, to;
  var colours = ['#A23336', '#D63E2A', '#38AADD', '#FF91EA', '#D252B9', '#72B026', '#F78E2D', ];
  var genera = ['Ardipithecus', 'Australopithecus', 'Homo', 'Kenyanthropus', 'Orrorin', 'Paranthropus', 'Sahelanthropus', ];

  var chimpColours = ['#ff0099', '#8D20AE']
  var chimpData = ['Extant', 'Probably extant']
  var pygmyColours = ['#009999', '#132DA0']
  var pygmyData = ['Extant', 'Probably extant']
  var lgmColours = ['#00ff00', '#006400', '#00CED1']
  var lgmData = ['Savanna', 'Tropical rainforest', 'Montane tropical forest']
  var rainColours = ['006400']
  var rainData = ['Tropical rainforest']
  var rfColours = ['#00FF00', '#008000']
  var rfData = ['Maximum rainforest:<br/>  3 - 2.9 MYA and 2.4 - 1.8 MYA', 'Minimum rainforest:<br/> 2.9 - 2.4 MYA and 1.8 - 1.6 MYA']

  var generaLegend = [];
  var chimpLegend = [];
  var pygmyLegend = [];
  var lgmLegend = [];
  var rainLegend = [];
  var rfLegend = [];

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<li><span class="swatch" style="background:' + getColor(from + 1) + '"></span> ' +
      from + (to ? '&ndash;' + to : '+') + '</li>');
  }

  for (var i = 0; i < genera.length; i++) {
    generaLegend.push(
      '<li><span class="swatch" style="background:' + colours[i] + '"></span> ' +
      genera[i] + '</li>');
  }

  for (var i = 0; i < chimpData.length; i++) {
    chimpLegend.push(
      '<li><span class="swatch" style="background:' + chimpColours[i] + '"></span> ' +
      chimpData[i] + '</li>');
  }

  for (var i = 0; i < pygmyData.length; i++) {
    pygmyLegend.push(
      '<li><span class="swatch" style="background:' + pygmyColours[i] + '"></span> ' +
      pygmyData[i] + '</li>');
  }

  for (var i = 0; i < rainData.length; i++) {
    rainLegend.push(
      '<li><span class="swatch" style="background:' + rainColours[i] + '"></span> ' +
      rainData[i] + '</li>');
  }

  for (var i = 0; i < lgmData.length; i++) {
    lgmLegend.push(
      '<li><span class="swatch" style="background:' + lgmColours[i] + '"></span> ' +
      lgmData[i] + '</li>');
  }

  for (var i = 0; i < rfData.length; i++) {
    rfLegend.push(
      '<li><span class="swatch" style="background:' + rfColours[i] + '"></span> ' +
      rfData[i] + '</li>');
  }

  return '<div id="genera-legend"><span><strong>Genera</strong></span><ul>' + generaLegend.join('') + '</ul></div>' + 
    '<div id="hsv2-legend"><span><strong>HSV-2 distribution</strong></span><ul>' + labels.join('') + '</ul></div>' + 
    '<div id="chimp-legend" style="display:none;"><span><strong>Chimpanzee Pan troglodytes <a href=\"http://maps.iucnredlist.org/map.html?id=15933\">IUCN redlist</a></strong></span><ul>' + chimpLegend.join('') + '</ul></div>' +
'<div id="pygmy-legend" style="display:none;"><span><strong>Chimpanzee Pan paniscus <a href=\"http://maps.iucnredlist.org/map.html?id=15932\">IUCN redlist</a></strong></span><ul>' + pygmyLegend.join('') + '</ul></div>' +
'<div id="rain-legend" style="display:none;"><span><strong>Tropical rainforest/strong></span><ul>' + rainLegend.join('') + '</ul></div>' +
'<div id="lgm-legend" style="display:none;"><span><strong><a href=\"http://anthro.unige.ch/lgmvegetation/download_page_js.htm\">Last Glacial Maximum</a></strong></span><ul>' + lgmLegend.join('') + '</ul></div>' +
'<div id="rf-legend" style="display:none;"><span><strong>Rain forest</a></strong></span><ul>' + rfLegend.join('') + '</ul></div>';
}

var credits = L.control.attribution();
credits.addAttribution('<a href="https://github.com/wadhamite/hsv-mapping">CC-BY-NC-SA 4.0</a>').addTo(map);
