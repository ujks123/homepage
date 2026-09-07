// 모달 기본 동작
document.addEventListener('click', (e) => {
  const modalOpenBtn = e.target.closest('[data-modal-open]');
  const modalCloseBtn = e.target.closest('[data-modal-close]');

  if (modalOpenBtn) {
    const modalName = modalOpenBtn.dataset.modalOpen;
    const modal = document.querySelector(`[data-modal="${modalName}"]`);

    modal?.classList.add('isOpen');
    document.body.classList.add('isModalOpen');
  }

  if (modalCloseBtn) {
    const modal = modalCloseBtn.closest('.modal');
    modal?.classList.remove('isOpen');
    document.body.classList.remove('isModalOpen');
  }
});