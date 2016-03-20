#target InDesign
#targetengine "removeRecentItems"

// Adds a menu entry in InDesign's file menu to remove all items from the "Open Recent" list.
// This is supposed to be a startup script, to use it move it in InDesign's 'startup scripts' folder.

var menuName = "Remove Recent";
var removeAction = app.scriptMenuActions.add(menuName);

removeAction.eventListeners.add("onInvoke", removeRecentItems);
removeAction.eventListeners.add("beforeDisplay", recentAvailable);

var mainMenu = app.menus.itemByName("$ID/Main");
var fileMenu = mainMenu.submenus.itemByName("$ID/FileDestinationPanel");

if (fileMenu.submenus.itemByName("$ID/Open &Recent").isValid && (!fileMenu.menuItems.itemByName(menuName).isValid)) {
  fileMenu.menuItems.add(removeAction, LocationOptions.AFTER, fileMenu.submenus.itemByName("$ID/Open &Recent"));
}

function removeRecentItems () {
  var userOR = app.generalPreferences.openRecentLength;
  app.generalPreferences.openRecentLength = 0;
  app.generalPreferences.openRecentLength = userOR;
  return;
}

function recentAvailable(event) {
  var action = event.parent;
  if (fileMenu.submenus.itemByName("$ID/Open &Recent").isValid) {
    action.enabled = true;
  } else {
    action.enabled = false;
  }
  return;
}