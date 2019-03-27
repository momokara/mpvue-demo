<template>
  <div class="container">
    <block
      v-for="(item, index) in menudata"
      :key="index"
    >
      <div class="title">
        {{item.title_name}}
      </div>
      <div>
        <van-cell-group>
          <van-cell
            v-for="(cellitem,cellindex) in item.child_menu"
            v-bind:key="cellindex"
            :title="(index+1)+'.'+(cellindex+1)+'.'+cellitem.title"
            :value="cellitem.cn_name"
            :label="cellitem.label"
            :url="components_root_url+cellitem.url+'?label='+cellitem.label"
            :border="true"
            is-link
          />
        </van-cell-group>
      </div>
    </block>
  </div>
</template>
<script>
import menuData from './menu_data'
// 页面记录
import { pagelogs } from '@/utils/logs'

export default {
  data () {
    return {
      components_root_url: '/pages/test',
      menudata: menuData.menuData
    }
  },

  components: {},

  methods: {},

  created () {},
  onShow () {
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  }
}
</script>
<style>
page {
  background-color: #fbfbfb;
}
.container {
  padding: 15px;
}
</style>
