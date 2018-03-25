import { observable, computed, action, configure } from 'mobx'

configure({enforceActions: true})


class AppStore {
  @observable prop1 = "val1"
  @observable prop2 = "val2"
  @observable prop3 = "val3"

  @computed get arr() {
    return [
      this.prop1, 
      this.prop2, 
      this.prop3
    ]
  }

  @action alterProps() {
    this.prop1 = Date.now()
    this.prop2 = Date.now()
    this.prop3 = Date.now()
  }
}

const appStore = window.appStore = new AppStore()

export default appStore
