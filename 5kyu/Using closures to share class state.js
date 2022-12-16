var Cat = (function () {
  const catsCashe = []

  const constructor = function (name, weight) {
    if (!name || !weight) throw Error('Both `name` and `weight` should be provided')
    Object.defineProperty(this, 'name', { get: () => name })
    Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
    catsCashe.push(this)
  }

  constructor.averageWeight = () => catsCashe.reduce((acc, cat) => (acc + cat.weight), 0) / catsCashe.length

  return constructor
}())

// or averageWeight= total weight / number cats
