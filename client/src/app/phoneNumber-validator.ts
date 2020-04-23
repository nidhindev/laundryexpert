
export function phoneNumberValidator(phoneNumber: string): Boolean {
  const valid = /^\d+$/.test(phoneNumber)
  console.log(phoneNumber.length)
  return (valid && phoneNumber.length >= 10 && phoneNumber.length < 11) ? true : false
}