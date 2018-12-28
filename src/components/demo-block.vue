<template>
    <div class="custom-class demo-block " :class="[padding?'demo-block--padding': '' ]">
        <div v-if="title" class="demo-block__title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    padding: {
      type: Boolean
    }
  }
};
</script>

<style>
.demo-block__title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 20px 15px 15px;
}

.demo-block--padding {
  padding: 0 15px;
}

.demo-block--padding .demo-block__title {
  padding-left: 0;
}
</style>
