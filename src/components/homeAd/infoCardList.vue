<template>
  <div class="img-card-list">
    <div
      v-for="item in dataList"
      :key="item"
      :item-id="item.id"
    >
      <a
        @click="golink(item.url)"
        class="link"
      >
        <van-card
          :thumb="item.imgUrl"
          height="85px"
          imgheight="75px"
          imgwidth="140px"
        >
          <div
            class="card-title fsp14 fc-black line-clamp_1"
            slot="title"
          >{{item.name}}</div>
          <div
            class="card-desc fsp12 fc-grey line-clamp_3"
            slot="desc"
          >{{item.info}}</div>
        </van-card>

      </a>
    </div>
  </div>

</template>

<script>
import { golink } from "@/utils/tools";
export default {
  props: {
    dataList: {
      type: Array
    },
    config: {
      type: Object,
      default: {}
    },
    customClass: {
      type: String
    },
    current: {
      type: String
    }
  },
  data() {
    return {
      defaultconfig: {},
      useConfig: {}
    };
  },
  watch: {
    config: {
      handler: function(val, oldval) {
        this.getUseConfig();
      },
      deep: true
    }
  },
  methods: {
    golink,
    swiperChange(event) {
      this.$emit("change", event);
    },
    animationFinish(event) {
      this.$emit("animationfinish", event);
    },
    getUseConfig() {
      this.useConfig = Object.assign({}, this.defaultconfig, this.config);
    }
  },
  created() {
    this.getUseConfig();
  }
};
</script>

<style lang="scss">
.img-card-list {
  .card-title {
  }
  .van-card {
    padding: 5px 0 5px 155px; /*px*/
    width: 100%;
    margin-bottom: 5px;
  }
  .van-card__thumb {
    left: 0px;

    image {
      width: 130px; /*px*/
      border-radius: 5px;
      height: 70px; /*px*/
    }
  }
}
</style>
