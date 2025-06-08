<template>
    <div class="email-popup" v-show="isVisible">
        <div class="close-string">
            <img class="close" src="../assets/buttons/close.png" @click="toggleVisibility" alt="Закрыть">
        </div>
        <h2 class="d-flex justify-content-center ">У тебя новое письмо</h2>
        <div class="main-content">
            <div class="spike-msg">Проверь почту, указанную при регистрации и перейди по ссылке, чтобы подтвердить свою страничку!</div>
            <div class="big-ellipse d-flex justify-content-end">-</div>
            <div class="small-ellipse">-</div>
            <img class="spike-email" src="../assets/ponies/spike_email.png" width="155px" height="181px">
        </div>
        <div class="d-flex justify-content-center enter-button" @click="toggleVisibility">хорошо</div>
    </div>
</template>

<style scoped>
.big-ellipse{
    position: relative;
    left: 15%;
    color: white;
    background-color: white;
    width: 31px;
    height: 30px;
    border-radius: 30px;
}

.small-ellipse{
    position: relative;
    left: 25%;
    color: white;
    background-color: white;
    width: 13px;
    height: 14px;
    border-radius: 10px;
    font-size: 1px;
}

.spike-msg{
    background-color: white;
    width: 263px;
    height: 115px;
    border-radius: 30px;
    font-size: 16px;
    padding: 10px;
}

.spike-email{
    position: relative;
    left: 33%;
    margin-top: -30px;
    margin-bottom: 45px;
}

.main-content{
    font-family: "Involve Regular", sans-serif;
    color: #525252;
    display: grid;
    justify-items: center;
}

.email-popup{
    background-color: #FFF377;
    display: grid;  
    justify-items: center;
    width: 490px;
    height: 630px;
    border: 20px solid;
    border-image: url(../assets/buttons/border_auth.png) 65;
    border-image-outset: 15px;
    border-radius: 20px;
    font-family: "Celestia Redux", serif;
    color: #525252;
}

.close-string{
    display: flex;
    justify-content: end;
    width: 450px;
    height: 32px;
}

.close{
    width: 31px;
    height: 32px;
}

.close:hover{
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.enter-button{
    background-color: #B9D23D;
    width: 274px;
    height: 79px;
    border-radius: 30px;
    color: white;
    font-size: 32px;
    padding-top: 10px;
}

.enter-button:hover{
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

</style>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>