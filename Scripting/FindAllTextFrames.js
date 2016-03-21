#target InDesign

// finds all textFrames in the active document.
// doing it like this is necessary, because app.activeDocument.textFrames does *not* find textFrames within groups or within other textFrames etc.

var allItems = app.activeDocument.allPageItems;
var tfCounter = 0;

for (var i = 0; i < allItems.length; i += 1) {
  if(allItems[i] instanceof TextFrame){
    tfCounter += 1;
  }
};

alert("Found " +  tfCounter + " text frames.");