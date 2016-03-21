#target InDesign

// Collects all unique characters of a string into a new string.
// Needed this in a script to find the tallest character in a text.

var testString = "Alia es dolore lat inverovit la dolorat faciat et omnimi, que ea is doluptae laudaest plaute coressin evero quost ex es arcimus.";
var collectString = "";

for (var i = 0; i < testString.length; i += 1) {
  if (collectString.indexOf(testString[i]) === -1) {
    collectString += testString[i];
  }
};

alert(collectString); // alerts "Alia esdortnvfcm,qupx." for the test string