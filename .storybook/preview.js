import withRouter from '@sb/decorators/withRouter';
import withStyle from '@sb/decorators/withStyle';
import withTheme, {getThemeToolbar} from '@sb/decorators/withTheme';

export const decorators = [
	withStyle(),
	withTheme(),
	withRouter(),
];

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(?:background|color)$/iu,
			date: /(?:date|dateTime|time)$/iu,
		},
	},
	backgrounds: {disable: true},
};

export const globalTypes = {
	theme: getThemeToolbar(),
};
