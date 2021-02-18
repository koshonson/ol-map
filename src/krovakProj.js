import proj4 from 'proj4';
import { get as getProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';

const krovakDef = {
	code: 'EPSG:5514',
	extent: [-925000, -1444353.536, -400646.464, -920000],
	def: `+proj=krovak
          +lat_0=49.5
          +lon_0=24.83333333333333
          +alpha=30.28813972222222
          +k=0.9999
          +x_0=0
          +y_0=0
          +ellps=bessel
          +towgs84=570.8,85.7,462.8,4.998,1.587,5.261,3.56
          +units=m
          +no_defs`
};

proj4.defs(krovakDef.code, krovakDef.def);
register(proj4);
const krovak = getProjection(krovakDef.code);
krovak.setExtent(krovakDef.extent);
