<template>
  <div class="custom-class demo-block ">
    <van-cell-group>
      <van-cell
        v-for="(item, index) in formInfo"
        :key="index"
        :title="item.lab+':'"
      >
        <div>
          <input
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :maxlength="item.maxlength?item.maxlength:20"
          >
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    formInfo: {
      type: Array,
      default: []
    }
  },
  components: {},
  computed: {
    formData() {
      // 处理表单数据
      let showdata = {};
      this.formInfo.forEach(element => {
        if (element.value) {
          showdata[element.name] = element.value;
        }
      });
      return showdata;
    }
  },
  methods: {
    submit: function() {
      let _this = this;
      // 转json
      let jsonData = JSON.stringify(_this.formData);
      jsonData = JSON.parse(jsonData);
      this.$emit("getData", jsonData);
    }
  }
};
</script>

<style lang="scss">
</style>

