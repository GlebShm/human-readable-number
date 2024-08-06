module.exports = function toReadable(number) {
  if (number==0) return 'zero'
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let hundreds=Math.floor(number/100)
    let dozens=Math.floor(number%100/10)
    let units=number%10

    if (number<20) {
        return numbers[number]
      } else if (number<100) {
          return tens[dozens-2] + (units? ` ${numbers[units]}`: '')
        } else if(number < 1000) {
            let rest=` ${toReadable(number%100)}`
            return numbers[hundreds]+' hundred'+(rest==' zero' ? '': rest)
          }
  }
