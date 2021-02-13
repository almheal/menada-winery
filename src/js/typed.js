function animationTypedText(el){
  let strings
  if(el.dataset.lines){
    strings = [...el.dataset.typedText.split(' ')]
  }else{
    strings = [el.dataset.typedText]
  }
  const typeSpeed = Number(el.dataset.typedSpeed)
  const startDelay = el.dataset.typedDelay || 0
  new Typed(el,{
    strings,
    typeSpeed,
    startDelay,
    showCursor: false
  })
}
