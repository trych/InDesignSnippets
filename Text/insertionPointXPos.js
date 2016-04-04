#target indesign

// finds and alerts the x-position of the current insertion point

if (app.selection[0].constructor.name == "InsertionPoint") {
  $.writeln("got it IP");
  var ip = app.selection[0];
  var story = app.selection[0].parentStory;

  var charBehind = story.characters[(ip.index)];
  var pos = charBehind.horizontalOffset;

  alert("The insertion point is at x-position " + pos + ".");
}