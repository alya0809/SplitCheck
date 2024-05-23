export function shakeForm() {
    const form = document.querySelector('.purple-border');
    form.classList.add('shake');
    setTimeout(() => {
      form.classList.remove('shake');
    }, 500);
}
