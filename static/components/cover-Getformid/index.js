import { VantComponent } from '../common/component'

VantComponent({
  props: {

  },
  created () {

  },
  methods: {
    getFormid (e) {
      let formId = e.detail.formId
      // eslint-disable-next-line no-undef
      let pages = getCurrentPages() // 获取加载的页面
      pages = pages[pages.length - 1] // 获取当前页面的对象
      let path = pages.route
      let options = JSON.stringify(pages.options)
      this.$emit('formId', {formId, path, options})
    }
  }
})
