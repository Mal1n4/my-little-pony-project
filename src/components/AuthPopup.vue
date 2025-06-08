<template>
    <div class="auth" v-show="isVisible">
        <div class="close-string">
            <img class="close" src="../assets/buttons/close.png" @click="toggleVisibility" alt="Закрыть">
        </div>
        <h2 class="d-flex justify-content-center ">Авторизация</h2>
        <div class="main-action">
            <input type="email" id="validationMail" class="form-control" placeholder="e-mail" required />
            <input type="password" id="validationPwd" class="form-control" placeholder="пароль" required />
            <h5 class="main-questions">Не помнишь пароль?</h5>
            <RouterLink to="/sign-up"><h5 class="main-questions">Регистрация</h5></RouterLink>
        </div>
        <div class="d-flex justify-content-center enter-button">войти</div>
    </div>
</template>

<style scoped>
.main-action{
    font-family: "Involve Regular", sans-serif;
    color: #525252;
}

.form-control{
    background-color: #EAFF86;
    width: 408px;
    height: 81px;
    border: none;
    margin-bottom: 30px;
    border-radius: 30px;
    box-shadow: inset 1px 1px rgba(0, 0, 0, 0.25);
}

.auth{
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

.router-link-exact-active,
.router-link-active {
  color: inherit; 
  text-decoration: none; 
}

a {
  color: inherit; 
  text-decoration: none; 
}

.main-questions:hover{
    color: #000000;
}

</style>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>