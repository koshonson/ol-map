import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { krovakDef } from '../projections/projectionsDef';

export const layerWmsZm25 = new TileLayer({
	extent: krovakDef.extent,
	source: new TileWMS({
		url: 'https://geoportal.cuzk.cz/WMS_ZM25_PUB/WMService.aspx',
		params: { LAYERS: 'GR_ZM25', TILED: true, FORMAT: 'image/png' }
	})
});
