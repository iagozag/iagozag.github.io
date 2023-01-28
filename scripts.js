/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
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
  return engineUrls[engine] + value
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

const bookmarks = [{"id":"1IrUj9ejxKgEnhZh","label":"Pastime","bookmarks":[{"id":"P54aC6USemTKevOB","label":"Twitch","url":"https://www.twitch.tv/"},{"id":"fBhDttJjhwLEUmvb","label":"YouTube","url":"https://www.youtube.com/"},{"id":"Q1slpmpjT6RXNRtG","label":"BetterAnime","url":"https://betteranime.net/"},{"id":"Z4acOpuAy2aZnQyO","label":"MangAnime","url":"https://manganime.digital/"}]},{"id":"qdxgVdvqmyeHUskG","label":"School","bookmarks":[{"id":"bXQx8mwxXNzZnOSV","label":"MinhaUFMG","url":"https://sistemas.ufmg.br/portal/render.userLayoutRootNode.uP"},{"id":"yvXieuuY80Vfcpzp","label":"MoodleUFMG","url":"https://virtual.ufmg.br/minhasturmas/"},{"id":"KT0eAjAcE3hoq1y2","label":"WebmailDCC","url":"https://webmail.dcc.ufmg.br/"},{"id":"jHB9MCyU3pKJq2Ol","label":"Office","url":"https://www.office.com/?auth=2"}]},{"id":"PtI6xgWOp4I1nnH7","label":"Social Media","bookmarks":[{"id":"gF8LsnefdC7Uc8fK","label":"Whatsapp","url":"https://web.whatsapp.com/"},{"id":"3nydkJQFgjXWYpLK","label":"Twitter","url":"https://twitter.com/home"},{"id":"HqdLBrpPD0ClezRC","label":"Reddit","url":"https://www.reddit.com/"},{"id":"bxmNsfwGMA5nqDYC","label":"Instagram","url":"https://www.instagram.com/"}]},{"id":"MH4o22ekQKoF7iEi","label":"Programming","bookmarks":[{"id":"t4xf4knNLASvaa6E","label":"GitHub","url":"https://github.com/"},{"id":"Jh5hy39ZUgF8gog6","label":"CodCad","url":"https://neps.academy/br/codcad"},{"id":"AAakfkEN8mGRyuxR","label":"MaratonaUFMG","url":"https://docs.google.com/spreadsheets/d/1QQ1QvYNDPKv9Aqh5c2VL_KCtpqASDWeRcLkyyXlPM0M/edit#gid=1810604804"},{"id":"CJiwngmW2OC5PbXc","label":"Udemy","url":"https://www.udemy.com/"}]},{"id":"ZPBLqXJSeAnYA0GB","label":"Helpful","bookmarks":[{"id":"GgnYQKKlldVovPBE","label":"Gmail","url":"https://mail.google.com/mail/u/0/#inbox"},{"id":"EicCJljIexvdm9vS","label":"MyDrive","url":"https://drive.google.com/drive/u/1/my-drive"},{"id":"VFKwi8haOU42S4ib","label":"iLovePDF","url":"https://www.ilovepdf.com/"},{"id":"uTfk5P1v0SQz1nFh","label":"LibGenesis","url":"https://libgen.is/"}]},{"id":"uAOwdjZtAYRpWvj6","label":"IDK","bookmarks":[{"id":"c3xyyauDVNE6LDKC","label":"Outlook","url":"https://outlook.live.com/mail/0/"},{"id":"VTqK2Fk8YIOWydtq","label":"IGG Games","url":"https://igg-games.com/"},{"id":"wj1k4Lhm6sOiz9rx","label":"PirateBay","url":"https://www.tpbproxypirate.com/"},{"id":"DwifIwOCtwu0Jt4o","label":"Translate","url":"https://www.google.com/search?client=firefox-b-d&q=translate"}]}]

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
