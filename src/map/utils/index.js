// return a feature from an [event object] and a [map object]
export const getFeatureFromEvent = (event, map) => {
	const px = map.getEventPixel(event);
	const [feature] = map.getFeaturesAtPixel(px);
	return feature;
};

export const hideElement = element => {
	element.style.opacity = 0;
};

export const clearElementText = element => {
	element.textContent = '';
};
