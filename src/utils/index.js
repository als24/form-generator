/*
 * @Author: chenghao
 * @Date: 2019-11-12 10:09:52
 * @Last Modified by:   chenghao
 * @Last Modified time: 2019-11-12 10:09:52
 * @Desc: 工具函数
 */
/**
 * 深拷贝object
 * @param {*} obj 对象
 */
export const deepClone = obj => {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}
