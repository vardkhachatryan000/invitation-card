<template>
  <div>
    <intro-component></intro-component>
    <content-component></content-component>
  </div>
</template>

<script>
import IntroComponent from "./IntroComponent.vue";
import ContentComponent from "./ContentComponent.vue";

export default {
  name: 'MainComponent',
  components: {
    IntroComponent,
    ContentComponent
  }
}
</script>

<style></style>
