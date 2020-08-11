/* eslint-disable no-console */
const onMouseOver = (event) => {
  const cheeses = './cheeses-medium.jpg';
  const wines = './bottles-medium.jpg';

  console.log(event.target);
  const navFocused = event.target;
  const header = document.querySelector('.mainHeader');
  console.log(header);

  if (navFocused.classList.contains('cheese')) {
    header.style.backgroundImage = `url(${cheeses})`;
  }
  else if (navFocused.classList.contains('wine')) {
    header.style.backgroundImage = `url(${wines})`;
  }
};

export default onMouseOver;
