const checkNameUser = (str) => {
    str = str.trim()
    if (str.indexOf(' ') === str.lastIndexOf(' ') || str.indexOf(' ') == -1)
        return false
    return true
}
module.exports = checkNameUser
