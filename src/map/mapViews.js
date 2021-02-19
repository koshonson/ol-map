import { View } from 'ol';
import { krovakDef } from './projectionsDef';

export const luzinyView = new View({
	projection: 'EPSG:5514',
	extent: krovakDef.extent,
	center: [-749992.3, -1045788.0],
	zoom: 10,
	minZoom: 3
});
