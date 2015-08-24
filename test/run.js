// Load the module and require extension.
require("../");

// First try...
require("./first")();

// Try to re-require and see what happens?
require("./first")();

// Do an analysis!
require("./second");
