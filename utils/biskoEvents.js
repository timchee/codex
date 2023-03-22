const biskoScript = () => {
  window.biskoQueue = window.biskoQueue || []
  function bsk() {
    biskoQueue.push(arguments)
  }
  bsk('init', '181313')
  bsk('time')
  bsk('event', 'pageview')
}

const registerEvent = eventType => {
  function bsk() {
    biskoQueue.push(arguments)
  }
  bsk('event', 'register', {
    name: eventType,
  })
}

const demoBarEvent = content => {
  function bsk() {
    biskoQueue.push(arguments)
  }
  bsk('event', 'demobar', {
    name: content,
  })
}

const bskEvent = event => {
  function bsk() {
    biskoQueue.push(arguments)
  }
  bsk('event', event)
}
export { registerEvent, demoBarEvent, bskEvent, biskoScript }
