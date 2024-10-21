function betterThanAverage(classPoints, yourPoints) {
 const sum = classPoints.reduce((partialSum, a) => partialSum + a, 0);
  let classAverage = sum / classPoints.length
  if (yourPoints > classAverage){
    return true
  }else if(yourPoints < classAverage){
    return false
  }
}