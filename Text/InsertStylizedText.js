#target indesign

// inserts a string at the insertion point of a text frame and styles it with a character style
// (in response to a question asked at http://graphicdesign.stackexchange.com/q/68712/21771)

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