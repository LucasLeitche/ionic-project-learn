<template>
    <ion-page>
        <ion-header >
            <ion-toolbar>
                <ion-title>All Memories</ion-title>
            </ion-toolbar>
        </ion-header> 
        <ion-content>
            <ion-list>
                <ion-item>Max</ion-item>
                <ion-item>Manuel</ion-item>
                <ion-item>Jully</ion-item>
                <ion-item>Jorge</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonList, IonItem} from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonList,
        IonItem
    }
}
</script>
