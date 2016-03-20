#target InDesign

// this scripting template is useful for scripting outside of the ExtendScript editor, since it gives more meaningful error messages

function main () {

  try {

    // main code goes here

  } catch (e) {

    var errorAlert = (
      e.name + "\n" +
      "Message: " + e.message + "\n" +
      "File: " + filePathToFileName(e.fileName) + "\n" +
      "Line: " + e.line
      );

    alert(errorAlert);

  }
}

main();