<template>
  <div>
    <intro-component></intro-component>
    <scroll-prompt href="content"></scroll-prompt>
    <content-component></content-component>
  </div>
</template>

<script>
import IntroComponent from "./IntroComponent.vue";
import ContentComponent from "./ContentComponent.vue";
import ScrollPrompt from "./ScrollPrompt.vue";

export default {
  name: 'MainComponent',
  components: {
    IntroComponent,
    ContentComponent,
    ScrollPrompt
  }
}
</script>

<style></style>
