const lang = navigator ? navigator.language.split('-')[0] : 'en'
if (lang !== 'it') {
  const translatables = [...document.querySelectorAll('[data-en]')]
  translatables.forEach(i => {
    const text = i.dataset.en
    i.innerHTML = text
  })
}