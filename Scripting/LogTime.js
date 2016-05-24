#target InDesign

// functions to start timers and take time
// timers can be named, so several timers can run at the same time

var time = {};

// testing  ----------------------------------------------------------------------
$.writeln("Started script @ " + timeStamp() + "\n");

startTimer();         // --> starts the main timer
startTimer("foo");    // --> starts a timer named 'foo'
startTimer(1);        // --> starts a timer named '1'

$.writeln(" ");

takeTime();           // --> takes time of main timer and logs it to console
takeTime("foo");      // --> takes time of timer 'foo' and logs it to console
takeTime(1);          // --> takes time of timer '1' and logs it to console
takeTime(2);          // --> logs error to console, since no timer '2' was created yet

$.writeln(" ");

startTimer(2);        // --> starts a timer named '2'
takeTime(2);          // --> takes time of timer '2' and logs it to console

$.writeln(" ");

takeTime(0, true);    // --> takes time of main timer, logs it, and restarts the main timer
takeTime(1, true, 1); // --> takes time of timer '1', logs it and restarts timer '1'
takeTime(2, true, 3); // --> takes time of timer '2', logs it and starts a timer '3'

$.writeln(" ");

takeTime();           // --> takes time of restarted main timer
takeTime(1);          // --> takes time of restarted timer '1'
takeTime(2);          // --> takes time of timer '2'
takeTime(3);          // --> takes time of timer '3'

// starts a new timer or restarts a timer, if it already existed
// timerName optional; if no timerName is set, the main timer will be started
function startTimer(timerName) {
  if(!timerName) {
    time.mainTimer = Date.now();
    $.writeln("Main timer started  @  " + timeStamp());
    return time.mainTimer;
  }
  timerName = timerName.toString();
  time[timerName] = Date.now();
  $.writeln("Timer '" + timerName + "' started  @  " + timeStamp());
  return time[timerName];
}

// if timerName has no value or a falsy value, the time of the main timer will be taken
// startNewTimer will start another timer right away, newTimerName can be used to give it a timerName as well
function takeTime(timerName, startNewTimer, newTimerName) {
  var startTime = timerName ? time[timerName] : time.mainTimer;
  if(!startTime){
    $.writeln(timerName ? "A timer named '" + timerName + "'' has not been started yet." : "Main timer has not been started yet.");
    if(startNewTimer) startTimer(newTimerName);
    return;
  }
  var elapsedTime = ((Date.now() - startTime)/ 1000).toPrecision(3);
  $.writeln(elapsedTime + " seconds  " + (timerName ? "(timer '" + timerName + "')" : "(main timer)"));
  if(startNewTimer) startTimer(newTimerName);
  return elapsedTime;
}

// returns a string of the current time, or of a time provided in milliseconds
function timeStamp(milliseconds) {
  dt = milliseconds ? new Date(milliseconds) : new Date();
  var dtf = dt.getFullYear() + "-" +
  ('0' + (dt.getMonth() + 1)).slice(-2) + "-" +
  ('0' + dt.getDate()).slice(-2) + " " +
  ('0' + dt.getHours()).slice(-2) + ":" +
  ('0' + dt.getMinutes()).slice(-2) + ":" +
  ('0' + dt.getSeconds()).slice(-2) + "." +
  ('00' + dt.getMilliseconds()).slice(-3);
  return dtf;
}