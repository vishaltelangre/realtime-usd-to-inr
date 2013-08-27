exports.convert = function(dollars){
  var http = require("http");
  var cheerio = require("cheerio");
  // console.log(http + " " + cheerio);
  var url = "http://www.google.com/finance/converter?a=" + dollars + "&from=USD&to=INR";
    
  // Utility function that downloads a URL and invokes
  // callback with the data.
  function fetch(url, callback) {
    http.get(url, function(res) {
      var data = "";
      res.on('data', function (chunk) {
        data += chunk;});
      res.on("end", function() {
        callback(data);
      });
    }).on("error", function() {
      callback(null);
    });
  }               
  
  fetch(url, function(data) {
    if (data) {
      var $ = cheerio.load(data);
      var result = $("#currency_converter_result span.bld").text();
      result = parseFloat(result.split(" INR")[0]);
      console.log("$" + dollars + " = ₹ "+  result);
    }
  });       
}
