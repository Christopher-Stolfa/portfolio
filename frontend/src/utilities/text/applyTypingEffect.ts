export function applyTypingEffect(
  elementId: string,
  text: string,
  typingSpeed: number = 100,
): Promise<void> {
  return new Promise((resolve) => {
    const element = document.getElementById(elementId);
    if (!element) {
      resolve();
      return;
    }

    element.innerHTML = '';
    const textContainer = document.createElement('span');
    const caret = document.createElement('span');
    caret.className = 'typing-caret';
    element.appendChild(textContainer);
    element.appendChild(caret);

    const chars = text.split('');
    let index = 0;

    const typeChars = () => {
      if (index < chars.length) {
        textContainer.textContent += chars[index++];
        setTimeout(typeChars, typingSpeed);
      } else {
        caret.remove();
        resolve();
      }
    };

    typeChars();
  });
}
