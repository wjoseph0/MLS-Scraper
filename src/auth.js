import { clearMain, saveApiKey } from './helper.js'
import showApp from './app.js'

export default function authenticate () {
  const apiKeyInput = document.getElementById('apiKeyInput')
  const apiKeySave = document.getElementById('apiKeySave')

  apiKeySave.addEventListener('click', () => {
    if (apiKeyInput.value !== '') {
      saveApiKey(apiKeyInput.value)
      clearMain()
      showApp()
    }
  })
}
