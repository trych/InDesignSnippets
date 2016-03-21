#target InDesign

// check if an object with a certain name exists in the active document

var objName = "myObject";
var obj = app.activeDocument.pageItems.item(objName);

if(obj.isValid){
  alert("The object " + obj.name + " exists.");
} else {
  // careful: obj.name could not be used here, as the object does not exist
  alert("An object named " + objName + " does not exist.");
}