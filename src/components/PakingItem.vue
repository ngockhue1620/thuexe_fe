<template>
  <div class="pakingItem">
    <div style="text-align: center">
      <h5>{{ pakingItem.name }}</h5>
      <strong>{{ pakingItem.address }}</strong>
    </div>
    <div class="bike_container">
      <div
        v-for="bike in pakingItem.paking"
        :key="bike.id"
        class="card"
        style="width: 16rem; margin: 1rem; height: 300px"
      >
        <img
          class="card-img-top img"
          v-if="bike.status"
          :src="bike.image"
          alt="Card image cap"
        />

        <div class="card-body" v-if="bike.status">
          <h5 class="card-title">{{ bike.name }}</h5>
          <button class="btn btn-primary" @click="thueXe(bike, num)">
            Thuê
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    thueXe: {
      type: Function,
    },
    num: {
      type: Number,
    },
  },
  data() {
    return {
      pakingItem: {},
    };
  },
  mounted() {
    this.pakingItem = this.item;
  },
};
</script>

<style>
.pakingItem {
  margin: 2rem;
  border: 3px solid springgreen;
  text-align: center;
}
.bike_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
img {
  height: 200px;
}
</style>