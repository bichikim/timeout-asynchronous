export default (
  time: number,
  callback?: (...args: any[]) => any,
  payload: any[] = [],
): Promise<void> => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(callback && callback(...payload))
    }, time)
  })
}
