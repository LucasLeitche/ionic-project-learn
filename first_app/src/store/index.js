import {createStore} from 'vuex';

const store = createStore({
    state() {
        return{
            memories:[
                {
                    id:'m1',  
                    title: 'A trip into the mountains', 
                    img: 'https://drakensberghikes.com/media/zoo/images/20180708_082635-01_febce962ae19aa71dc8c8449c62de692.jpeg',
                    description: 'Memory one with id 1',     
                },
                {
                    id:'m2',  
                    title: 'Surfing the sea side', 
                    img: 'https://img.redbull.com/images/c_crop,x_0,y_669,h_2227,w_5568/c_fill,w_1680,h_700/q_auto,f_auto/redbullcom/2019/04/16/e04ec246-cd71-40db-8c47-3e9703132959/chasing-the-shot-leroy-bellet-michel-bourez-tahiti',
                    description: 'Feeling the cool breeze', 
                },
                {
                    id:'m3',  
                    title: 'Good eating', 
                    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                    description: 'Really tasty', 
                }
            ]
        }
    },
    mutations:{},
    actions:{},
    getters:{
        getMemories(state){
            return state.memories
        },
        getMemorie(state){
            return (memoryId) => { return state.memories.find((memory)=> memory.id == memoryId)}
        }
    }
});

export default store;