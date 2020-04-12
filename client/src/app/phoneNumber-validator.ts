
export function phoneNumberValidator(phoneNumber: string): Boolean {
  const valid = /^\d+$/.test(phoneNumber)
  return valid ? true : false
}