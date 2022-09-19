function setHeader () {
  const body = document.querySelector('body')
  const header = document.createElement('header')
  const title = document.createElement('h1')

  title.textContent = 'MLS Scraper'
  title.id = 'title'

  header.appendChild(title)
  body.appendChild(header)
}

function setMain () {
  const body = document.querySelector('body')
  const main = document.createElement('main')
  const authForm = document.createElement('form')
  const apiKeyLabel = document.createElement('label')
  const apiGetKey = document.createElement('a')
  const apiKeyInput = document.createElement('input')
  const apiKeySubmit = document.createElement('button')

  apiKeyLabel.textContent = 'RapidAPI Key:'

  apiGetKey.textContent = '(i need a key)'
  apiGetKey.href = 'https://rapidapi.com/developer/'
  apiGetKey.target = '_blank'

  apiKeyInput.id = 'apiKeyInput'
  apiKeyInput.type = 'password'
  apiKeyInput.minLength = '50'
  apiKeyInput.autocomplete = 'current-password'
  apiKeyInput.autofocus = true
  apiKeyInput.required = true

  apiKeySubmit.textContent = 'Save'
  apiKeySubmit.id = 'apiKeySave'
  apiKeySubmit.type = 'button'

  authForm.appendChild(apiKeyLabel)
  authForm.appendChild(apiKeyInput)
  authForm.appendChild(apiGetKey)
  authForm.appendChild(apiKeySubmit)
  main.appendChild(authForm)
  body.appendChild(main)
}

export default function buildWebsite () {
  setHeader()
  setMain()
}
