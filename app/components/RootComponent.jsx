const React = require("react");
const ClockFace = require("./ClockFace");

/* the main page for the index route of this app */
const RootComponent = function() {
  return (
    <div>
      <h1>Hello!</h1>

      <p>Your app here</p>

      <ClockFace language="fr" />
    </div>
  );
}

module.exports = RootComponent;