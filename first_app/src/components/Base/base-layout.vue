<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start"> <!--Usado slot para caso desejado utilizar mais de um botão no header-->
                    <ion-back-button :default-href="defaultPage" ></ion-back-button>
                </ion-buttons>
                <ion-title>{{title}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonBackButton} from '@ionic/vue'
export default {
    props: {
        title:{
            type:String
        },
        defaultPage:{
            type: String
        }
    },
    components:{
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonButtons,
        IonBackButton
    }
}
</script>

<style>

</style>