// this handler displays/hides a tooltip onmouseenter/onmouseleave a vector feature in map
import { getFeatureFromEvent, hideElement, clearElementText } from '../utils';

// helper function that recieves [key] and [value] parameters
// and return a piece of HTML, as follows :
// '<div class="tooltip-text"><span>[key]: </span>[value}</div>'

// both [key] and [value] are expected to be strings or numbers
// both [key] and [value] are expected to be sourced from properties of a vector feature
const addTooltipContentLine = (key, value) => {
	// outer div
	const div = document.createElement('div');
	div.classList.add('tooltip-text');
	// inner span
	const span = document.createElement('span');
	span.textContent = `${key}: `;
	// put it all together and return the element
	div.appendChild(span);
	div.innerHTML += value;
	return div;
};

// tooltip rendering function
const renderTooltip = options => {
	const { tooltip, ttElement, coordinate, content } = options;
	tooltip.setPosition(coordinate);
	content.forEach(({ value, label }) => {
		ttElement.appendChild(addTooltipContentLine(label, value));
	});
	ttElement.style.opacity = 1;
};

// exported event handler that holds the logic
// // try to get a feature on current pointer position
// // if there is a feature render the tooltip displaying its attributes
// // if not and the tooltip is currently visible, hide it
export const tooltipHandler = ({ event, map, tooltip }) => {
	const { originalEvent, coordinate } = event;
	const feature = getFeatureFromEvent(originalEvent, map);

	const ttElement = tooltip.getElement();
	clearElementText(ttElement);

	if (feature) {
		const { id, pole } = feature.getProperties();
		renderTooltip({
			coordinate,
			tooltip,
			ttElement,
			content: [
				{ value: id, label: 'ID' },
				{ value: pole, label: 'Název' }
			]
		});
	}
	if (!feature && +ttElement.style.opacity) {
		hideElement(ttElement);
	}
};
