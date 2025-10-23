function getPointsScored(elapsedTime) {
  if (elapsedTime < 30) {
    return 100
  } else if (elapsedTime < 60) {
    return 75
  } else {
    return 25
  }
}

const points = getPointsScored(61)

console.log(points)