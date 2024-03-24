<template>
    <div class="scroll-secton">
        <a :href="link" class="scroll-down"></a>
    </div>
</template>

<script>
export default {
    name: "ScrollPrompt",
    props: ['href'],
    computed: {
        link() {
            console.log('herf', this.href);
            return `#${this.href}`
        }
    }
};
</script>

<style scoped>
.scroll-secton {
    display: flex;
    justify-content: center;
    margin-top: 15px 
}

.scroll-down {
    display: block;
    text-align: center;
    font-size: 20px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0;
    width: 13px;
    height: 13px;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    z-index: 9;
    left: 50%;
    -webkit-transform: translate(-50%, 0%) rotate(45deg);
    -moz-transform: translate(-50%, 0%) rotate(45deg);
    transform: translate(-50%, 0%) rotate(45deg);
    -webkit-animation: fade_move_down 4s ease-in-out infinite;
    -moz-animation:    fade_move_down 4s ease-in-out infinite;
    animation:         fade_move_down 4s ease-in-out infinite;
  }
  
  
  /*animated scroll arrow animation*/
  @-webkit-keyframes fade_move_down {
    0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
  @-moz-keyframes fade_move_down {
    0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
  @keyframes fade_move_down {
    0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
</style>
