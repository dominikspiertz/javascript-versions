/**
 * @description If the dom content has been loaded we log a success message to the console.
 */
$( onDomContentLoaded );

/**
 * @description This function log a success message to the console and initialize counter events.
 */
function onDomContentLoaded() {
  console.log( "DOM fully loaded and parsed" );

  // initialize counter
  initializeCounter(); // eslint-disable-line no-undef
}