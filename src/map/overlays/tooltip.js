import { Overlay } from 'ol';

export const tooltip = new Overlay({
	element: document.getElementById('tooltip'),
	positioning: 'bottom-left',
	offset: [5, -5]
});
