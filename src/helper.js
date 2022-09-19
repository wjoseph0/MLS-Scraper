export function clearMain () {
  const main = document.querySelector('main')
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

export function saveApiKey (apiKey) {
  sessionStorage.setItem('apiKey', apiKey)
}
