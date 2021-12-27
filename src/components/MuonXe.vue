<template>
  <div class="main">
    <BaiXe :thueXe="thueXe" :danhSachXe="paking" />
    <div v-show="thue" class="card" style="width: 30%">
      <label style="text-align: center">Mời Bạn Quẹt Thẻ</label>

      <input
        type="text"
        class="form-control"
        style="margin-top: 2rem"
        id="basic-url"
        v-model="card_id"
        aria-describedby="basic-addon3"
      />
      <button class="btn btn-primary confirm" @click="quetThe">Xác Nhận</button>
      <div class="card" style="width: 18rem; margin: auto">
        <img class="card-img-top" :src="xe.image" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">Tên xe: {{ xe.name }}</p>
          <p>Mã xe: {{ xe.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaiXe from "./BaiXe.vue";
import axios from "axios";
export default {
  name: "Hello",
  components: {
    BaiXe,
  },

  data() {
    return {
      thue: false,
      xe: {},
      card_id: "",
      paking: [],
      num: 0,
    };
  },

  methods: {
    async quetThe() {
      const data = {
        card: this.card_id,
        bike: this.xe.id,
      };
      await axios
        .post("http://127.0.0.1:8000/api/card/thue/", data)
        .then((response) => {
          console.log(response);
          if (!response.data.error) {
            const index = this.paking[this.num].paking.findIndex(
              (item) => item.id === this.xe.id
            );
            console.log(index);
            this.paking[this.num].paking[index].status = false;
          }
          alert(response.data.mess);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    thueXe(value, num) {
      this.thue = true;
      this.xe = value;
      this.num = num;
    },
    async fetchPaking() {
      await axios
        .get("http://127.0.0.1:8000/api/bike/paking/")
        .then((response) => {
          console.log(response);
          this.paking = response.data;
          console.log(this.paking);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.fetchPaking();
  },
};
</script>

<style  scoped>
.main {
  display: flex;
  justify-content: space-between;
}
.confirm {
  margin: auto;
  width: 100px;
  text-align: center;
}
</style>
