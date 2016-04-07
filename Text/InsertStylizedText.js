#target indesign

// finds and alerts the x-position of the current insertion point
// with elements from http://graphicdesign.stackexchange.com/a/48426/21771

var insertString = "Inserted & stylized.";
var insertCharacterStyle = app.activeDocument.characterStyles.item('InsertedText');

if (app.selection[0].constructor.name !== "InsertionPoint") {
  alert("Error\nMake sure have an active text cursor in a text frame and try again.");
  exit();
}

var parentFrame = app.selection[0].parentTextFrames[0];

var styleStartIndex = app.selection[0].index;
var styleEndIndex = styleStartIndex + insertString.length - 1;

app.selection[0].contents = insertString;
parentFrame.characters.itemByRange(styleStartIndex, styleEndIndex).appliedCharacterStyle = insertCharacterStyle;