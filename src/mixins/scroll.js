export default {
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const scrollTop = document.querySelector('html').scrollTop
      const pageHeight = document.body.clientHeight
      if (scrollTop + windowHeight + 8 > pageHeight) {
        // this.fetchProductParams.page += 1
        this.$options.scrollBottom.call(this)
      }
    }
  }
}
