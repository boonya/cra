module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	globals: {
		NODE_ENV: true,
		APP_PREFIX: true,
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'bluedrop',
		'bluedrop/config/node',
		'bluedrop/config/babel',
		'bluedrop/config/react',
		'plugin:compat/recommended',
		'plugin:storybook/recommended',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
	],
	plugins: [
		'compat',
		'testing-library',
		'jest-dom',
	],
	settings: {
		react: {
			version: '18.2',
		},
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		'import/no-unassigned-import': ['warn', {allow: ['**/*.css']}],
		/**
		 * If you are using eslint-plugin-react, the react/jsx-uses-react and react/react-in-jsx-scope
		 * rules are no longer necessary and can be turned off or removed.
		 *
		 * Read more: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
		 */
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: ['src/**'],
			rules: {
				'jsx-a11y/accessible-emoji': 'warn',
			},
		},
		{
			files: ['.storybook/public/mockServiceWorker.js'],
			rules: {
				'eslint-comments/disable-enable-pair': 'off',
				'eslint-comments/no-unlimited-disable': 'off',
			},
		},
		{
			files: ['test/**/*.js'],
			rules: {
				'import/no-unassigned-import': 'off',
			},
		},
		{
			files: [
				'**/*.stories.*',
				'**/*.test.js',
				'.storybook/**',
				'test/**',
			],
			rules: {
				'import/no-anonymous-default-export': 'off',
				'react/no-multi-comp': 'off',
				'react/prop-types': 'off',
				'react/display-name': 'off',
			},
		},
		{
			/**
			 * We need to suppress rules below for such files,
			 * because here we also check for import/no-unresolved rule
			 */
			files: [
				'src/**/*.js',
				'.storybook/**/*.js',
				'test/**/*.js',
			],
			rules: {
				'node/no-missing-import': 'off',
				'node/no-missing-require': 'off',
			},
		},
	],
};
