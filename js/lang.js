/**
 * Name: lang.js
 * This file is used to change language
 */

async function loadLanguageFile() {
    try {
      const response = await fetch('language.txt');
      const text = await response.text();
      const lines = text.split('\n');
      const languageData = {};
      lines.forEach(line => {
        const parts = line.split('=');
        if (parts.length === 2) {
          languageData[parts[0].trim()] = parts[1].trim();
        }
      });
      return languageData;
    } catch (error) {
      console.error('读取语言文件失败:', error);
      return {};
    }
}

  (async () => {
    const languageData = await loadLanguageFile();
    const elements = document.querySelectorAll('i18n');
    elements.forEach(element => {
      const i18nKey = element.getAttribute('i18n');
      const originalText = languageData[i18nKey] || element.textContent;
      const formattedText = stringFormat(originalText,);
      element.textContent = formattedText;
    });
  })();