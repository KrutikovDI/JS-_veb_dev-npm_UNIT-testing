export function showPowerLife(object) {
  if (object.health >= 50) {
    return 'healthy'
  } else if (15 <= object.health < 50) {
    return 'wounded'
  } else {
    return 'critical'
  }
}

export function sortsListObjects(oblectList) {
  oblectList.sort((a, b) => b.health - a.health)
  return oblectList
}
