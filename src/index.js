import 'ol/ol.css';
import './krovakProj';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
	target: 'map',
	layers: [
		new TileLayer({
			source: new OSM()
		})
	],
	view: new View({
		projection: 'EPSG:5514',
		center: [-749992.3, -1045788.0],
		extent: [-925000, -1444353.536, -400646.464, -920000],
		zoom: 10,
		minZoom: 2
	})
});
