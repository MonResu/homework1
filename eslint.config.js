import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            // Правило из задания: запрет присваивания константе
            'no-const-assign': 'error',
            // Остальные правила
            'curly': 'error',
            'simple-import-sort/imports': 'error',
        },
    },
    {
        ignores: ['dist', 'node_modules'],
    }
);