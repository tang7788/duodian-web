<template>
  <div id="wrap">
    <h5>手机号快捷登录</h5>
    <div class="tel">
      <input type="text" placeholder="请输入手机号" v-model="loginForm.phone">
    </div>
    <div class="code">
      <input type="text" placeholder="请输入验证码" v-model="loginForm.code">
      <button @click="time" :disabled="isSend">
        {{num === 0 ? '获取验证码' : `${num}秒后重新获取`}}
      </button>
    </div>
    <div class="login">
      <button @click='enter' :disabled="isLogin">登录</button>
    </div>
    <p class="info"><span>账号密码登录</span><em>|</em><span>登录遇到问题</span></p>
  </div>
</template>

<script>
export default {
  name: 'login-wrap',
  data () {
    return {
      // phone: '',
      num: 0,
      timer: '',
      // code: '',
      loginForm: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    isSend () {
      const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
      return !(reg.test(this.loginForm.phone) && this.num === 0)
    },
    isLogin () {
      return !(this.loginForm.phone && this.loginForm.code.length === 6)
    }
  },
  methods: {
    async time () {
      const res = await this.$api.user.sendCode({
        phone: this.loginForm.phone
      })
      console.log(res)
      this.num = 60
      this.timer = setInterval(() => {
        this.num--
        if (this.num === 0) {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    async enter () {
      const res = await this.$api.user.login(this.loginForm)
      console.log(res)
      const callbackUrl = this.$route.query.callback || '/home'
      localStorage.setItem('token', res.token)
      this.$store.dispatch('user/getUserInfo').then((res) => {
        this.$router.push(callbackUrl)
      })
      // this.$api.user.info().then((res) => {
      //   this.$root.userInfo = res.data
      //   this.$router.push(callbackUrl)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
#wrap {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  h5 {
    font-size: 36px;
    padding-top: 200px;
    text-align: center;
    padding-bottom: 40px;
  }
  .tel {
    padding: 0 50px;
    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
    }
  }
  .code {
    font-size: 0;
    padding: 0 50px;
    margin-top: 70px;
    input {
      width: 66%;
      height: 40px;
      border: none;
      outline: none;
    }
    button {
      font-size: 24px;
      color: rgb(20, 136, 182);
      border: 0;
      background-color: #fff;
      &:disabled {
        color: #ccc;
      }
    }
  }
  .login {
    font-size: 0;
    margin-top: 100px;
    padding: 0 40px;
    button {
      width: 100%;
      height: 80px;
      color: #fff;
      background-color: rgb(95, 114, 201);
      border: 0;
      outline: none;
      border-radius: 20px;
      &:disabled {
        background-color: rgb(115, 151, 185);
      }
    }
  }
  .info {
    text-align: center;
    margin-top: 60px;
    font-size: 28px;
    span {
      color: rgb(98, 98, 214);
    }
    em {
      color: #ddd;
      padding: 0 8px;
    }
  }
}
</style>
