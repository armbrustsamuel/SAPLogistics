sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./MapUtils"],function(t,o,e,i){"use strict";var n=o.extend("openui5.googlemaps.Waypoint",{metadata:{properties:{location:{type:"string"},stopover:{type:"boolean"}},renderer:{}}});return n.prototype.createWaypoint=function(){this.waypoint||(this.waypoint=new e.DirectionsWaypoint),this.waypoint.location=this.getLocation(),this.waypoint.stopover=this.getStopover()},n.prototype.getOptions=function(){var t={};t.location=this.getLocation(),t.stopover=this.getStopover()},n},!0);