class Menu{
  constructor(selector, {btnSelector, closeBtnSelector}){
    this.$el = document.querySelector(selector)
    this.btn = document.querySelector(btnSelector)
    this.closeBtn = document.querySelector(closeBtnSelector)
    this.body = document.querySelector('body')
  }

  render(){
    this.initListeners()
  }

  open(){
    this.close = this.close.bind(this)
    this.closeBtn.addEventListener('click', this.close)
    this.body.style.overflowY = 'hidden'
    this.$el.classList.add('open')
  }

  close(){
    this.body.style.overflowY = 'auto'
    this.$el.classList.remove('open')
    this.closeBtn.removeEventListener('click', this.close)
  }

  initListeners(){
    this.btn.addEventListener('click', this.open.bind(this))
  }
}

const menu = new Menu('[data-menu]',{
  btnSelector: '[data-btn-menu]',
  closeBtnSelector: '[data-close-menu]'
})

menu.render()
