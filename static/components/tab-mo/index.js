import { VantComponent } from '../common/component';
VantComponent({
  relation: {
    name: 'tabs-mo',
    type: 'ancestor'
  },
  props: {
    title: String,
    disabled: Boolean
  },
  data: {
    inited: false,
    active: false,
    animated: false,
    width: null
  },
  watch: {
    title: 'update',
    disabled: 'update'
  },
  methods: {
    update: function update() {
      var parent = this.getRelationNodes('../tabs-mo/index')[0];

      if (parent) {
        parent.updateTabs();
      }
    }
  }
});