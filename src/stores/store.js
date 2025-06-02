import { defineStore } from 'pinia'
export const PonyStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Рецепты',
        fetchdata: null,
        aradata: [
            {
                name: 'Эггног',
                alias: '(Шотландская версия гоголя-моголя)',
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
                episode: '/src/assets/recipes/eggnog_ep.png',
            },
            {
                name: 'Сапфировые кексики',
                img: '/src/assets/recipes/sapcakes.png',
                time: 'Приготовление займёт 2 часа',
                ingredients: '',
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

                console.log( this.fetchdata)
            },
            sendmessage() {
                //  создаем объект который необходимо направить по api
                let ContactForm = {
                    title: this.nickname,
                    body: this.msg,

                };
                //  указываем адрес
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                // преобразуем наш объект в json формат
                    body: JSON.stringify({
                        ContactForm
                    }),
                // устанавливаем заголовки в котором будет написано что форма json
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => console.log(response.json()))
            },
    }
})
