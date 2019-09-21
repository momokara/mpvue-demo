<template>
  <div class="container">

    <formTable
      :formInfo="tableKeys"
      ref="formTabe"
      @getData="getData"
    >
    </formTable>
    <van-cell
      title="添加一行"
      value="addrow"
      @click="addrow"
    />
    <van-button
      type="default"
      @click="getFormData"
    >getData</van-button>
  </div>
</template>
<script>
import formTable from '@/components/formTable'

// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      tableKeys: [
        {
          lab: '标签1',
          name: 'key1',
          value: '',
          placeholder: 'Key1value',
          maxlength: 3,
          type: 'textarea'
        },
        {
          lab: '标签1',
          name: 'key2',
          value: 'Key2value'
        }
      ]
    }
  },
  // 使用的 vue 组件
  components: {
    formTable
  },
  watch: {},
  computed: {},
  // 页面中的方法
  methods: {
    // 调用提交方法
    getFormData: function () {
      this.$refs.formTabe.submit()
    },
    // 获取表单中的数据
    getData: function (e) {
      console.log('getData', e)
      wx.showToast({
        title: JSON.stringify(e),
        icon: 'none'
      })
    },
    // 给表单添加一行
    addrow: function () {
      let index = this.tableKeys.length + 1
      let rowdata = {
        lab: `LabKey_${index}`,
        name: `key_${index}`,
        value: `Key${index}value`
      }
      this.tableKeys.push(rowdata)
    }
  },

  // 原生钩子
  // 监听页面加载
  onLoad () {},
  // 监听页面显示
  onShow () {
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  }
}
</script>

<style lang="scss">
</style>
