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

class Tabs{
  constructor(selector, {selectorItem}){
    this.tabs = document.querySelectorAll(selector)
    this.tabItems = [...document.querySelectorAll(selectorItem)]
  }

  render(){
    this.initListeners()
  }

  changeTab(e){
    const titleTab = e.currentTarget.dataset.wineTab
    this.tabItems.forEach(item => item.classList.remove('active'))
    const targetItem = this.tabItems.find(item => item.dataset.wineItem === titleTab)
    targetItem.classList.add('active')
  }

  changeDefaultTab(){
    this.tabItems.forEach(item => item.classList.remove('active'))
    const defaultTab = this.tabItems.find(item => item.dataset.wineItem === 'defaultTab')
    defaultTab.classList.add('active')
  }

  initListeners(){
    this.tabs.forEach(tab =>{
      tab.addEventListener('mouseover', this.changeTab.bind(this))
      tab.addEventListener('mouseout', this.changeDefaultTab.bind(this))
    })
  }
}

const wineTabs = new Tabs('[data-wine-tab]',{
  selectorItem: '[data-wine-item]'
})

wineTabs.render()
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

let animItems = document.querySelectorAll('[data-anim-items]');

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(){
		for(let i = 0; i < animItems.length; i++){
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) &&
				pageYOffset < (animItemOffset + animItemHeight) &&
				!animItem.classList.contains('active')
				){
				animItem.classList.add('active');
				const animateTextElements = animItem.querySelectorAll('[data-typed-text]')
				animateTextElements.forEach(animationTypedText)
      }else{
				if(!animItem.dataset.animNoHide){
					animItem.classList.remove('active');
				}
			}
		}
	}

	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}