// NOTE: While remote, this has a chance of creating duplicate IDS.
//       I would never use this in a production application.
export const createId = () => Math.random().toString(16).slice(2)

// Make the local storage getter asynchronous so it doesn't block the ui
export const getFromLocalStorage = async <T>(key: string, defaultValue: T) => {
  await null
  const value = window.localStorage.getItem(key)
  if (!value) return defaultValue
  return JSON.parse(value)
}

// Make the local storage setter asynchronous so it doesn't block the ui
export const setInLocalStorage = async <T>(key: string, value: T) => {
  await null
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const searchString = (string: string, searchTerm: string) =>
  string.toLowerCase().includes(searchTerm.toLowerCase())

/**
 *  compares every attribute of an object to a string.
 *  If any attributes match the string, the function returns true.
 * @param object any type of object
 * @param searchTerm whatever substring you are wanting to search
 */
export const objHasMatch = (object: object, searchTerm: string): boolean =>
  Object.values(object).reduce((isMatch, attribute) => {
    // If any attribute in the object has matched, return true
    if (isMatch) return true

    // if it's not a string, ignore it
    if (typeof attribute !== 'string') return isMatch

    // if the object attribute is a string, run teh comparator function
    return searchString(attribute, searchTerm)
  }, false)

/**
 * searches through an array of objects are returns only the objects
 * that have a property that equals a string
 * @param array
 * @param term
 */
export const searchObjArray = <T extends object>(array: T[], term: string) =>
  array.reduce<T[]>((searchedElements, element) => {
    // if obj has a property that matches the string, append it to accumulating array
    if (objHasMatch(element, term)) return [...searchedElements, element]

    // if no match, return accumulating array
    return searchedElements
  }, [])
