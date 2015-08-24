var ojc = require("ojc").compile;
var oj = require("ojc/src/runtime");
var stripBOM = require('strip-bom');
var deasync = require("deasync");
var merge = require("merge");

// Saved oj state
var state;

// The actual evilkin
require.extensions[".oj"] = function OJ(module, filename) {
    // Compile!
    var ojContent=false;
    deasync(function(options, done){
        ojc(options, function(err, res){
            done();
            if(err) throw err;
            state = res.state;
            ojContent = res.code;
        });
    })(merge(require.oj, {
        files: [filename],
        state: state
    }));

    // Do THE thing!
    module._compile(ojContent, filename);
}
