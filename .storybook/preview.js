import {initialize, mswDecorator} from 'msw-storybook-addon';

// Initialize MSW
initialize({
	// serviceWorker: {url: `${APP_PREFIX}mockServiceWorker.js`},
	onUnhandledRequest: 'bypass',
});

export const decorators = [
	mswDecorator,
];

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(?:background|color)$/iu,
			date: /(?:date|dateTime|time)$/iu,
		},
	},
};
