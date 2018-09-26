const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// reducer
export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return 10
  }
}

//action creator
export function addGun() {
  return { type: ADD_GUN }
}
export function removeGun() {
  return { type: REMOVE_GUN }
}
// 采用中间件改变action的返回值为异步的对象
export function asynGun() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun())
    }, 2000)
  }
}
