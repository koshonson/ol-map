import 'ol/ol.css';
import './map/projectionKrovak';
import { Map } from 'ol';
import { layerWmsZm25 } from './map/layerWmsZm25';
import { layerVectorPolygons } from './map/layerVecPolygons';
import { luzinyView } from './map/mapViews';

const map = new Map({
	target: 'map',
	layers: [layerWmsZm25, layerVectorPolygons],
	view: luzinyView
});
