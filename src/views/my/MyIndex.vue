<template>
  <div class="my">
    <my-info :info='info'/>
    <my-order class="my_order"/>
    <my-list />
    <!-- {{info}} -->
  </div>
</template>

<script>
import MyInfo from './components/MyInfo.vue'
import MyOrder from './components/MyOrder.vue'
import MyList from './components/MyList.vue'
import { mapState } from 'vuex'
export default {
  name: 'my-index',
  components: {
    MyInfo,
    MyOrder,
    MyList
  },
  computed: {
    ...mapState('user', ['info'])
  }
}
</script>

<style lang="scss" scoped>
.my {
  background-color: #f8f8f8;
  width: 100vw;
  height: 100vh;
  .my_order {
    transform: translateY(-50px);
  }
}
</style>
