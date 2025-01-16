// theme.js

// Применение выбранной темы
function applyThemeSettings() {
    const theme = localStorage.getItem('theme') || 'dark'; // Получаем тему из localStorage (по умолчанию темная)
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}

// Сохранение выбранной темы
function saveThemeSettings() {
    const theme = document.getElementById('theme-select').value;
    localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
    applyThemeSettings(); // Применяем выбранную тему
}

// Загрузка настроек (при загрузке страницы)
function loadThemeSettings() {
    applyThemeSettings();
}

// Загружаем настройки при загрузке страницы
window.onload = loadThemeSettings;
// Функция для переключения видимости секций
function openSettings(settingType) {
    // Скрываем все разделы настроек
    const allSections = document.querySelectorAll('.settings-container');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Показываем нужный раздел в зависимости от settingType
    const targetSection = document.getElementById(settingType + '-settings');
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

// Функция для сохранения настроек темы
function saveThemeSettings() {
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }

    // Показываем сообщение об успешном сохранении
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Theme saved successfully!';
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}