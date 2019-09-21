<template>
  <div class="custom-class form-table-box">
    <van-cell-group>
      <van-cell
        v-for="(item, index) in formInfo"
        :key="index"
        :title="item.lab+':'"
      >
        <div class="input-box">
          <textarea
            class="text-area"
            v-if="item.type=='textarea'"
            v-model="formData[item.name]"
            :maxlength="item.maxlength?item.maxlength:120"
          ></textarea>
          <input
            v-else
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :maxlength="item.maxlength?item.maxlength:20"
          >
          <span @click="cleanRow(item.name)">X</span>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    formInfo: {
      type: Array,
      default: []
    }
  },
  components: {},
  computed: {
    formData () {
      // 处理表单数据
      let showdata = {}
      this.formInfo.forEach(element => {
        if (element.value) {
          showdata[element.name] = element.value
        }
      })
      return showdata
    }
  },
  methods: {
    /**
     * 清空某一行
     * @param {String} key 需要清空的字段名
     */
    cleanRow: function (key) {
      console.log(key, this.formData)
      this.formData[key] = ''
    },
    submit: function () {
      let _this = this
      // 转json
      let jsonData = JSON.stringify(_this.formData)
      jsonData = JSON.parse(jsonData)
      this.$emit('getData', jsonData)
    }
  }
}
</script>

<style lang="scss">
.text-area {
  width: 100%;
}
.form-table-box {
  .van-cell__value.van-cell__value {
    flex: 2;
  }
}
</style>

