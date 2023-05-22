const productionError =
    process.env.NODE_ENV === 'production' ? 'error' : 'warn';
module.exports = {
    root: true,
    plugins: ['import'],
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier'
    ],
    rules: {
        // vue
        'vue/multi-word-component-names': 'off',

        // eslint http://eslint.cn/docs/rules/
        'no-debugger': productionError,
        'no-console': productionError,
        eqeqeq: ['error', 'always'],

        // prettier https://prettier.io/docs/en/options.html
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                arrowParens: 'always',
                semi: true,
                trailingComma: 'all',
            },
        ],
        // import https://github.com/import-js/eslint-plugin-import#rules
        'import/no-useless-path-segments': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    ['type'],
                    ['internal', 'parent', 'sibling', 'index'],
                ],
                'newlines-between': 'always',
                alphabetize: { order: 'asc' },
            },
        ],
        'import/newline-after-import': 'error',
    }
};
