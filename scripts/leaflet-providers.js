(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['leaflet'], factory);
	} else if (typeof modules === 'object' && module.exports) {
		// define a Common JS module that relies on 'leaflet'
		module.exports = factory(require('leaflet'));
	} else {
		// Assume Leaflet is loaded into global object L already
		factory(L);
	}
}(this, function (L) {
	'use strict';


	L.TileLayer.Provider.providers = {
		url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=94df2c1a3f5143e9a142ca9523a8c3ca',
		options: {
			maxZoom: 17,
			attribution: 'Need Attr.'
	}
	

	L.tileLayer.provider = function (provider, options) {
		return new L.TileLayer.Provider(provider, options);
	};

	return L;
}));
