
export function phoneNumberValidator(phoneNumber: string): Boolean {
  const valid = /^\d+$/.test(phoneNumber)
  return (valid && phoneNumber.length >= 10) ? true : false
}