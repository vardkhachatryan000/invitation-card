<template>
  <div>
    <intro-component></intro-component>
    <content-component></content-component>
    <form-component></form-component>
  </div>
</template>

<script>
import IntroComponent from "./IntroComponent.vue";
import ContentComponent from "./ContentComponent.vue";
import FormComponent from "./Form.vue";

export default {
  name: 'MainComponent',
  components: {
    IntroComponent,
    ContentComponent,
    FormComponent
  },
  data() {
    return {
      mapUrl: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDT5tYgSLeibzZQJblvhoEiWm9gCt0JBmo`
    }
  },
  created() {
    const script = document.createElement('script');
    script.src = this.mapUrl;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}
</script>
