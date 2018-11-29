<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-city">
      北京<span class="iconfont">&#xe62b;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    height:.88rem;
    display:flex;
    background-color:#00bcd4
    .header-back
      width:.64rem;
      line-height:.88rem;
      text-align:center
      .back-icon
        color: #ffffff
        font-weight:bold
        font-size: .32rem
    .header-search
      flex:1;
      background: #ffffff
      height: .64rem
      line-height:.64rem
      color:#e4e7ea
      border-radius: .06rem
      margin-left: .2rem
      margin-top: .12rem
      padding:0 .2rem
    .header-city
      width: 1.28rem
      line-height: .88rem
      color: #ffffff
      text-align:center
</style>
