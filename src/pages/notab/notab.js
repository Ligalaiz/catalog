import '@src/assets/styles/global/index.scss';

const handleClick = (e) => {
  const cookies = document.getElementById('cookies');

  if (e.target?.id === 'cookiesBtn') cookies.classList.remove('active');
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const handleLoad = () => {
  document.addEventListener('click', handleClick);
  document.addEventListener('submit', handleSubmit);
};

window.addEventListener('load', handleLoad);
