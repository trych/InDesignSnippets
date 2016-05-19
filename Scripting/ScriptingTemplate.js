//DESCRIPTION:Brief description of the script.
#target indesign

var undo = true; // change to false, if the script does not need an undo mode (like export scripts, etc.)

if(undo){
  app.doScript(init, ScriptLanguage.JAVASCRIPT ,undefined, UndoModes.ENTIRE_SCRIPT, "Script Name");
} else{
  init();
}


function main (doc) {
  if(!checkRequirements(doc)) return;
  setupPresets(doc);

  // the main script goes here
}

//------------------------------------------------------------------------------
// script functions
//------------------------------------------------------------------------------

// all functions that are not init functions or the main function go here

//------------------------------------------------------------------------------
// init functions
//------------------------------------------------------------------------------

function init () {
  var doc = app.documents.length ? app.activeDocument : undefined;
  var userSettings = getUserSettings(doc);

  try {

    main(doc);

  } catch (e) {

    var errorAlert = (
      e.name + "\n" +
      "Message: " + e.message + "\n" +
      "File: " + e.fileName + "\n" +
      "Line: " + e.line
      //+ "\n\nAdditional error message."
      );

    alert(errorAlert);

  } finally {
    resetUserSettings(doc, userSettings);
  }
}

function checkRequirements(doc) {
  // e.g. if a doc is required
  if(!doc) {
    alert("Error\nOpen a document first and try again.");
    return false;
  }

  // add all other necessary requirements in the same pattern

  // only if all requirements are met the function will return true
  return true;
}

function getUserSettings(doc) {
  var userSettings = {};

  userSettings.userInteractionLevel = app.scriptPreferences.userInteractionLevel;
  userSettings.initialDoc = false;

  if(doc){
    userSettings.initialDoc = true;
    userSettings.hMUnits = doc.viewPreferences.horizontalMeasurementUnits;
    userSettings.vMUnits = doc.viewPreferences.verticalMeasurementUnits;
    userSettings.rulerOrigin = doc.viewPreferences.rulerOrigin;
    userSettings.zeroPoint = doc.zeroPoint;
    userSettings.tRPoint = doc.layoutWindows[0].transformReferencePoint;
  }

  return userSettings;
}

function resetUserSettings(doc, userSettings) {
  app.scriptPreferences.userInteractionLevel = userSettings.userInteractionLevel;

  if(userSettings.initialDoc){
    doc.viewPreferences.horizontalMeasurementUnits = userSettings.hMUnits;
    doc.viewPreferences.verticalMeasurementUnits = userSettings.vMUnits;
    doc.viewPreferences.rulerOrigin = userSettings.rulerOrigin;
    doc.zeroPoint = userSettings.zeroPoint;
    doc.layoutWindows[0].transformReferencePoint = userSettings.tRPoint;
  }
}

function setupPresets(doc) {
  doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
  // set up more preferences if needed
}