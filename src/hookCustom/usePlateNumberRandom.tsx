function usePlateNumberRandom() {
  function letterRandom() {
    var sRnd = "";
    var sChrs = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (var i = 0; i < 2; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
  }
  function numberRandom() {
    var sRnd = "";
    var sChrs = "0123456789";
    for (var i = 0; i < 3; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
  }
  const firstLetters = letterRandom();
  const numbers = numberRandom();
  const secondLetters = letterRandom();

  const plateNumber = firstLetters + numbers + secondLetters;

  return plateNumber;
}

export default usePlateNumberRandom;
