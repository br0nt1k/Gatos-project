(() => {
  const refs = {
    openModalBtn10: document.querySelector('[data-modal-open-10]'),
    openModalBtn65: document.querySelector('[data-modal-open-65]'),
    openModalBtn80: document.querySelector('[data-modal-open-80]'),

    closeModalBtn10: document.querySelector('[data-modal-close-10]'),
    closeModalBtn65: document.querySelector('[data-modal-close-65]'),
    closeModalBtn80: document.querySelector('[data-modal-close-80]'),

    modal10: document.querySelector('[data-modal-10]'),
    modal65: document.querySelector('[data-modal-65]'),
    modal80: document.querySelector('[data-modal-80]'),
  };

  refs.openModalBtn10.addEventListener('click', toggleModal10);
  refs.openModalBtn65.addEventListener('click', toggleModal65);
  refs.openModalBtn80.addEventListener('click', toggleModal80);

  refs.closeModalBtn10.addEventListener('click', toggleModal10);
  refs.closeModalBtn65.addEventListener('click', toggleModal65);
  refs.closeModalBtn80.addEventListener('click', toggleModal80);

  function toggleModal10() {
    refs.modal10.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }

  function toggleModal65() {
    refs.modal65.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }

  function toggleModal80() {
    refs.modal80.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();
