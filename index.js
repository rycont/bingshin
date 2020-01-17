const checker = document.getElementById("checker");

const rerender = () =>
  chrome.storage.sync.get(
    "bingshin",
    ({bingshin}) => (checker.checked = bingshin)
  );
rerender();

document.getElementById("slider").addEventListener("click", e => {
  chrome.storage.sync.set({ bingshin: !checker.checked }, rerender);
});