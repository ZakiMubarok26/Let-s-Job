// script.js

const downloadButtons = document.querySelectorAll('.download-button');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const templateName = button.parentNode.querySelector('h3').textContent;
        const templateFile = `${templateName}.docx`; // ganti dengan file template yang sesuai
        const link = document.createElement('a');
        link.href = `templates/${templateFile}`;
        link.download = templateFile;
        link.click();
    });
});