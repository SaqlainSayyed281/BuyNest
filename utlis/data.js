const info = (data = {}) => {
  const {
    name = "",
    description = ""
  } = data

  return {
    name,
    description
  }
}

module.exports = info