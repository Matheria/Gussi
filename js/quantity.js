const minusBtn = document.querySelector('.quantity__btn_minus');
const plusBtn = document.querySelector('.quantity__btn_plus');
const quantityNumber = document.querySelector('.quantity__number');
const cost = document.querySelector('.cost__number');

const PRICE = 120;

const getCosts = (count) => `${count*PRICE}`;

const getQuantity = () => {
  plusBtn.addEventListener('click', () => {
    quantityNumber.value++;
    cost.textContent = getCosts(quantityNumber.value);
    if (quantityNumber.value > '1') {
      minusBtn.removeAttribute('disabled');
    }
  });
  minusBtn.addEventListener('click', () => {
    if (quantityNumber.value > '1') {
      minusBtn.removeAttribute('disabled');
      quantityNumber.value--;
      cost.textContent = getCosts(quantityNumber.value);
    } else {
      minusBtn.setAttribute('disabled', 'disabled');
    }
  });
};

getQuantity();