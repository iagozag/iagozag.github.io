/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"qwdie6Whwi3q5jun","label":"pastime","bookmarks":[{"id":"S0NwUFv7AjxA5oEr","label":"twitch","url":"https://www.twitch.tv/"},{"id":"PD8Khf3radoARqyJ","label":"youtube","url":"https://www.youtube.com/"},{"id":"T8uLwAl8JR5AfWGJ","label":"betteranime","url":"https://betteranime.net/"},{"id":"dohaa44d82pPwUK6","label":"manganime","url":"https://manganime.digital/"}]},{"id":"hnkNSgOZUcGOz15m","label":"school","bookmarks":[{"id":"6bznM6ePWNhVTddh","label":"minhaufmg","url":"https://sistemas.ufmg.br/"},{"id":"CzB78SKIgU3pohfj","label":"moodle","url":"https://virtual.ufmg.br/minhasturmas/"},{"id":"pNQcAYzIjoedlAtT","label":"webmaildcc","url":"https://webmail.dcc.ufmg.br/"},{"id":"ZY8g6JHWOWsOHXi8","label":"mydrive","url":"https://drive.google.com/drive/u/1/my-drive"}]},{"id":"j6OV2yLSJGVnXW8E","label":"programming","bookmarks":[{"id":"2sO0N2LDSbrQsocJ","label":"github","url":"https://github.com/"},{"id":"mpTC9N8PzApLXNY6","label":"codeforces","url":"https://codeforces.com/problemset"},{"id":"MdjYPypFpZz867eu","label":"leetcode","url":"https://leetcode.com/problemset/all/"},{"id":"cMFtSYsrBqepU90x","label":"maratonaufmg","url":"https://docs.google.com/spreadsheets/d/1QQ1QvYNDPKv9Aqh5c2VL_KCtpqASDWeRcLkyyXlPM0M/edit#gid=1810604804"}]},{"id":"dOr9E9mZQzL8RONf","label":"helpful","bookmarks":[{"id":"5pZqdXOD2LzkuTm2","label":"gmail","url":"https://mail.google.com/mail/u/0/#inbox"},{"id":"nl72rLXjhtTRso7Q","label":"ilovepdf","url":"https://www.ilovepdf.com/"},{"id":"kvlfhpFeB1TkjtK0","label":"libgenesis","url":"https://libgen.is/"},{"id":"i8nW2HHARjSjOf0R","label":"translate","url":"https://www.google.com/search?client=firefox-b-d&q=translate"}]},{"id":"cZPpwMeUh64x6XSD","label":"ijunior","bookmarks":[{"id":"pQQwSxsw1faOYLjr","label":"site","url":"https://ijunior.com.br/"},{"id":"fkLar1JdKXiyTfqx","label":"notion","url":"https://www.notion.so/ijunior/4b8ba4b78d9a4ed9b57e3111d0734b0a?v=c088bc64ba824f858daafee928971d68"},{"id":"p6wvgm9MuDH6o3JI","label":"clockify","url":"https://app.clockify.me/tracker"},{"id":"nfio0Jbpp0rMuixy","label":"telegram","url":"https://web.telegram.org/a/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
