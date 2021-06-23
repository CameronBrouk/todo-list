import * as H from './todoList.helpers'

const testObj = { a: 1, b: true, c: 'test' }
const testObj2 = { ...testObj, d: 'ran' }
const testObj3 = { ...testObj, d: 'hello' }

test('objHasMatch returns true if it includes a match', () => {
  expect(H.objHasMatch(testObj, 'test')).toBe(true)
})

test('objHasMatch returns true if it includes a partial match', () => {
  expect(H.objHasMatch(testObj, 'te')).toBe(true)
})

test('objHasMatch returns false when there is no match', () => {
  expect(H.objHasMatch(testObj, 'abc')).toBe(false)
})

test('searchObjArray returns elements with matching string', () => {
  expect(H.searchObjArray([testObj, testObj2, testObj3], 'ran')).toStrictEqual([
    testObj2,
  ])

  expect(H.searchObjArray([testObj, testObj2, testObj3], 'he')).toStrictEqual([
    testObj3,
  ])

  expect(H.searchObjArray([testObj, testObj2, testObj3], 'te')).toStrictEqual([
    testObj,
    testObj2,
    testObj3,
  ])
})
