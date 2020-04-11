chrome.storage.sync.get('bingshin', ({ bingshin: enabled }) => {
  if (!enabled) return
  document.body.style.display = 'none'
  chrome.storage.sync.set({ bingshin: true })

  const address = location.href
  if (address.includes('search?q'))
    location.href = location.href.replace('bing', 'google')
  else location.href = 'https://google.com'
})
