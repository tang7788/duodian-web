const storage = {
  setItem (key, value, time) {
    const obj = {
      time: +new Date() + time,
      value
    }
    localStorage.setItem(key, JSON.stringify(obj))
  },
  getItem (key) {
    const value = localStorage.getItem(key)
    if (value) {
      if (value.time > +new Date()) {
        localStorage.removeItem(key)
        return null
      } else {
        return JSON.parse(value).value
      }
    } else {
      return null
    }
  },
  clear () {
    localStorage.clear()
  },
  removeItem (key) {
    localStorage.removeItem(key)
  }
}

export default storage
