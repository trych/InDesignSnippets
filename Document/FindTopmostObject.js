#target InDesign

// finds the hierarchically topmost parent object from any kind of single selection
// if you use this and find a scenario where this fails, please let me know, as I am not sure, if this works for all cases

if(app.selection.length !== 1){
  alert("Wrong selection\nSelect exactly one item or place the text cursor and try again.");
  exit();
}

var topMostObject = findTopMostObject(app.selection[0]);
alert("The topmost object is a " + topMostObject.constructor.name + ".");

function findTopMostObject(object) {
  while(true){
    var p = object.parent;
    var pc = p.constructor.name;

    // if the selection is a text object its parent will be a story
    if(pc === 'Story'){
      if(object.parentTextFrames.length){
        object = object.parentTextFrames[0];
      } else {
        // if some text in the overflow is selected, the last text container is considered the parent object
        object = p.textContainers[p.textContainers.length - 1];
      }
    } else {
      // if the parent is a spread, the object is a page item at the top level
      if(pc === 'Spread') return object;
      object = p;
    }
  }
}