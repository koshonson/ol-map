import 'ol/ol.css';
import './map/projections/projectionKrovak';
import { Map } from 'ol';
import { layerWmsZm25 } from './map/layers/layerWmsZm25';
import { layerVectorPolygons } from './map/layers/layerVecPolygons';
import { luzinyView } from './map/views';
import { tooltip } from './map/overlays';
import { triggerPointermove } from './map/handlers';

const map = new Map({
	target: 'map',
	controls: [],
	layers: [layerWmsZm25, layerVectorPolygons],
	overlays: [tooltip],
	view: luzinyView
});

map.on('pointermove', event => triggerPointermove({ event, map, tooltip }));
