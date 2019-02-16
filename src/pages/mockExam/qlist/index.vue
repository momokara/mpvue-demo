<template>
  <div class="container">
    :current-item-id="current_id"
    <swiper
      @change="swiperChange($event)"
      duration="0"
      @animationfinish="afterchange($event)"
      :current="current"
    >
      <block
        v-for="item in showarray"
        :key="item"
      >
        <swiper-item :item-id="item">
          {{item}}
        </swiper-item>
      </block>
    </swiper>
    <scroll-view
      scroll-x
      style="height: 200px;"
      class="scroll-box"
      @scroll="swiperChange($event)"
      scroll-with-animation="true"
    >
      <block
        v-for="item in showarray"
        :key="item"
      >
        <view
          class="item"
          :item-id="item"
        >
          {{item}}
        </view>
      </block>
    </scroll-view>
    {{current_id}}-{{current}}

    <button @click="goCheck">goCheck</button>
  </div>
</template>
<script>

let testarr = [
  [1, 365],
  [2541, 2640],
  [10923, 10925],
  [10930, 10931],
  [10938, 10962],
  [10964, 10971],
  [10978, 10978],
  [10987, 10995],
  [10998, 11009],
  [11015, 11015],
  [11022, 11034],
  [11046, 11046],
  [11049, 11054],
  [11057, 11078],
  [13474, 13476],
  [13478, 13484],
  [13486, 13504],
  [13595, 13606],
  [13608, 13614]
];
export default {
  data() {
    return {
      showarray: [],
      current_id: "",
      current: 0
    };
  },
  // 使用的 vue 组件
  components: {
    
  },
  // 页面中的方法
  methods: {
    checkIsInArray(array, index) {
      let isIn = -1;
      let i = 0;
      for (const key in array) {
        if (array.hasOwnProperty(key)) {
          const e = array[key];
          if (index >= e[0] && index <= e[e.length - 1]) {
            // console.log(e);
            isIn = i;
            break;
          }
          i++;
        }
      }
      return isIn;
    },
    getBefore(array, index) {
      index = parseInt(index);
      console.log("getBefore", index);
      let before;
      if (this.checkIsInArray(array, index - 1) >= 0) {
        before = index - 1;
        return before;
      }
      if (this.checkIsInArray(array, index) >= 1) {
        let resRange = array[this.checkIsInArray(testarr, index) - 1];
        before = resRange[resRange.length - 1];
        return before;
      }
      console.log("no data");
    },
    getAfter(array, index) {
      index = parseInt(index);
      console.log("getAfter", index);
      let after;
      if (this.checkIsInArray(array, index + 1) >= 0) {
        after = index + 1;
        return after;
      }
      if (this.checkIsInArray(array, index) < array.length - 1) {
        let resRange = array[this.checkIsInArray(testarr, index) + 1];
        after = resRange[0];
        return after;
      }
      console.log("no data");
    },
    goCheck() {
      let res = this.checkIsInArray(testarr, this.index);

      console.log(testarr[res]);
      console.log("getBefore", this.getBefore(testarr, this.index));
      console.log("getAfter", this.getAfter(testarr, this.index));
    },
    swiperChange(e) {
      console.log(e.mp.detail);
      let sildeDir = e.mp.detail.currentItemId - this.current_id;
      if (sildeDir > 0) {
      } else if (sildeDir < 0) {
      }
      let _after = this.getAfter(
        testarr,
        this.showarray[this.showarray.length - 1]
      );
      // this.showarray.push(...[_after]);
      let _before = this.getBefore(testarr, this.showarray[0]);
      // this.showarray.unshift(_before);
    },
    afterchange(e) {
      // console.log(e.mp.detail.currentItemId);
      if (e.mp.detail.source == "touch") {
        // this.current = this.current + 1;
      }

      // this.current_id = e.mp.detail.currentItemId;
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
    for (let index = 0; index <= 1330; index++) {
      this.showarray.push(index);
    }
  },

  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  }
};
</script>


<style lang="scss">
.scroll-box {
  white-space: nowrap;
  .item {
    display: inline-block;
    width: 100%;
    border: 1px solid #ddd;
  }
}
</style>
