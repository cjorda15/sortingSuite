function randomLetter(num) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for ( var i=0; i < num; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

module.exports = randomLetter
