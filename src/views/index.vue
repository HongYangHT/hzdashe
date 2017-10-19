<template>
  <section class="g-index g-content">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row class="m-header">
          <el-col :span="12" class="u-header-logo">
            <router-link :to="'/'" class="u-logo">
              <img src="../assets/imgs/logo.gif">
            </router-link>
          </el-col>
          <el-col :span="12" class="u-header-link">
            <ul class="u-list">
              <li @click="handleClick(3, $event)">联系我们</li>
              <li class="u-border"></li>
              <li @click="handleClick(2, $event)">加入收藏</li>
              <li class="u-border"></li>
              <li @click="handleClick(1, $event)">设为首页</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        message: 'hello world'
      }
    },
    methods: {
      handleClick (type, e) {
        let href = window.location.href
        switch (type) {
          case 1:
            try {
              e.target.style.behavior = 'url(#default#homepage)'
              e.target.setHomePage(href)
            } catch (e) {
              this.$message({
                message: '抱歉，您所使用的浏览器无法完成此操作。您需要手动将其设置为首页。',
                type: 'error',
                duration: 1500
              })
            }
            break
          case 2:
            try {
              window.external.addFavorite(href, 'Sketchup/Enscape/Lumion代理!虚拟现实!BIM VR!大设科技官网')
            } catch (e) {
              try {
                window.sidebar.addPanel('Sketchup/Enscape/Lumion代理!虚拟现实!BIM VR!大设科技官网', href, '')
              } catch (e) {
                this.$message({
                  message: '加入收藏失败，有劳您手动添加。',
                  type: 'error',
                  duration: 1500
                })
              }
            }
            break
          case 3:
            this.$router.push({ path: 'about' })
            break
        }
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/less/variables.less';
  .g-content{
    width: 90%;
    margin:0 auto;
    background: #fff;
    .m-header{
      background-image: url('../assets/imgs/top_bg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    .u-header-logo{
      text-align: left;
    }
    .u-header-link{
      text-align: right;
    }
    .u-logo{
      display: inline-block;
      width: 200px;
      margin: 25px 0;
    }
    .u-list{
      margin-top: 40px;
      list-style:none;
      &:before, &:after{
        display: table;
        content: "";
        clear: both;
      }
      li {
        float: right;
        font-size: $fontSize;
        color: $fontColor;
        text-decoration: none;
        &:hover{
          color: $hoverColor;
          cursor: pointer;
        }
      }
      .u-border{
        margin: 0 10px;
        width: 1px;
        height: 12px;
        margin-top: 2px;
        background: $fontColor;
      }
    }
  }
</style>
