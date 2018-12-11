import {
  VantComponent
} from '../common/component';
VantComponent({
  field: true,
  relation: {
    name: 'radio-group-mo',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    name: null,
    iconName: {
      type: String,
      value: "check"
    },
    checkedIconName: {
      type: String,
      value: "checked"
    },
    value: null,
    disabled: Boolean,
    useIconSlot: Boolean,
    labelDisabled: Boolean,
    labelPosition: String,
    checkedColor: String
  },
  computed: {
    iconClass: function iconClass() {
      var _this$data = this.data,
        disabled = _this$data.disabled,
        name = _this$data.name,
        value = _this$data.value;
      return this.classNames('van-radio__icon', {
        'van-radio__icon--disabled': disabled,
        'van-radio__icon--checked': !disabled && name === value,
        'van-radio__icon--check': !disabled && name !== value
      });
    }
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
