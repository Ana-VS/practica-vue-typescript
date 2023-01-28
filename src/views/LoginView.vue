<template>
    <div class="container">
        <div class="brand-logo"></div>
        <div class="brand-title">VueShop</div>
        <div class="inputs">
            <label>EMAIL</label>
            <input type="email" placeholder="example@test.com" />
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />
            <custom-button type="submit" class="button">
                <span>Log In</span>
                <template v-slot:icon><span>✔</span></template>            
            </custom-button>   
        </div> 
    </div>   
</template>

<script lang="ts">
import  {defineComponent} from 'vue';

import CustomButton from '../components/CustomButton.vue';

export default defineComponent({
    name:'LoginView',
    components: {
        CustomButton,
    }
})
</script>

<style scoped>
input {
  caret-color: #35495e;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #ecf0f3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: 'Roboto' sans-serif;
}

.container {
  position: relative;
  margin: 50px auto;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}

.brand-logo {
  height: 100px;
  width: 100px;
  background: url('../assets/logoMini.png');
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
}

.brand-title {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #41b883;
  letter-spacing: 1px;
  text-align: center;
}

.inputs {
  text-align: left;
  margin-top: 30px;
}

label, input, button {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

label {
  margin-bottom: 4px;
}

label:nth-of-type(2) {
  margin-top: 12px;
}

input::placeholder {
  color: gray;
}

input {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}

.button {
  height: 50px;
  box-sizing: border-box;
  margin-top: 30px;
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
}
</style>