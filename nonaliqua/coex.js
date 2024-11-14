function checkInit() {
  // Check if initialization is valid
  if (!EB.isInitialized()) {
    EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit);
    // This code checks whether the EB object is initialized,
    // if the object is initialized, it launches the function "onInit",
    // otherwise "EB_INITIALIZED" event.
  } else {
    onInit();
  }
}

function onInit() {
  // Place your code to start the ad flow here
}

window.addEventListener('load', checkInit);
