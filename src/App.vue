<script setup>
import CommonHeader from "@/components/commonHeader.vue";
import CommonFooter from "@/components/commonFooter.vue";
import MainContainer from "@/components/mainContainer.vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <common-header v-if="route.name !== 'login'"/>
  <main-container/>
  <common-footer v-if="route.name !== 'login'"/>
</template>

<style scoped lang="scss">

</style>
