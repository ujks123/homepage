document.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('.container');
  if (!container) return;

  const headerHTML = await fetch('/common/header.html').then(res => res.text());
  container.insertAdjacentHTML('afterbegin', headerHTML);

  const footerHTML = await fetch('/common/footer.html').then(res => res.text());
  container.insertAdjacentHTML('beforeend', footerHTML);

  import('/assets/js/header.js');
  import('/assets/js/footer.js');
});