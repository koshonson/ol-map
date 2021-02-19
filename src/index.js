import 'ol/ol.css';
import './map/projectionKrovak';
import { Map, Overlay } from 'ol';
import { layerWmsZm25 } from './map/layerWmsZm25';
import { layerVectorPolygons } from './map/layerVecPolygons';
import { luzinyView } from './map/mapViews';

console.log(Overlay);

const map = new Map({
	target: 'map',
	layers: [layerWmsZm25, layerVectorPolygons],
	view: luzinyView
});

const tooltip = new Overlay({
	element: document.getElementById('tooltip'),
	positioning: 'bottom-left',
	offset: [5, -5]
});
map.addOverlay(tooltip);

const addTooltipTextLine = (key, value) => {
	const div = document.createElement('div');
	div.classList.add('tooltip-text');
	const span = document.createElement('span');
	span.textContent = `${key}: `;
	div.appendChild(span);
	div.innerHTML += value;
	return div;
};

map.on('pointermove', ({ originalEvent, coordinate }) => {
	const px = map.getEventPixel(originalEvent);
	const tt = tooltip.getElement();
	tt.textContent = '';
	const [feature] = map.getFeaturesAtPixel(px);
	if (!feature) {
		tt.style.opacity = 0;
	} else {
		const { id, pole } = feature.getProperties();
		tooltip.setPosition(coordinate);
		tt.style.opacity = 1;
		tt.appendChild(addTooltipTextLine('ID', id));
		tt.appendChild(addTooltipTextLine('Název', pole));
	}
});
