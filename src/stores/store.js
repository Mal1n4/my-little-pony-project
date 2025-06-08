import { defineStore } from 'pinia'
export const PonyStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Рецепты',
        fetchdata: null,
        aradata: [
            {   
                save_status: 0,
                id: 0,
                name: 'Эггног',
                alias: '(Шотландская версия гоголя-моголя)',
                link: '/eggnog',
                img: '/src/assets/recipes/eggnog.png',
                time: 'Приготовление займёт 15 минут',
                ingredients: [
                    'На 8 порций тебе понадобится:',
                    'Яичный желток -  4 штуки',
                    'Сахар - 100 г',
                    'Молоко - 400 мл',
                    'Корица - щепотка',
                    'Сливки 35%-ные - 200 мл',
                    'Гвоздика - 2 штуки',
                    'Мускатный орех - 1 чайная ложка',
                    'Ванильный экстракт - 1 чайная ложка',
                    'Яичный белок - 4 штуки'
                ],
                cooking: [
                    'В большой емкости взбей желтки венчиком или миксером, пока они не станут светлее. Медленно добавь сахар. Хорошо все взбей.',
                    'Смешай молоко, гвоздику и корицу в кастрюле с толстым дном. Медленно вари на среднем огне, пока смесь не станет горячей, но не кипящей.',
                    'Смешай молоко с яйцами. Вари всю смесь на среднем огне, не допуская кипения. Сними с огня, добавь сливки.',
                    'Процеди через сито, чтобы убрать гвоздику. Остуди.',
                    'Добавь ванильный экстракт, мускатный орех.'
                ],
                episode_name: 'День очага',
                episode: 'Сезон 6, серия 8',
                episode_img: '/src/assets/recipes/eggnog_ep.png',
                episode_comment: [
                    'А вот и серия, в которой пони пьют гоголь-моголь! Попробуй и ты!',
                    'Старлайт Глиммер не хочет праздновать День Горящего Очага, и Искорка пытается доказать ей, почему этот праздник так важен, прочитав свою любимую историю — сказку о Сноуфолл Фрост.'
                ],
                fact: [
                    'Сюжет эпизода основан',
                    'на повести Чарльза Дикенса',
                    '"Рождественская песнь в прозе"',
                ],
                comments:[
                    
                ]
            },
            {
                save_status: 0,
                id: 1,
                name: 'Сапфировые кексики',
                link: '/sapphire-cakes',
                img: '/src/assets/recipes/sapcakes.png',
                time: 'Приготовление займёт 2 часа',
                ingredients: [
                    'На 12 порций тебе понадобится:',
                    'Смесь для кекса - 500 г',
                    'Сливочное масло - 200 г',
                    'Сахарная пудра - 350 г',
                    'Молоко - 100 мл',
                    'Голубые леденцы - 15 шт',
                    'Ваниль',
                    'Красный краситель',
                    'Голубой краситель'
                ],
                cooking: '',
                episode: null,
            },
            {
                save_status: 0,
                id: 2,
                name: 'Апельсиново-клюквенный пунш',
                link: '/punch',
                img: '/src/assets/recipes/punch.png',
                time: 'Приготовление займёт 10 минут',
                ingredients: [
                    'На 12 порций тебе понадобится:',
                    'Клюквенный сок - 3 стакана',
                    'Апельсиновый сок - 3 стакана',
                    'Вода - ¾ стакана',
                    'Молотая корица - ½ столовые ложки',
                    'Молотый имбирь - ½ столовые ложки',
                    'Молотый мускатный орех - щепотка',
                    'Апельсины - 2 штуки',
                    'Сахар - ⅓ стакана',
                    'Свежая клюква - 100 г',
                    'Мята - по вкусу'
                ],
                cooking: '',
                episode: null,
            },
        ],
    }),
    actions: {
            async getApidata() {
                const response = await fetch(
                    `https://ponyapi.net/v1/episode/all`
                );
                const result = await response.json();
                this.fetchdata=result;
                this.aradata[1].episode=result.data[35].image;

                console.log(this.fetchdata)
            },
            sendmessage() {
                //  создаем объект который необходимо направить по api
                let User = {
                    name: this.username,
                    username: this.age,
                    email: this.email,
                    phone: this.password1,
                    website: this.fav_pony,
                };
                
                //  указываем адрес
                fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                // преобразуем наш объект в json формат
                    body: JSON.stringify({
                        User
                    }),
                // устанавливаем заголовки в котором будет написано что форма json
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => console.log(response.json()))
            },
            statusUpdate(item){
                item.save_status = (item.save_status + 1) % 2;
            },
    }
})
