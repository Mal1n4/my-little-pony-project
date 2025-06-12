<template>
  <div class="main-content">
    <div class="d-flex hello">
        <div class="flex-fill justify-content-center card">
            <div class="name text-center p-4">
              <h3>{{ store.aradata[0].episode_name }} </h3>
              <h3>{{ store.aradata[0].episode }} </h3>
            </div>
            <div class="d-flex justify-content-center">
              <img class="photo" :src="store.aradata[0]['episode_img']" alt="Скриншот из серии" width="656px" height="369px">
            </div>
            <div class="episode-comment">
                <li v-for="comment in store.aradata[0].episode_comment" class="py-2">
                    {{ comment }}
                </li>
            </div>
        </div>
    </div>
    <div class="fact">
      <img class="cloud" src="../assets/recipes/cloud.png" alt="Облако" width="446px" height="468px">
      <div class="fact-text">
        <h3 class="pink-text">Интересный факт</h3>
        <li v-for="item in store.aradata[0].fact" >
                    <h5>{{ item }}</h5>
        </li>
      </div>
    </div>
    <img class="rainbow" src="../assets/ponies/rainb_eggnog.png" alt="Радуга в костюме" width="362px" height="221px">
    <div class="d-flex">
          <div class="flex-fill justify-content-center card">
            <div class="name text-center p-4">
              <h3>{{ store.aradata[0].name }} </h3>
              <h3>{{ store.aradata[0].alias }} </h3>
            </div>
            <div class="d-flex justify-content-center">
              <img class="photo" :src="store.aradata[0]['img']" alt="Изображение готового рецепта" width="352px" height="340px">
            </div>
            <div>
              <span class="time d-flex"><img src="../assets/pictos/clocks.png" alt="Часы" width="42px" height="37px"><p class="w-auto">{{ store.aradata[0].time }}</p></span>
              <span class="ingredients d-flex"><img src="../assets/pictos/book.png" alt="Открытая книга" width="52px" height="59px"><div><li v-for="ingr in store.aradata[0].ingredients">
                {{ ingr }}
              </li></div></span>
              <span class="cooking d-flex"><img src="../assets/pictos/cook.png" alt="Венчик и поварской колпак" width="76px" height="49px"><div><li v-for="step in store.aradata[0].cooking" class="py-2">
                {{ step }}
              </li></div></span>
            </div>
            <span class="btns d-flex"><div class="saves"><img class="save" src="../assets/buttons/save.png" alt="Сохранить" width="173px" height="29px"><img @:click="store.statusUpdate(store.aradata[0]); buttonUpdate(store.aradata[0])" class="save_hover" src="../assets/buttons/save_hover.png" alt="Сохранить" width="173px" height="29px"></div>
              <div class="print"><img class="typewr" src="../assets/buttons/print.png" alt="Печать" width="173px" height="29px"><img class="typewr_hover" src="../assets/buttons/print_hover.png" alt="Печать" width="173px" height="29px"></div></span>
          </div>
        </div>
        <div class="discuss">
          <h2 class="m-4">Обсуждение</h2>
        </div>
        <div class="msg-form">
          <span class="d-flex"><img class="avatar" src="../assets/ava.jpg" alt="Аватар профиля" width="88px" height="55px">
            <div class="user-comment">
              <textarea class="input input-textarea" name="comment" cols="37" rows="2" placeholder="Поделись своим впечатлением о рецепте" style="overflow: hidden; border: none;"></textarea>
              <img class="send" src="../assets/buttons/send.png" alt="Отправить" width="173px" height="29px" @click="Popup">
            </div>
          </span>
        </div>
        <div class="comments">

        </div>  
  </div>
  <Auth v-show="Visible" class="popup"></Auth>
</template>

<style scoped>
.popup{
  position: fixed;
  left: 33%;
  top: 5%; 
  box-shadow: 1px 1px 100px 100px rgba(118, 133, 40, 0.2);
}

.avatar{
  margin-left: 55px;
  margin-top: 25px;
}

.user-comment{
  margin-top: 25px;
  margin-left: 55px;
  margin-bottom: 25px;
}

textarea:focus{
  outline: none;
}

.fact{
  position: absolute;
  top: 850px;
  z-index: 1;
  left: 150px;
}

.pink-text{
  color: #E13181;
}

.fact-text{
  width: 316px;
  display: grid;
  text-align: center;
  font-family: "Celestia Redux", serif;
  position: relative;
  bottom: 315px;
  left: 75px;
  rotate: 5deg;
  list-style-type: none; 
}

.episode-comment{  
  font-family: "Involve Medium", sans-serif;
  color: #525252;
  max-width: 437px;
  margin-left: 16%;
  margin-top: 45px;
  margin-bottom: 55px;
  list-style-type: none; 
}

.photo{
  border: 20px solid;
  border-image: url(../assets/recipes/img_sticker.png) 100;
}

.rainbow{
  position: absolute;
  right: 7%;
  top: 1113.5px;
  z-index: 1;
}

.btns{
  margin-bottom: 55px;
  margin-left: 15.4%;
  gap: 98px;
}

.saves .save_hover {
 display: none;
}

.saves:hover .save {
 display: none
}

.saves:hover .save_hover {
 display: inline;
 border-radius: 4px;
 box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.msg-form{
  background-color: #FFFFFF;
  height: auto;
  margin-bottom: 20px;
  width: 656px;
  border-radius: 30px;
  font-family: "Involve Regular", sans-serif;
  color: #525252;
  min-height: 120px;
}

.send:hover{
 border-radius: 4px;
 box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25); 
}

.print .typewr_hover {
 display: none;
}

.print:hover .typewr {
 display: none
}

.print:hover .typewr_hover {
 display: inline;
 border-radius: 4px;
 box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.discuss{
  background-color: #ADFBFE;
  height: auto;
  margin-bottom: 55px;
  width: 656px;
  border: 20px solid;
  border-image: url(../assets/recipes/border.png) 30;
  border-image-outset: 10px;
  text-align: center;
  font-family: "Celestia Redux", serif;
  color: #60549B;
}

.name{
  font-family: "Celestia Redux", serif;
  color: #525252;
  list-style-type: none; 
}

.card{
  background-color: #FFD863;
  margin-bottom: 110px;
  min-width: 676px;
  width: 100%;
  border: 20px solid;
  border-image: url(../assets/recipes/card_border.png) 30;
  border-image-outset: 10px;
  border-radius: 30px;
}

.main-content{
  margin-top: 110px;
  display: grid;
  place-items: center;
}

.time{
  margin-top: 60px;
  margin-bottom: 40px;
  margin-left: 15.4%;
  gap: 20px;
  font-family: "Involve Medium", sans-serif;
  color: #525252;
}

.ingredients{
  margin-bottom: 40px;
  margin-left: 14%;
  gap: 20px;
  font-family: "Involve Medium", sans-serif;
  color: #525252;
  list-style-type: none; 
}

.cooking{
  margin-bottom: 40px;
  margin-left: 12%;
  gap: 9px;
  font-family: "Involve Medium", sans-serif;
  color: #525252;
  list-style-type: none; 
  max-width: 405px;
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

@media (max-width: 1400px){
  .rainbow{
    position: absolute;
    right: 3%;
    top: 900px;
    z-index: 1;
  }

  .fact{
    position: initial;
    margin-bottom: -140px;
    top: 830px;
    z-index: 1;
    left: 0px;
  }

}

@media (max-width: 700px){
  .hello{
    margin-top: 110px;
  }

  .card {
    min-width: 300px;
    width: 100%;
  }

  .card img{
    max-width: 550px;
    height: auto;
  }

  .card .ingredients img{
    height: 60px;
    width: auto;
  }

  .card .cooking img{
    height: 47px;
    width: auto;
  }

  .main-content {
    margin-top: 66px;
    overflow-x: hidden;
    display: contents;
  }

  .discuss{
    width: 100%;
  }

  .msg-form{
    width: 100%;
  }

}

@media (max-width: 576px){
  .hello{
    margin-top: 66px;
  }

  .fact{
    position:initial;
    margin-top: -15%;
    margin-bottom: -40%;
    margin-left: 0%;
  }

  .card {
    min-width: 300px;
    width: 100%;
    margin-bottom: 66px;
    border: inset 10px solid;
    border-image: url(../assets/recipes/card_border.png) 200;
    border-image-outset: 0px;
    border-radius: 30px;
  }

  .card img{
    max-width: 300px;
  }

  .card .ingredients img{
    height: 44px;
    width: auto;
  }

  .card .cooking img{
    height: 36px;
    width: auto;
  }

  .msg-form{
    min-width: 300px;
    width: 100%;
    margin-bottom: 66px;
    border: inset 10px solid;
    border-image: url(../assets/recipes/card_border.png) 200;
    border-image-outset: 0px;
    border-radius: 30px;
    font-size: 12px;
  }

  .msg-form .send{
    width: 90px;
    height: auto;
  }

  .discuss{
    min-width: 300px;
    width: 100%;
    margin-bottom: 20px;
    border: inset 10px solid;
    border-image: url(../assets/recipes/border.png) 200;
    border-image-outset: 0px;
  }

  h2, h3{
    font-size: 22px;
  }

  .photo {
    width: auto;
    height: 200px;
  }

  .btns{
    margin-bottom: 30px;
  }

  .btns img{
    width: 90px;
    height: auto;
  }

  .episode-comment li{
    font-family: "Involve Medium", sans-serif;
    color: #000000;
  }

  .time{
    margin-top: 40px;
    margin-bottom: 25px;
    gap: 20px;
    font-family: "Involve Medium", sans-serif;
    color: #000000;
  }

  .ingredients{
    margin-bottom: 40px;
    font-family: "Involve Medium", sans-serif;
    color: #000000;
  }

  .cooking{
    max-width: 300px;
  }

  .time p, .ingredients li, .cooking li, .episode-comment li{
    font-size: 12px;
    color: #000000;
  }

  .time img{
    width: 30px;
    height: 30px;
  }

  .ingredients img{
    width: 35px;
    height: 40px;
  }

  .cooking img{
    width: 60px;
    height: 35px;
  }

  .rainbow {
    display: none;
  }

  .avatar{
    width: auto;
    height: 30px;
  }

  .main-content {
    margin-top: 66px;
    overflow-x: hidden;
    display: contents;
  }
  
  .popup{
    position: fixed;
    left: 19%;
    top: 5%; 
    box-shadow: 1px 1px 100px 100px rgba(118, 133, 40, 0.2);
    z-index: 2;
  }

}
</style>

<script setup>
  import Auth from '../components/AuthPopup.vue' 
  import { PonyStore } from '../stores/store.js'
  const store = PonyStore()

  const buttonUpdate = (item) => {
    if(item.save_status){
    document.getElementsByClassName("save")[item.id].src = "/src/assets/buttons/saved.png"; //id рецепта должно совпадать с позицией на странице (т.е. с порядковым номером элемента класса на странице)
    document.getElementsByClassName("save_hover")[item.id].src = "/src/assets/buttons/delete.png";
    }
    else{
      document.getElementsByClassName("save")[item.id].src = "/src/assets/buttons/save.png";
      document.getElementsByClassName("save_hover")[item.id].src = "/src/assets/buttons/save_hover.png";
    }
  };

  import { onMounted } from 'vue';

  onMounted(() => {
    let l = document.getElementsByClassName("save").length;
      for (let i = 0; i < l; i++){
        buttonUpdate(store.aradata[i]);
      }
    }
  );

  import { ref } from 'vue';

  const Visible = ref(false);

  const Popup = () => {
    Visible.value = !Visible.value;
  };
</script>
