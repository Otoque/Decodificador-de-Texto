function encrypt() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case 'e':
                outputText += 'enter';
                break;
            case 'i':
                outputText += 'imes';
                break;
            case 'a':
                outputText += 'ai';
                break;
            case 'o':
                outputText += 'ober';
                break;
            case 'u':
                outputText += 'ufat';
                break;
            default:
                outputText += inputText[i];
        }
    }

    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';

    outputText = inputText.replaceAll('enter', 'e')
                           .replaceAll('imes', 'i')
                           .replaceAll('ai', 'a')
                           .replaceAll('ober', 'o')
                           .replaceAll('ufat', 'u');

    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Copied to clipboard: ' + outputText.value);
}