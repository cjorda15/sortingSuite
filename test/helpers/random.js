function randomArr (num) {
  function random() {
    return Math.floor(Math.random()*100)
  }
  let arr = []

  for (let i=0; i<num;i++) {
    arr.push(random())

  }
  return arr
}

module.exports = randomArr
