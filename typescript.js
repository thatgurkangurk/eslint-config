/* pretty much copied from https://github.com/wesbos/eslint-config-wesbos/blob/master/typescript.js */
module.exports = {
	globals: {
		React: true,
		JSX: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// Layer in all the JS Rules
		'./.eslintrc.js',
	],
	// then add some extra good stuff for Typescript
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	// Then we add our own custom typescript rules
	rules: {
		// This allows us to use async function on addEventListener()
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': [
			'warn',
			{
				ignoreDeclarationMerge: true,
			},
		],
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		// this is covered by the typescript compiler, so we don't need it
		'no-undef': 'off',
		'no-shadow': 'off',
	},
	parserOptions: {
		project: './tsconfig.json',
	},
};
