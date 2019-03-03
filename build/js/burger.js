'use strict';

(function(){
  const ESQ = 27;
  const burger= document.querySelector('.menu__burger');

  const showModal = function () {
    burger.classList.remove('menu__burger--collapsed');
    burger.classList.add('menu__burger--revealed');
  }
  const hideModal = function () {
    burger.classList.remove('menu__burger--revealed');
    burger.classList.add('menu__burger--collapsed');
  }

  const toggleModal = function () {
    burger.classList.contains('menu__burger--collapsed') ? showModal() : hideModal();
  }

  burger.addEventListener('click', toggleModal);

  window.addEventListener('keydown', (evt) => {
    if(evt.keyCode === ESQ) {
      evt.preventDefault();
      hideModal();
    }
  });
})();
