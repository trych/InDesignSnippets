#target indesign

// finds and alerts the x-position of the current insertion point
// with elements from http://graphicdesign.stackexchange.com/a/48426/21771

if (app.selection[0].constructor.name === "InsertionPoint") {
  var ip = app.selection[0];
  var story = ip.parentStory;

  var charBehind = story.characters[(ip.index)];
  var pos = charBehind.horizontalOffset;

  alert("The insertion point is at x-position " + pos + ".");
}