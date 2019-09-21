<template>
  <div class="img-card-list">
    <div v-for="item in dataList"
         :key="item"
         :item-id="item.id"
         class="ad-card-cell">
      <a @click="golink(item.url)"
         class="link">
        <div v-if="cardStyle==1"
             class="top-title card-title fsp14 fc-black line-clamp_1">
          {{item.name}}
        </div>
        <van-card :thumb="item.imgUrl"
                  height="77px"
                  imgheight="72px"
                  imgwidth="145px">
          <div v-if="cardStyle==0"
               class="card-title fsp14 fc-black line-clamp_1"
               slot="title">{{item.name}}</div>
          <div class="desc-box"
               slot="desc">
            <div class="card-desc fsp12 fc-grey"
                 :class="[{'line-clamp_3':!item.price},{'line-clamp_2':item.price}]"> {{item.info}}</div>
            <div v-if="cardStyle==1"
                 class="count-row">

            </div>
            <div v-if="item.price"
                 class="card-price fsp12 fc-money line-clamp_1">
              {{item.price}}
              <span v-if="item.defaultPrice"
                    class="fc-grey delete-line">{{item.defaultPrice}}</span>
              <span class="fc-grey fr">{{item.num}}</span>
            </div>
            <div v-if="item.isNew"
                 class="newTag ta-c fc-fff fsp14">新</div>
          </div>
        </van-card>
      </a>
    </div>
  </div>

</template>

<script>
import { golink } from '@/utils/tools'

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
    },
    cardStyle: {
      type: Number,
      default: 0
    }
  },
  components: {

  },
  data () {
    return {
      defaultconfig: {},
      useConfig: {}
    }
  },
  watch: {
    config: {
      handler: function (val, oldval) {
        this.getUseConfig()
      },
      deep: true
    }
  },
  methods: {
    golink,
    swiperChange (event) {
      this.$emit('change', event)
    },
    animationFinish (event) {
      this.$emit('animationfinish', event)
    },
    getUseConfig () {
      this.useConfig = Object.assign({}, this.defaultconfig, this.config)
    }
  },
  created () {
    this.getUseConfig()
  }
}
</script>

<style lang="scss">
.img-card-list {
  .top-title {
    box-sizing: border-box;
    padding: 8PX 5PX 5PX 8PX;  /*px*/
    border-bottom: 1px solid #ddd;
  }
  .van-card {
    padding: 5PX 0 5PX 150PX; /*px*/
    width: 100%;
    margin-bottom: 5px;
    .desc-box {
      height: 72PX; /*px*/
      position: relative;
      .count-row {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
      }
      .newTag {
        position: absolute;
        right: -33PX; /*px*/
        bottom: 0px;
        background-color: #ef5350;
        width: 80px;
        height: 20px;
        line-height: 20px;
        transform: rotate(-45deg);
      }
    }
  }
  .van-card__thumb {
    left: 5px;
    image {
      width: 128PX; /*px*/
      border-radius: 5px;
      height: 100%;
    }
  }

  .card-price {
    margin-top: 0px;
  }
}
</style>
