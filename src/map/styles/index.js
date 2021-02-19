import { Fill, Stroke, Style } from 'ol/style';

const COLORS = {
	1: '255, 0, 0',
	2: '255, 255, 0',
	3: '0, 255, 0',
	4: '0, 0, 255'
};

export const baseStyle = value =>
	new Style({
		fill: new Fill({
			color: `rgba(${COLORS[value]}, 0.6)`
		})
	});

export const focusStyle = value =>
	new Style({
		fill: new Fill({
			color: `rgba(${COLORS[value]}, 0.45)`
		}),
		stroke: new Stroke({
			color: `rgb(${COLORS[value]})`,
			width: 2,
			lineCap: 'round',
			lineJoin: 'round'
		})
	});
