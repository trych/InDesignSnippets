#target InDesign

// calculates the width of the currently active spread
// works for spreads with any number of pages

var spreadWidth = app.activeWindow.activeSpread.pages[-1].bounds[3] - app.activeWindow.activeSpread.pages[0].bounds[1];

alert("spreadWidth: " + spreadWidth);