
export function phoneNumberValidator(phoneNumber: string): Boolean {
  const valid = /^\d+$/.test(phoneNumber)
  return (valid && phoneNumber.length >= 10 && phoneNumber.length < 11) ? true : false
}