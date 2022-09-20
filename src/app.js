import { fetchApiData } from './helper'

export default function showApp () {
  const main = document.querySelector('main')
  const appForm = document.createElement('form')
  const cityInputLabel = document.createElement('label')
  const cityInput = document.createElement('input')
  const stateInputLabel = document.createElement('label')
  const stateInput = document.createElement('input')
  const search = document.createElement('button')

  cityInputLabel.textContent = 'City:'
  stateInputLabel.textContent = 'State:'

  search.id = 'searchButton'
  search.textContent = 'Search'
  search.type = 'button'

  appForm.appendChild(cityInputLabel)
  appForm.appendChild(cityInput)
  appForm.appendChild(stateInputLabel)
  appForm.appendChild(stateInput)
  appForm.appendChild(search)
  main.appendChild(appForm)

  search.addEventListener('click', () => {
    if (cityInput.value !== '' && stateInput.value !== '') {
      console.log('city: ' + cityInput.value)
      console.log('state: ' + stateInput.value)
      fetchApiData(cityInput.value, stateInput.value)
    }
  })
}
