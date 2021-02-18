import 'ol/ol.css';
import './krovakProj';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

const map = new Map({
	target: 'map',
	layers: [
		new TileLayer({
			extent: [-905000, -1230000, -430000, -934999],
			source: new TileWMS({
				url: 'https://geoportal.cuzk.cz/WMS_ZM25_PUB/WMService.aspx',
				params: { LAYERS: 'GR_ZM25', TILED: true, FORMAT: 'image/png' }
			})
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
