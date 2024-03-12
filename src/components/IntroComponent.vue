<template>
    <div class="intro-component">
        <div class="container">
            <div class="intro-component-content">
                <div class="title">Հարսանեկան հրավիրատոմս</div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroComponent',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

.intro-component {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/photos/IMG_3776.JPG);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
}

.intro-component-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.title {
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
}

</style>
  