module.exports = {
	env: {
		// allows use of 'module'
		node: true,
		// allows use of 'fetch'
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:eslint-plugin-import/recommended',
		'plugin:eslint-plugin-import/typescript',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'react',
		'eslint-plugin-react-hooks',
		'simple-import-sort',
		'eslint-plugin-import',
	],
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/react-in-jsx-scope': 0,
		'react/jsx-uses-react': 0,
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 'error',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './',
			},
			'import/extensions': ['.js', '.jsx'],
		},
		react: {
			version: 'detect',
		},
	},
};
