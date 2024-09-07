const getId = () => Math.random().toString(34).substring(2).toUpperCase()
const getLargeId = () => `${getId()}-${getId()}-${getId()}`

export {
    getId,
    getLargeId
}