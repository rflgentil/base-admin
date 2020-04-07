module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        indent: [1, 4, { SwitchCase: 1 }],
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-export': 'off',
        'no-console': ['error', { allow: ['tron'] }],
        'react/jsx-props-no-spreading': 'off',
        'object-curly-newline': [
            'error',
            {
                ImportDeclaration: { minProperties: 10 },
            },
        ],
        'no-param-reassign': ['error', { props: false }],
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
};
