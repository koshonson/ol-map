const addTooltipContentLine = (key, value) => {
	const div = document.createElement('div');
	div.classList.add('tooltip-text');
	const span = document.createElement('span');
	span.textContent = `${key}: `;
	div.appendChild(span);
	div.innerHTML += value;
	return div;
};

export const tooltipHandler = (event, map, tooltip) => {
	const { originalEvent, coordinate } = event;
	const px = map.getEventPixel(originalEvent);
	const tt = tooltip.getElement();
	tt.textContent = '';
	const [feature] = map.getFeaturesAtPixel(px);
	if (!feature) {
		tt.style.opacity = 0;
	} else {
		const { id, pole } = feature.getProperties();
		tooltip.setPosition(coordinate);
		tt.style.opacity = 1;
		tt.appendChild(addTooltipContentLine('ID', id));
		tt.appendChild(addTooltipContentLine('Název', pole));
	}
};
