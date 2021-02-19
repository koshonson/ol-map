import { polygons } from '../../../data/polygons.geojson';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Fill, Style } from 'ol/style';

const colors = {
	1: '255, 0, 0',
	2: '255, 255, 0',
	3: '0, 255, 0',
	4: '0, 0, 255'
};

export const layerVectorPolygons = new VectorLayer({
	source: new VectorSource({
		features: new GeoJSON().readFeatures(polygons)
	}),
	style: feature => {
		const { hodnota } = feature.getProperties();
		return new Style({
			fill: new Fill({
				color: `rgba(${colors[hodnota]}, 0.6)`
			})
		});
	}
});
