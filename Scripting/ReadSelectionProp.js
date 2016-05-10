#target InDesign

// alerts the value of a given property of the first selected object

var prop = "verticalScale";

if(app.selection.length){
  alert("Selected object property '" + prop + "': " + app.selection[0][prop]);
}