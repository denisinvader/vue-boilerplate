require('./styles/main.scss');

(() => {
  const rootElement = document.getElementById('root');

  rootElement.textContent = 'Text has been changed';
  console.log(rootElement);
})();
