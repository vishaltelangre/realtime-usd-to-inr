(function() {
  // Variable declaration

  // Require modules
  converter = require('./converter');
        
  // Call to converter
  converter.convert(parseInt(process.argv[2] || 1));
}).call(this)
