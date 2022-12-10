/* eslint-disable no-alert */
import WidgetCtrl from './WidgetCtrl';
import validGeolacation from './valid';

const textAr = document.querySelector('.inp_text');
const formEr = document.querySelector('.form_error');
const btnCancel = document.querySelector('.cancel');
const btnOk = document.querySelector('.ok');
const inpGeoloc = document.querySelector('.inp_geoloc');

textAr.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const itemWidget = new WidgetCtrl(textAr.value, lat, long);
        itemWidget.renderItem();
        textAr.value = '';
      }, () => {
        formEr.style.display = 'block';
      }, { enableHighAccuracy: true });
    }
  }
});

btnCancel.addEventListener('click', (event) => {
  event.preventDefault();
  formEr.style.display = 'none';
  inpGeoloc.value = '';
});

function checkGeolacation() {
  try {
    if (validGeolacation(inpGeoloc.value)) {
      const geolocUser = inpGeoloc.value.replace(/\s/g, '').replace(/\[/g, '').replace(/\]/g, '').split(',');
      const itemWidget = new WidgetCtrl(textAr.value, geolocUser[0], geolocUser[1]);
      itemWidget.renderItem();
      textAr.value = '';
      formEr.style.display = 'none';
      inpGeoloc.value = '';
    } else {
      throw new Error('Ошибка валидации!');
    }
  } catch (err) {
    alert('Ошибка валидации');
  }
}

btnOk.addEventListener('click', (event) => {
  event.preventDefault();
  checkGeolacation();
});

inpGeoloc.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    checkGeolacation();
  }
});
