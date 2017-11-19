import Vue from 'vue'
import home from '@/home/home'

describe('home.vue', () => {
  const Constructor = Vue.extend(home)
  const vm = new Constructor().$mount()
  it('username', () => {
    expect(vm.username).to.be.equal('')
  })
  it('password', () => {
    expect(vm.password).to.be.equal('')
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.homeclass h1').textContent)
      .to.equal('欢迎!')
    expect(vm.$el.querySelector('.homeclass h3').textContent)
      .to.equal('Search for further message in the following URL')
  })
  it('button should exist and be right', () => {
    expect(vm.$el.querySelector('.homeclass .buttonclass'))
      .to.be.exist
    expect(vm.$el.querySelector('.homeclass .buttonclass').textContent)
      .to.equal('注销登陆')
  })
})
