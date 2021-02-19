import proj4 from 'proj4';
import { get as getProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import { krovakDef } from './projectionsDef';

proj4.defs(krovakDef.code, krovakDef.def);
register(proj4);
const krovak = getProjection(krovakDef.code);
krovak.setExtent(krovakDef.extent);
