sap.ui.controller("demo.view.TripMaps", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf demo.view.TripMaps
	 */

	onInit: function(oEvent) {
        sap.ui.getCore().getEventBus().subscribe("listSelected", this.onListSelected, this);
        this.oPage = this.byId("page1");
        this.oMap = this.byId("map1");
        //this.oChart = this.byId("chart1");
        this.showPolyline = false;
        this.showPolygon = false;
        var filters=[];
        var sFilter;
        sFilter = new sap.ui.model.Filter("Trip", sap.ui.model.FilterOperator.EQ, "query");
		filters.push(sFilter);
		//var map = this.getView().byId("map1");
		var binding2 = this.oMap.getBinding("markers");
		//binding2.filter(filters);
    },

    handleNavButtonPress : function (evt) {
    	var filters=[];
		var list = this.getView().byId("List");
		var map = this.getView().byId("map1");
		var binding2 = map.getBinding("markers");
		binding2.filter(filters);
		var binding = list.getBinding("items");
		binding.filter(filters);
		this.nav.back("Master");
	},
	
	handleButton : function (evt) {
		// sap.ui.getCore().loadLibrary("openui5.googlemaps", "../openui5/googlemaps/");
		// var places = [{
		//     name: "Bondi Beach",
		//     lat: -33.890542,
		//     lng: 151.274856,
		//     start: 'Manly',
		//     end: 'Cronulla'
		// }];
		// var oModel = new sap.ui.model.json.JSONModel();
		// oModel.setData({
		//     places: places
		// });
		// sap.ui.getCore().setModel(oModel);
		// var oContext = oModel.getContext('/places/0/');
		// var params = {
		//     url: 'https://maps.googleapis.com/maps/api/js',
		//     sensor: false,
		//     v: '3.exp'
		//         // libraries : 'places'
		// };
		// openui5.googlemaps.ScriptsUtil.setParams(params);
		// var directions = new openui5.googlemaps.Directions({
		//     startAddress: '{start}',
		//     endAddress: '{end}',
		//     travelMode: openui5.googlemaps.TravelMode.transit
		// });
		// // var myMap = new openui5.googlemaps.Map("map1", {
		// //     lat: -33.89,
		// //     lng: 151.27,
		// //     zoom: 7,
		// //     zoomControl: true,
		// //     directions: directions
		// // }).placeAt("map").setBindingContext(oContext);
		
		// var map = this.getView().byId("map1");
		// map.directions = directions;
		// map.setBindingContext(oContext);
		
		var oMarkers = new openui5.googlemaps.Marker({
		    lat: '-51.43243242',
		    lng: '-29.3453463',
		    info: 'casa',
		    icon: '{http://www.w3schools.com/googleapi/pinkball.png}', //'{http://www.w3schools.com/googleapi/pinkball.png}',
		});
		
		var map = this.getView().byId("map1");
		openui5.googlemaps.MapUtils.currentPosition(function(position) {
            map.setLat(position.lat);
            map.setLng(position.lng);
            map.setZoom(13);
        });
        
        map.markers = oMarkers;
		
	},

    onMapReady: function(oEvent) {
        if (this.selectedLocation === undefined) {
            // var places = this.getView().getModel().getData().places;
            // this.selectedLocation = places[places.length - 1]; 
            var results = this.getView().getModel().getData().d.results;
            this.selectedLocation = results[results.length - 1]; 
            this.setupPolylines();
            this.setupPolygons();
        }
    },

    setLocation: function(bPublish) {
        this.markerWindowOpen(this.selectedLocation);
        //this.setChartData(this.selectedLocation.columns);
        sap.ui.getCore().getEventBus().publish("placeSelected", {
            location: this.selectedLocation
        });
    },
	  
	handleIconTabBarSelect: function (evt) {
		var filters = [];
		var sFilter;
		//var query = evt.getParameter("title");
		var query = evt.getSource().getProperty('title');
		console.log(query);
		if (query && query.length > 0) {
			
			sFilter = new sap.ui.model.Filter("Trip", sap.ui.model.FilterOperator.EQ, query);
		    // if(query == "4" )
		    // {
		    //   sFilter = new sap.ui.model.Filter("Trip", sap.ui.model.FilterOperator.EQ, query);
		    // }
		    // else if(query == "6")
		    // {
		    //   sFilter = new sap.ui.model.Filter("Trip", sap.ui.model.FilterOperator.EQ, query);
		    // }
		     //and so on...
		    filters.push(sFilter);
		}
		
		var list = this.getView().byId("List");
		var map = this.getView().byId("map1");
		var binding2 = map.getBinding("markers");
		binding2.filter(filters);
		var binding = list.getBinding("items");
		binding.filter(filters);

	},

    
    markerWindowOpen: function(oData) {
        var that = this;
        this.oMap.getMarkers().forEach(function(oMarker) {
            if (oMarker.getLat() === oData.lat && oMarker.getLng() === oData.lng) {
                that.oPage.setTitle(oMarker.getInfo());
                oMarker.infoWindowOpen();
            } else {
                oMarker.infoWindowClose();
            }
        });
    },

    getMyLocation: function(evt) {
    	var map = this.byId("map1");
    	
		
    	//var infoWindow = new google.maps.InfoWindow({map: map});
   		if (navigator.geolocation) {
	     navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };
	    });
   		}
    },

    onListSelected: function(sChannelId, sEventId, oData) {
        this.selectedLocation = oData.context.getObject();
        this.setLocation();
    },

    onMarkerClick: function(oEvent) {
        this.selectedLocation = oEvent.getParameter('context').getObject();
        this.setLocation();
    },

    getPaths: function() {
        var aPaths = [];
        //this.getView().getModel().getData().places.forEach(function(obj) {
        this.getView().getModel().getData().d.results.forEach(function(obj) {
            aPaths.push({
                lat: obj.Latitude,
                lng: obj.Longitude
            });
        });

        return aPaths;
    },
    setupPolylines: function() {
        if (this.oMap.getPolylines().length > 0) {
            return;
        }

        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 0.5,
            scale: 4
        };

        this.oMap.addPolyline(new openui5.googlemaps.Polyline({
            path: this.getPaths(),
            strokeColor: "#0000FF",
            strokeOpacity: 0.5,
            strokeWeight: 0.2,
            visible: this.showPolyline,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }]
        }));

    },

    setupPolygons: function() {
        if (this.oMap.getPolygons().length > 0) {
            return;
        }

        var center = {
            lat: this.oMap.getLat(),
            lng: this.oMap.getLng()
        };
        this.oMap.addPolygon(new openui5.googlemaps.Polygon({
            paths: jQuery.merge([center], this.getPaths()),
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            visible: this.showPolygon,
        }));
    },

    onShowPolyline: function(oEvent) {
        this.showPolyline = !this.showPolyline;
        that = this;
        if (this.oMap.getPolylines()) {
            this.oMap.getPolylines().forEach(function(oControl) {
                oControl.setVisible(that.showPolyline);
            });
        }
    },

    onShowPolygon: function(oEvent) {
        this.showPolygon = !this.showPolygon;
        that = this;
        if (this.oMap.getPolygons()) {
            this.oMap.getPolygons().forEach(function(oControl) {
                oControl.setVisible(that.showPolygon);
            });
        }
    }
});