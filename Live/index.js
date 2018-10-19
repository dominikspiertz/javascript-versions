/**
 * @description returns an Id
 * @returns {string} - Id for working with.
 */
function getReduceButtonId() {
  return 'counterReduce';
}

function getIncreaseButtonId() {
  return 'counterIncrease';
}

function onDOMContentLoaded() {
  var reduceButton = getReduceButtonId();
  var increaseButton = getIncreaseButtonId();

  document
    .getElementById(reduceButton)
    .addEventListener('click', onButtonClicked);

  document
    .getElementById(increaseButton)
    .addEventListener('click', onButtonClicked);
}

/**
 * @param event {event} - we need to to target
 */
function onButtonClicked(event) {
  var currentCounter = 'currentCounter';
  var currentCounterElement = document.getElementById(currentCounter);
  var currentCounterNumber = Number(currentCounterElement.innerHTML);
  var reduceButton = getReduceButtonId();
  var increaseButton = getIncreaseButtonId();

  if (event.target.id === reduceButton && currentCounterNumber > 0) {
    currentCounterElement.innerHTML = currentCounterNumber - 1
  } else if (event.target.id === increaseButton) {
    currentCounterElement.innerHTML = currentCounterNumber + 1
  }

  currentCounterElement.classList.add("growing-number");
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
