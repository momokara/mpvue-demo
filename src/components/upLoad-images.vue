<template>
    <div>
        <p class="card">
            {{imageList}}
        </p>
    </div>
</template>

<script>
export default {
  props: {
    imageList: {
      type: Array
    }
  }
};
</script>

<style>
.card {
  padding: 10px;
}
</style>
