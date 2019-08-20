export default <T = any>(
  time: number,
  callback?: (...args: any[]) => T,
  payload: any[] = [],
): Promise<T> => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(callback && callback(...payload))
    }, time)
  })
}
