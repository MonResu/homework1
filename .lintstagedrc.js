export default {
    '*.{ts,tsx}': [
        () => 'npm run ts-check', // Проверка типов для всего проекта
        'npm run lint', // Линтинг закоммиченных ts файлов
    ],
    '*.{js,jsx}': [
        'npm run lint',
    ],
    '*': ['npm run format'], // Форматирование всех закоммиченных файлов
};