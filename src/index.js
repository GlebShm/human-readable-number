module.exports = function toReadable(number) {
  let numbers = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numStr = number.toString()
  if (numStr == '0') return 'zero'
  if (number < 20) {
    return numbers[number]
  } else if (numStr.length == 2) {
    if (numStr[1] == 0) {
      return tens[numStr[0]]
    } else {
      return tens[numStr[0]] + ' ' + numbers[numStr[1]]
    }
  } else if (numStr.length == 3) {
    if (numStr[1] == '0' && numStr[2] == '0') {
      return numbers[numStr[0]] + ' hundred'
    } else {
      return numbers[numStr[0]] + ' hundred ' + toReadable(+(numStr[1] + numStr[2]))
    }
  }
}
