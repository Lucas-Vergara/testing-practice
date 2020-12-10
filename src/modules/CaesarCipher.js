const caesarCipher = (string, key) => {

  let message = '';
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      message += String.fromCharCode(((code - 65 + key) % 26) + 65)
    } else if (code >= 97 && code <= 122) {
      message += String.fromCharCode(((code - 97 + key) % 26) + 97)
    } else {
      message += String.fromCharCode(code)
    }
    
  }

  return message
}

export default caesarCipher