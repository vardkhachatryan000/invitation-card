<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <button class="modal-default-button text-2xl" @click.prevent="$emit('close')">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#969696"/>
                    </svg>
                </button>
              </div>
              <div class="modal-body text-center text-gray-800 text-2xl">
                <div v-if="mode" class="w-full flex flex-col justify-center items-center gap-9">
                    <!-- <img src="../assets/photos/heart-smiley-emoji.png" alt="Smiley emoji" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="180" height="180" viewBox="0 0 256 256" xml:space="preserve">

                        <defs>
                        </defs>
                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                            <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,202,40); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                            <path d="M 82.583 20.258 C 84.779 25.758 86 31.752 86 38.035 C 86 64.525 64.525 86 38.035 86 c -6.283 0 -12.277 -1.221 -17.777 -3.417 C 27.358 87.266 35.858 90 45 90 c 24.853 0 45 -20.147 45 -45 C 90 35.858 87.266 27.358 82.583 20.258 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,182,34); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 45 69.345 c -7.954 0 -15.337 -3.969 -19.751 -10.617 c -0.611 -0.92 -0.36 -2.162 0.56 -2.772 c 0.92 -0.613 2.162 -0.36 2.772 0.56 c 3.671 5.529 9.809 8.83 16.419 8.83 c 6.61 0 12.748 -3.301 16.419 -8.83 c 0.61 -0.921 1.85 -1.173 2.772 -0.56 c 0.92 0.61 1.171 1.853 0.56 2.772 C 60.337 65.376 52.953 69.345 45 69.345 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 18.789 34.942 c -1.408 -2.13 -1.174 -5.025 0.701 -6.901 v 0 c 2.143 -2.143 5.616 -2.143 7.759 0 l 1.188 1.188 c 0.311 0.311 0.815 0.311 1.126 0 l 1.188 -1.188 c 2.143 -2.143 5.616 -2.143 7.759 0 v 0 c 1.875 1.875 2.109 4.769 0.703 6.898 l -1.837 1.995 l -0.617 0.617 l -7.23 7.23 c -0.292 0.292 -0.765 0.292 -1.057 0 l -7.23 -7.23 l 0 0 l -0.618 -0.618 L 18.789 34.942 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(239,41,41); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 50.789 34.942 c -1.408 -2.13 -1.174 -5.025 0.701 -6.901 v 0 c 2.143 -2.143 5.616 -2.143 7.759 0 l 1.188 1.188 c 0.311 0.311 0.815 0.311 1.126 0 l 1.188 -1.188 c 2.143 -2.143 5.616 -2.143 7.759 0 v 0 c 1.875 1.875 2.109 4.769 0.703 6.898 l -1.837 1.995 l -0.617 0.617 l -7.23 7.23 c -0.292 0.292 -0.765 0.292 -1.057 0 l -7.23 -7.23 l 0 0 l -0.618 -0.618 L 50.789 34.942 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(239,41,41); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        </g>
                    </svg>
                    <div>
                        Ուռա՜
                        <div class="text-sm">Սիրով կսպասենք</div>
                    </div>
                </div>
                <div v-else class="w-full flex flex-col justify-center items-center gap-9">
                    <!-- <img src="../assets/photos/sad-emoji.png" alt="Sad emoji" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="180" height="180" viewBox="0 0 256 256" xml:space="preserve">
                    <defs>
                    </defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,202,40); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                        <circle cx="31" cy="35.55" r="5" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                        <circle cx="59" cy="35.55" r="5" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                        <path d="M 63.087 67.345 c -0.647 0 -1.283 -0.313 -1.668 -0.894 c -3.671 -5.529 -9.809 -8.83 -16.419 -8.83 s -12.749 3.301 -16.418 8.83 c -0.611 0.92 -1.852 1.173 -2.772 0.56 c -0.92 -0.61 -1.171 -1.852 -0.561 -2.772 C 29.662 57.59 37.046 53.621 45 53.621 s 15.338 3.969 19.751 10.617 c 0.611 0.921 0.36 2.162 -0.56 2.772 C 63.851 67.237 63.467 67.345 63.087 67.345 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path d="M 82.583 20.258 C 84.779 25.758 86 31.752 86 38.035 C 86 64.525 64.525 86 38.035 86 c -6.283 0 -12.277 -1.221 -17.777 -3.417 C 27.358 87.266 35.858 90 45 90 c 24.853 0 45 -20.147 45 -45 C 90 35.858 87.266 27.358 82.583 20.258 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,182,34); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                    </svg>
                    Ափսո՜ս...
                </div>
              </div>
            </div>
          </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal",
        emits: ["close"],
        props: ["mode"]
    }
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 16px;
    background-color: #fff;
    border-radius: 34px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  
  .modal-body {
    margin: 20px 0;
  }
  
  .modal-default-button {
    float: right;
  }

  
  .modal-enter {
    opacity: 0;
  }
  
  .modal-leave-active {
    opacity: 0;
  }
  
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>