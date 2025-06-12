<template>
    <div class="main-content">
        <img class="pinkie-baloons" src="../assets/ponies/pinkie_baloons.png" alt="Пинки Пай на шариках" width="266" height="370">
        <div class="hello">
            <h2 class="m-4">Давай знакомиться!</h2>
            <h3 class="m-4">Расскажи немного о себе, <br> заполнив анкету нашей с тобой дружбы!</h3>
        </div>
        <div class="signup-form d-grid justify-content-center">
            <span class="input-title">Как тебя зовут?</span>
            <input type="text" v-model="store.username">
            <span class="input-title">Сколько тебе лет?</span>
            <input type="text" v-model="store.age">
            <span class="input-title">Какой у тебя адрес электронной почты?</span>
            <input type="email" v-model="store.email">
            <span class="input-title">Придумай кодовое слово</span>
            <input type="password" v-model="store.password1">
            <span class="input-title">Напиши слово ещё раз</span>
            <input type="password">
            <span class="input-title">Твоя любимая пони?</span>
            <input type="text" v-model="store.fav_pony">
            <div class="d-grid agree-click" @:click="store.agreeStatusUpdate(); agreeUpdate()" style="width: 494px;"><img class="agree-place" src="../assets/buttons/marker_place.png" alt="Подтвердить" width="40px" height="40px"><div class="yes">О</div><div class="warning">Эта информация будет видна разработчику</div></div>
            <div class="send-form-button" @:click="store.sendmessage(); Popup()">Отправить</div>
        </div>
        <img class="meet" src="../assets/ponies/meet_sticker.png" alt="Пинки Пай обнимает Рарити" width="253" height="218">
    </div>
    <EmailPopup v-show="Visible" class="popup"></EmailPopup>
</template>

<style scoped>
.yes{
    position: absolute;
    padding-left: 7px;
    margin-top: -3px;
    color: #770803;
    font-family: "Involve Medium";
    font-size: 30px;
    display: none;
}

.agree-place:hover{
    box-shadow: inset 0px 0px 5px 0 rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.popup{
  position: fixed;
  left: 33%;
  top: 5%; 
  box-shadow: 1px 1px 100px 100px rgba(118, 133, 40, 0.2);
}

.meet{
    position: absolute;
    right: 75%;
    top: 1559px;
}

.pinkie-baloons{
    position: absolute;
    left: 75%;
    top: 200px;
    z-index: 1;
}

.warning{
    margin-left: 44px;
    font-size: 20px;
}

.send-form-button{
    background-color: #DFC168;
    width: 274px;
    height: 79px;
    border-radius: 30px;
    display: grid;
    padding-top: 12px;
    justify-items: center;
    margin-bottom: 40px;
    font-size: 30px;
    color: #525252;
}

.send-form-button:hover {
    background-color: #770803;
    color: #FFF8E0;
}

input{
    width: 495px;
    height: 61px;
    border: 10px solid;
    border-image: url(../assets/buttons/border_form.png) 30;
    border-image-outset: 5px;
    border-radius: 30px;
    background-color: #FFF8E0;
    margin-bottom: 30px;
}

input:focus{
    outline: none;
}

.signup-form{
    display: grid;
    justify-items: center;
    background-color: #FFF8E0;
    width: 656px;
    height: 1263px;
    border-radius: 30px;
    outline: 10px #DFC168 solid;
    outline-offset: -10px;
    font-size: 30px;
    padding-top: 55px;
}

.main-content{
  margin-top: 110px;
  display: grid;
  place-items: center;
  font-family: "Celestia Redux", serif;
  color: #525252;
}

.hello{
  background-color: #FFD863;
  height: auto;
  margin-bottom: 110px;
  width: 656px;
  border: 20px solid;
  border-image: url(../assets/recipes/border.png) 30;
  border-image-outset: 10px;
  text-align: center;
}

@media (max-width: 1000px){
    .pinkie-baloons{
        display: none;
    }

    .meet{
        position: inherit;
        margin-top: 66px;
        top: 1559px;
    }
    
    .popup{
        left: 15%;
    }
}

@media (max-width: 700px){
    .hello {
        min-width: 300px;
        width: 100%;
        margin-bottom: 66px;
        border: inset 10px solid;
        border-image: url(../assets/recipes/border.png) 200;
        border-image-outset: 0px;
        border-radius: 30px;
    }

    .signup-form{
        min-width: 300px;
        width: 100%;
        font-size: 22px;
    }
}

@media (max-width: 576px){
    .hello {
        min-width: 300px;
        width: 100%;
        margin-top: 66px;
        margin-bottom: 66px;
        border: inset 10px solid;
        border-image: url(../assets/recipes/border.png) 200;
        border-image-outset: 0px;
        border-radius: 30px;
    }

    .signup-form{
        min-width: 300px;
        width: 100%;
        font-size: 22px;
    }

    input{
        width: calc(100% - 200px);
        height: 30px;
        border: 5px solid;
        border-image: url(../assets/buttons/border_form.png) 30;
        border-image-outset: 5px;
        border-radius: 30px;
        background-color: #FFF8E0;
        margin-bottom: 30px;
    }

    .warning{
        margin-left: 20px;
        font-size: 18px;
    }    

    .hello h2, h3{
        font-size: 22px;
    }

    .main-content {
        margin-top: 66px;
        overflow-x: hidden;
        display: contents;
    }

    .agree-click{
        justify-items: center;
    }

    .pinkie-baloons{
        position: inherit;
        margin-top: 66px;
    }

    .meet{
        position: inherit;
        margin-top: 66px;
        top: 1559px;
    }
    .popup{
        left: 20%;
    }
}
</style>

<script setup>
import EmailPopup from "../components/EmailPopup.vue";

import { ref } from 'vue';

const Visible = ref(false);

const Popup = () => {
    if(store.agree){
        Visible.value = !Visible.value;
    }
};

import { PonyStore } from '../stores/store.js';
const store = PonyStore();

const agreeUpdate = () => {
    if(store.agree){
        document.getElementsByClassName("yes")[0].style = "display: block;";
    }
    else{
        document.getElementsByClassName("agree-place")[0].src = "/src/assets/buttons/marker_place.png";
        document.getElementsByClassName("yes")[0].style = "display: none;";
    }
};

import { onMounted } from 'vue';

onMounted(() => {
    agreeUpdate();
}
);
</script>