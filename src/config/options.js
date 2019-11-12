/*
 * @Author: chenghao
 * @Date: 2019-11-12 17:12:54
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-11-12 18:01:56
 * @Desc: 示例组件中需要的占位较大的不太方便写在json配置中的prop
 */

export const generateData = () => {
  console.log(9999)
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0
    })
  }
  console.log(data)
  return data
}
