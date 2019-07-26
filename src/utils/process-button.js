import { isEmpty, includes, last, initial } from 'lodash-es'

const actions = ['/', '*', '-', '+']

const separator = ''

const isAction = val => includes(actions, val)

const concat = (stateValue, buttonValue, sep = separator) => {
  return `${stateValue}${sep}${buttonValue}`
}

const isComma = val => val === ','

const hasComma = str => str.includes(',')

/**
 * @method processButton
 * @param  {String} buttonValue value from button
 * @param  {String} stateValue  current value on state
 * @return {String}
 */
const processButton = (stateValue, buttonValue) => {
  if (isEmpty(stateValue)) {
    if (isAction(buttonValue)) {
      return ''
    }

    if (isComma(buttonValue)) {
      return '0,'
    }

    return buttonValue
  }

  const stateValues = stateValue.split(separator)
  const lastElement = last(stateValues)

  if (isAction(lastElement) && isAction(buttonValue)) {
    const initials = initial(stateValues).join(separator)
    return concat(initials, buttonValue)
  }

  if (isAction(lastElement) && isComma(buttonValue)) {
    return concat(stateValue, '0,')
  }

  if (!isAction(lastElement) && !isAction(buttonValue)) {
    if (hasComma(lastElement) && isComma(buttonValue)) {
      return concat(stateValue, '', '')
    }

    return concat(stateValue, buttonValue, '')
  }

  return concat(stateValue, buttonValue)
}

export default processButton
