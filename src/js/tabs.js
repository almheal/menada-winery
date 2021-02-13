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