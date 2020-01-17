chrome.storage.sync.get('bingshin', ({ bingshin: enabled }) => {
  if (enabled === false) return
  chrome.storage.sync.set({ bingshin: true })

  const address = location.href
  if (address.includes('search?q')) location.href = location.href.replace('bing', 'google')
  else location.href = 'https://google.com'
})
