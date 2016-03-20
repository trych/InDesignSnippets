// fits the firstLineIndent of a paragraph to the end of the previous paragraph
// as asked here: https://graphicdesign.stackexchange.com/questions/62916/

#target InDesign

var defaultIndent = 5;

// Checks if a text frame with 2 or more paragraphs was selected.
if (app.selection.length < 1 || !(app.selection[0].parentStory.paragraphs.length > 1)) {
  alert("Error\nSelect a text frame with at least 2 paragraphs and try again.");
  exit();
}

var story = app.selection[0].parentStory;
var paragraphs = story.paragraphs;

// loops through all paragraphs, checks the position of the last letter of the previous
// paragraph and sets the indent of the first line of the current paragraph accordingly.
for (var i = 1; i < paragraphs.length; i += 1) {

  // leaves the script, if the paragraph has moved out of the last text frame in the meantime.
  if(paragraphs[i].parentTextFrames.length === 0){
    break;
  }

  // needs to save the second last char, as \r also counts as one and has a width
  var prevChar = paragraphs[i - 1].characters[-2];
  var leftEdge = paragraphs[i].parentTextFrames[0].geometricBounds[1];
  var indentPos = prevChar.endHorizontalOffset - leftEdge;

  paragraphs[i].firstLineIndent = indentPos;

  // if the paragraph has moved out of the textframe it means that the first word
  // does not fit in the first line and indent will be reset to the default value.
  if(paragraphs[i].parentTextFrames.length === 0){
    paragraphs[i].firstLineIndent = defaultIndent;
  }
};