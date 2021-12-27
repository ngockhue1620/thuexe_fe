<template>
  <div class="paking">
    <PakingItem
      v-for="(item, index) in danhSachXe"
      :key="index"
      :item="item"
      :thueXe="thueXe"
      :num="index"
    />
  </div>
</template>

<script>
import PakingItem from "./PakingItem.vue";
export default {
  components: {
    PakingItem,
  },
  props: {
    thueXe: {
      type: Function,
    },
    danhSachXe: {
      type: Array,
    },
  },
  data() {
    return {
      paking: [],
    };
  },
};
</script>

<style>
.paking {
  align-self: flex-end;
  border: 1px solid;
  width: 800px;
  height: 500px;
  overflow: scroll;
}
</style>