var fs = require('fs')
  , fm = require('front-matter');
 
fs.readFile('./2017-08-20-travel-is-meaningful.md', 'utf8', function(err, data){
  if (err) {
      throw err
  };
 
  var content = fm(data);

  document.getElementById(content).innerHTML = content;
 
//   console.log(content);
});