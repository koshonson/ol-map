import 'ol/ol.css';
import './map/projections/projectionKrovak';
import { Map } from 'ol';
import { layerWmsZm25 } from './map/layers/layerWmsZm25';
import { layerVectorPolygons } from './map/layers/layerVecPolygons';
import { luzinyView } from './map/mapViews';
import { tooltip } from './map/overlays/tooltip';
import { tooltipHandler } from './map/handlers/tooltipHandler';

const map = new Map({
	target: 'map',
	layers: [layerWmsZm25, layerVectorPolygons],
	overlays: [tooltip],
	view: luzinyView
});

map.on('pointermove', event => tooltipHandler(event, map, tooltip));
