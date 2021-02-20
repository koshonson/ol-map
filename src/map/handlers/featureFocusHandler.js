import { getFeatureFromEvent } from '../utils';
import { baseStyle, focusStyle } from '../styles';

// sort of a state-ish object that holds reference to currently focused (mouseover-ed) feature
// used for style revert when feature is focused no longer
let previousFeature = {
	feature: null,
	value: null
};

// helper method to update the [previousFeature] object
const setPreviousFeature = (feature, value) => {
	if (feature) {
		previousFeature.feature = feature;
		previousFeature.value = value;
	} else {
		previousFeature.feature = null;
		previousFeature.value = null;
	}
	return previousFeature;
};

// exported event handler that holds the logic
// try to get a feature on current pointer position
// if there was a [previousFeature] AND
// // if it is different than the [current] one, SET its style to [baseStyle]
// if there is a [current] feature AND
// // if it is different than the [previousFeature], SET its style to [focusStyle] AND
// // HOLDS its REFERENCE in the updated [previousFeature] object
// if there is no [current] feature AND
// // if there was a [previousFeature], null the [previousFeature]
export const featureFocusHandler = ({ event, map }) => {
	const { originalEvent } = event;
	const { feature: previous, value: previousValue } = previousFeature;
	const current = getFeatureFromEvent(originalEvent, map);

	if (previous && previous !== current) {
		previous.setStyle(baseStyle(previousValue));
	}
	if (current && current !== previous) {
		const { hodnota: value } = current.getProperties();
		current.setStyle(focusStyle(value));
		setPreviousFeature(current, value);
	}
	if (!current && previous) {
		setPreviousFeature(null, null);
	}
};
