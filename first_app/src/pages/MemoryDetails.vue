<template>
    <base-layout :title="loadMemory.title" default-page="/memories">
        <h2 v-if="!loadMemory">Could not find a memory for the given id.</h2>
        <h2 v-else>{{loadMemory.description}}</h2>
    </base-layout>
</template>

<script>
import BaseLayout from '../components/Base/base-layout'
export default {
    components:{
        BaseLayout
    },
    computed:{
        loadMemory(){
            return this.$store.getters.getMemorie(this.memoryId)
        }
    }, 
    data(){
        return{
            memoryId: null
        }
    },
    created(){
        this.memoryId = this.$route.params.id
    }
}
</script>

<style>

</style>