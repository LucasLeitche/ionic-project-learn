<template>
    <base-layout :title="'Melhor do Mundo'">
        <ion-list>
            <ion-item v-for="item in items" :key="item.id" :router-link="`/details/${item.id}`">
                <ion-thumbnail slot="start">
                    <ion-img :src="item.img" :alt="item.title"></ion-img>
                </ion-thumbnail>
                <ion-label>{{item.title}}</ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import BaseLayout from '../components/Base/base-layout'
import {IonList, IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/vue'
export default {
    components: {
        BaseLayout,
        IonList,
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel
    },
    created(){
        console.log(this.$store.getters.getMemories)
    },
    computed:{
        items: function (){
            return this.$store.getters.getMemories
        }
    }
}
</script>
