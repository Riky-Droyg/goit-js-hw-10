import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  console.log('delay:', delay);
  console.log('state:', state);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (state) {
        case 'fulfilled':
          iziToast.success({
            title: 'Error',
            message: 'Please choose a date in the future',
            position: 'topRight',
          });
          resolve('Success! Value passed to resolve function');
          break;
        case 'rejected':
          iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future',
            position: 'topRight',
          });
          reject('Error! Error passed to reject function');
          break;
      }
    }, delay);
  });
});
