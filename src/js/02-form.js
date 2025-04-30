const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', () => {
  const data = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const { email, message } = JSON.parse(saved);
    form.email.value = email || '';
    form.message.value = message || '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email, message } = form.elements;
  if (!email.value || !message.value) return alert('Wypełnij pola!');
  console.log({ email: email.value.trim(), message: message.value.trim() });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
