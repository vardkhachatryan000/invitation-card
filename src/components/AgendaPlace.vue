<template>
  <div class="flex flex-col">
    <a :href="url" class="container flex items-end justify-around mb-3">
      <div class="w-12 overflow-hidden">
        <img :src="getIMGPath(icon)" :alt="image" class="icon">
      </div>
      <div class="flex flex-col border-solid border-r-1/5 border-l-1/5 border-primary px-4">
        <div class="flex items-baseline font-bold text-xl">
          <span>{{ name }}</span>
        </div>
        <a class="flex gap-4 items-center text-xs" :href="url">
          {{ place }}
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m531.692-480-184-184L376-692.308 588.308-480 376-267.692 347.692-296l184-184Z"/></svg>
        </a>
      </div>
      <div class="text-4xl tracking-tighter">{{ time }}</div> 
    </a>
    <div>
      <img :src="getIMGPath(image)" alt="Image">
    </div>
    <map-component :position="position" :name="name"></map-component>
  </div>
</template>

<script>
  import MapComponent from "./MapComponent.vue";
  export default {
    name: "AgendaPlace",
    props: ["icon", "image", "name", "place", "time", "url", 'position', 'keyUrl'],
    methods: {
      getIMGPath(img) {
        return require("../assets/photos/" + img);
      }
    },
    components: {
      MapComponent
    }
  }
</script>

<style>
.icon {
  filter: drop-shadow(0px 100px 0 #a9787c);
  transform: translateY(-100px);
}
</style>