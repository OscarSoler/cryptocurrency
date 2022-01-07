module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
		// cy: true,
	},
	extends: [
		"plugin:react/recommended",
		"standard",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	globals: {
		JSX: true,
		cy: true,
	},

	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": ["error"],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"react/jsx-sort-props": [
			"warn",
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
		camelcase: "off",
	},
}
