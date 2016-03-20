#target InDesign

var userOR = app.generalPreferences.openRecentLength;

app.generalPreferences.openRecentLength = 0;

app.generalPreferences.openRecentLength = userOR;