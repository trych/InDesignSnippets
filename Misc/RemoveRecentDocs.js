#target InDesign

// InDesign script to remove all items from the "Open Recent" list

var userOR = app.generalPreferences.openRecentLength;

app.generalPreferences.openRecentLength = 0;
app.generalPreferences.openRecentLength = userOR;