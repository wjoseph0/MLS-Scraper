export default function authenticate () {
  const apiKeySubmit = document.getElementById('api-key-submit')
  const apiKeyInput = document.getElementById('api-key')

  function saveApiKey (key) {
    sessionStorage.setItem('api-key', key)
  }

  apiKeySubmit.addEventListener('click', () => {
    saveApiKey(apiKeyInput.value)
  })
}
