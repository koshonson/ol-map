// this handler toggles style of a vector feature in map onmouseenter/onmouseleave
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
// - get a feature on current pointer position
// - apply appropriate style if a feature was mouseentered/mouseleaved AND
// // if it actually changed (by compared to [previousFeature] object)
// - hold reference to the feature in [previousFeature] object OR
// // null it if there is no feature
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
