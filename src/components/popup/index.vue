<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="dialog" v-show="visible" @click="close">
      <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
      >
        <div class="dialog-box" v-show="visible" @click.stop>
          <header class="dialog-header">
            <h2>
              <slot name="header"></slot>
              {{ title }}
            </h2>
            <a href="javascript:;" class="close-btn" @click="close">x</a>
          </header>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup-wrap',
  props: {
    title: String,
    visible: Boolean
  },
  methods: {
    close () {
      this.$emit('close')
      // this.$emit('update:isshow', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.16);
  .dialog-box {
    background: #f9f9f9;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 650px;
    box-sizing: border-box;
    .dialog-header {
      font-size: 28px;
      height: 80px;
      background-color: #fff;
      color: #000;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .close-btn {
        font-size: 28px;
        color: #FF1E1E;
      }
    }
  }
}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
// .animate__animated.animate__fadeInUp {
//   --animate-duration: 1s;
// }
// .animate__animated.animate__fadeOutDown {
//   --animate-duration: 1s;
// }
:root {
  --animate-duration: 800ms;
  // --animate-delay: 0.9s;
}
</style>
