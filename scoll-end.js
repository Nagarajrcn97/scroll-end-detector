let scrolling, callbackFn, targetEl, resetTimer = 70;

export const scrollEnd = (el, callback) => {

  // To make sure that type & value of target-element, callback function are valid. 
  if (!el || !callback || typeof callback !== 'function') return;

  // Copy to local variables.
  callbackFn = callback
  targetEl = el

  // Listen to `scroll` event and pass handler.
  targetEl.addEventListener('scroll', scrollHandler, false)
}

const scrollHandler = () => {

  // Clear timeout until scroll event emitting stops.
  clearTimeout(scrolling)

  // Set a timeout to run callback function after scroll event stops.
  scrolling = setTimeout(() => {

  // Remove `scroll` event and run the callback function.
  targetEl.removeEventListener('scroll', scrollHandler, false)
    callbackFn()
  }, resetTimer)
}
