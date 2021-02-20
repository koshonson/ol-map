import { tooltipHandler } from './tooltipHandler';
import { featureFocusHandler } from './featureFocusHandler';

export const triggerPointermove = ({ event, map, tooltip }) => {
	tooltipHandler({ event, map, tooltip });
	featureFocusHandler({ event, map });
};
