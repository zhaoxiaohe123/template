<template>
  <div class="top-nav-container">
    <div class="top-nav-container-left">
      <i v-if="isCollapseBtn" class="vst-caidan" @click="changeIsCollapse()"></i>
      <img :src="logo" alt="">
      <!-- <img src="" alt=""> -->
    </div>
    <div class="top-nav-container-middle">{{ title }}</div>
    <div class="top-nav-container-right">
      <div>
        <i class="vst-denglu"></i>
        <span>Admin</span>
        <!-- <i class="icon-down"></i> -->
        <i class="vst-tuichu"></i>
        <span @click="logOut()">登出</span>
      </div>

    </div>
  </div>
</template>

<script>
import Bus from 'utils/eventBus'
export default {
  data () {
    return {
      logo: this.CONF.topNav.logo,
      title: this.CONF.topNav.title,
      isCollapseBtn: this.CONF.topNav.isCollapseBtn,
      isCollapse: false
    }
  },
  mounted () {
    var vm = this
    Bus.$on('val', (data) => {
      vm.isCollapse = data
    })
  },
  methods: {
    changeIsCollapse () {
      Bus.$emit('val', !this.isCollapse)
    }
    // logOut () {
    //   this.$store.commit('SET_TOKEN', '')
    //   location.reload()
    // }
  }
}
</script>

<style lang="scss" scoped>
.top-nav-container{
  width: 100%;
  height: 60px;
  display: flex;
  background: $topBG;
  div{
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
}
.top-nav-container-left{
  width: 310px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  i{
    font-size: 28px;
    color: $topIcon;
    cursor: pointer;
  }
  img{
    width: 229px;
    height: 27px;
  }
}
.top-nav-container-middle{
  flex: 1;
  font-size: 20px;
  font-weight: 600;
  color: $fontColor;
}
.top-nav-container-right{
  width: 310px;
  height: 60px;
  overflow: hidden;
  div {
    height: 20px;
    margin: 20px 0px 0px 80px;
    i{
      display: block;
      float: left;
      color: $topIcon;
      line-height: 20px;
      padding-right: 5px;
      cursor: pointer;
    }
    span{
      float: left;
      display: block;
      font-size: 12px;
      color: $fontColor;
      line-height: 20px;
      padding-right: 8px;
      cursor: pointer;
    }
  }
}
</style>
