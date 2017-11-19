import Vue from 'vue'
import login from '@/components/login'

describe('login.vue', () => {
  const Constructor = Vue.extend(login)
  const vm = new Constructor().$mount()
  it('username', () => {
    expect(vm.username).to.be.equal('')
  })
  it('password', () => {
    expect(vm.password).to.be.equal('')
  })
  it('showlogin', () => {
    expect(vm.showlogin).to.be.equal(true)
  })
  it('showsignup', () => {
    expect(vm.showsignup).to.be.equal(false)
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.loginstyle h1').textContent)
      .to.equal('登陆')
    expect(vm.$el.querySelector('.signupstyle h1').textContent)
      .to.equal('注册')
  })
  it('button1 should exist and be right', () => {
    expect(vm.$el.querySelector('.loginstyle .loginbutton'))
      .to.be.exist
    expect(vm.$el.querySelector('.loginstyle .loginbutton').textContent)
      .to.equal('登陆')
  })
  it('button2 should exist and be right', () => {
    expect(vm.$el.querySelector('.signupstyle .button2'))
      .to.be.exist
    expect(vm.$el.querySelector('.signupstyle .button2').textContent)
      .to.equal('注册')
  })
  it('input1 should exist', () => {
    expect(vm.$el.querySelector('.loginstyle .input1'))
      .to.be.exist
  })
  it('input2 should exist', () => {
    expect(vm.$el.querySelector('.loginstyle .input2'))
      .to.be.exist
  })
  it('input3 should exist', () => {
    expect(vm.$el.querySelector('.signupstyle .input3'))
      .to.be.exist
  })
  it('input4 should exist', () => {
    expect(vm.$el.querySelector('.signupstyle .input4'))
      .to.be.exist
  })
  it('span should exist and be right', () => {
    expect(vm.$el.querySelector('.loginstyle .spanclass'))
      .to.be.exist
    expect(vm.$el.querySelector('.loginstyle .spanclass').textContent)
      .to.equal('没有账号？马上注册')
  })
  it('span should exist and be right', () => {
    expect(vm.$el.querySelector('.signupstyle .span2'))
      .to.be.exist
    expect(vm.$el.querySelector('.signupstyle .span2').textContent)
      .to.equal('已有账号？立即登陆')
  })
})


