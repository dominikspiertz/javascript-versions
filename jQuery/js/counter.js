var REDUCE_COUNTER_BUTTON_ID = "#counterReduce";
var INCREASE_COUNTER_BUTTON_ID = "#counterIncrease";

var CURRENT_COUNTER_ID = "#currentCounter";
var CURRENT_COUNTER_ELEMENT = $( CURRENT_COUNTER_ID );

/**
 * @description On function call, we bind actions to the buttons to add or reduce the current counter.
 */
function initializeCounter() { // eslint-disable-line no-unused-vars
  $( REDUCE_COUNTER_BUTTON_ID ).on( "click", onCounterButtonClicked );
  $( INCREASE_COUNTER_BUTTON_ID ).on( "click", onCounterButtonClicked );
}

/**
 * @description Gets triggered if someone clicks on the reduce or increase counter button.
 * @param {event} event - event of triggered element.
 */
function onCounterButtonClicked( event ) {
  var TARGET = event.target;

  if ( TARGET.id === REDUCE_COUNTER_BUTTON_ID.substr( 1 ) ) {
    CURRENT_COUNTER_ELEMENT.text( getCurrentCounterValue() - 1 );
  } else if ( TARGET.id === INCREASE_COUNTER_BUTTON_ID.substr( 1 ) ) {
    CURRENT_COUNTER_ELEMENT.text( getCurrentCounterValue() + 1 );
  }
}

/**
 * @description Returns current html text, which gets casted into a number and returned.
 * @return {number} - Current counter value.
 */
function getCurrentCounterValue() {
  return Number( CURRENT_COUNTER_ELEMENT.text() );
}
