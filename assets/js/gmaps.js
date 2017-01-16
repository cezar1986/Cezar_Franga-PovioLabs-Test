function CustomMarker(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarker.prototype = new google.maps.OverlayView();
CustomMarker.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerCentered';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarker.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarker.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------CENTERED MARKER-------------------------*/
function CustomMarkerConn1(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerConn1.prototype = new google.maps.OverlayView();
CustomMarkerConn1.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerConn1 markerGlobal';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerConn1.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerConn1.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------CONNECTION 1 MARKER--------------------*/
function CustomMarkerConn2(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerConn2.prototype = new google.maps.OverlayView();
CustomMarkerConn2.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerConn2 markerGlobal';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerConn2.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerConn2.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------CONNECTION 2 MARKER--------------------*/
function CustomMarkerConn3(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerConn3.prototype = new google.maps.OverlayView();
CustomMarkerConn3.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerConn3 markerGlobal';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerConn3.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerConn3.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------CONNECTION 3 MARKER--------------------*/
function CustomMarkerConn4(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerConn4.prototype = new google.maps.OverlayView();
CustomMarkerConn4.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerConn4 markerGlobal';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerConn4.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerConn4.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------CONNECTION 4 MARKER--------------------*/
function CustomMarkerConn5(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerConn5.prototype = new google.maps.OverlayView();
CustomMarkerConn5.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerConn5 markerGlobal';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerConn5.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerConn5.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------CONNECTION 5 MARKER--------------------*/
function CustomMarkerDot1(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerDot1.prototype = new google.maps.OverlayView();
CustomMarkerDot1.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerDotBlue globalMarkerDot';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerDot1.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerDot1.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------DOT MARKER 1--------------------*/
function CustomMarkerDot2(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerDot2.prototype = new google.maps.OverlayView();
CustomMarkerDot2.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerDotBlue globalMarkerDot';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerDot2.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerDot2.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------DOT MARKER 2--------------------*/
function CustomMarkerDot3(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerDot3.prototype = new google.maps.OverlayView();
CustomMarkerDot3.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerDotMagenta globalMarkerDot';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerDot3.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerDot3.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------DOT MARKER 3--------------------*/
function CustomMarkerDot4(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerDot4.prototype = new google.maps.OverlayView();
CustomMarkerDot4.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerDotMagenta globalMarkerDot';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerDot4.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerDot4.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------DOT MARKER 4--------------------*/
function CustomMarkerDot5(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}
CustomMarkerDot5.prototype = new google.maps.OverlayView();
CustomMarkerDot5.prototype.draw = function () {

    var self = this;

    var div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.className = 'markerDotMagenta globalMarkerDot';

        if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        }
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x) + 'px';
        div.style.top = (point.y) + 'px';
    }
};
CustomMarkerDot5.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};
CustomMarkerDot5.prototype.getPosition = function () {
    return this.latlng;
};
/*------------------------------DOT MARKER 5--------------------*/
function initialize() {
    var myLatlng = new google.maps.LatLng(35.2019468, -102.8749801);
    var conn1 = new google.maps.LatLng(43.5666487, -96.2765555);
    var conn2 = new google.maps.LatLng(48.638424, -126.4539047);
    var conn3 = new google.maps.LatLng(32.7018408, -88.2336649);
    var conn4 = new google.maps.LatLng(41.0046684, -76.2581153);
    var conn5 = new google.maps.LatLng(41.7576948, -125.4726194);
    var dot1 = new google.maps.LatLng(52.58521, -127.3180127);
    var dot2 = new google.maps.LatLng(27.3256581, -110.5117053);
    var dot3 = new google.maps.LatLng(50.9766689, -99.5708494);
    var dot4 = new google.maps.LatLng(47.303018, -88.3088337);
    var dot5 = new google.maps.LatLng(24.479074, -105.2609817);
    var mapOptions = {
        zoom: 4,
        center: myLatlng,
        scrollwheel: true,
        disableDefaultUI: true
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    overlay = new CustomMarker(myLatlng,map,{marker_id: 'markerCentered'});
    overlay = new CustomMarkerConn1(conn1,map,{marker_id: 'markerConn1'});
    overlay = new CustomMarkerConn2(conn2,map,{marker_id: 'markerConn2'});
    overlay = new CustomMarkerConn3(conn3,map,{marker_id: 'markerConn3'});
    overlay = new CustomMarkerConn4(conn4,map,{marker_id: 'markerConn4'});
    overlay = new CustomMarkerConn5(conn5,map,{marker_id: 'markerConn5'});
    overlay = new CustomMarkerDot1(dot1,map,{marker_id: 'markerDot1'});
    overlay = new CustomMarkerDot2(dot2,map,{marker_id: 'markerDot2'});
    overlay = new CustomMarkerDot3(dot3,map,{marker_id: 'markerDot3'});
    overlay = new CustomMarkerDot4(dot4,map,{marker_id: 'markerDot4'});
    overlay = new CustomMarkerDot5(dot5,map,{marker_id: 'markerDot5'});
}
google.maps.event.addDomListener(window, 'load', initialize);