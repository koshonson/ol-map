import { polygons } from '../../../data/polygons.geojson';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { baseStyle } from '../styles';

export const layerVectorPolygons = new VectorLayer({
	source: new VectorSource({
		features: new GeoJSON().readFeatures(polygons)
	}),
	style: feature => {
		const { hodnota } = feature.getProperties();
		return baseStyle(hodnota);
	},
	minZoom: 6
});
