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

      <label style="text-align: center">Nhập vào mã xe</label>

      <input
        type="text"
        class="form-control"
        style="margin-top: 2rem"
        id="basic-url"
        v-model="bike_id"
        aria-describedby="basic-addon3"
      />

      <button class="btn btn-primary" @click="quetThe">Xác Nhận</button>
      <button v-if="xe.id" class="btn btn-primary" style="margin-top: 20px" @click="traxe">Trả</button>
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
      thue: true,
      xe: {},
      card_id: "",
      bike_id: "",
      paking: [],
      num: 0,
    };
  },

  methods: {
    thueXe(value, num) {
      this.thue = true;
      this.xe = value;
      this.num = num;
    },
    async quetThe() {
      await axios
        .get(`http://127.0.0.1:8000/api/card/tim/?bike=${this.bike_id}&card=${this.card_id}`)
        .then((response) => {
          console.log(response);
          if(response.data.error){
            alert(response.data.mess);
          } else {
            this.xe = response.data
          }
          // if (!response.data.error) {
          //   const index = this.paking[this.num].paking.findIndex(
          //     (item) => item.id === this.xe.id
          //   );
          //   console.log(index);
          //   this.paking[this.num].paking[index].status = false;
          // }
          // alert(response.data.mess);
        })
        .catch((e) => {
          console.log(e);
        });
    },
     async traxe() {
      await axios
        .get(`http://127.0.0.1:8000/api/card/tra/?bike=${this.bike_id}&card=${this.card_id}`)
        .then((response) => {
          console.log(response);
          if(!response.data.error){
            alert(response.data.mess);
          } else {
            this.xe = response.data
          }
          
        })
        .catch((e) => {
          console.log(e);
        });
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
