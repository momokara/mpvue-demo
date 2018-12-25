import { VantComponent } from '../common/component';
VantComponent({
  field: true,
  relation: {
    name: 'radio-group-mo',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String,
    checkedColor: String,
    useIconSlot: Boolean,
  },
  methods: {
    emitChange: function emitChange(value) {
      var instance = this.getRelationNodes('../radio-group-mo/index')[0] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },
    onChange: function onChange(event) {
      this.emitChange(event.detail.value);
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(this.data.name);
      }
    }
  }
});