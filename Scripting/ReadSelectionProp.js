#target InDesign

// check if an object with a certain name exists in the active document

var prop = "verticalScale";

if(app.selection.length){
  alert("Selected object property '" + prop + "': " + app.selection[0][prop]);
}