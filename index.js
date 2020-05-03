export default blob => {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = function(e) {
      resolve(e.target.result)
    }
    reader.readAsDataURL(blob)
  })
}
