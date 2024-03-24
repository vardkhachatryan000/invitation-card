<template>
    <div class="intro-component">
        <div class="container">
            <div class="intro-component-content">
                <div class="content">
                    <div class="title">Հարսանեկան հրավիրատոմս</div>
                    <div class="subtitle">Հարսանիքին մնացել է</div>
                    <table>
                      <thead>
                        <th v-for="time in times" :key="time.id">{{ time.time }}</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td v-for="time in times" :key="time.id">{{ time.text}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroComponent',
    data: function(){
        return {
            startTime: new Date(),
            endTime: "Jun 9, 2024 14:55:00",
            times: [
                { id: 0, text: "Օր", time: 1 },
                { id: 1, text: "Ժամ", time: 1 },
                { id: 2, text: "Րոպե", time: 1 },
                { id: 3, text: "Վայրկյան", time: 1 }
            ],
            timeinterval: undefined
        }
    },
    methods: {
    updateTimer: function() {
      if (
        this.times[3].time > 0 ||
        this.times[2].time > 0 ||
        this.times[1].time > 0 ||
        this.times[0].time > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        clearTimeout(this.timeinterval);
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
      }
    },
    getTimeRemaining: function() {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
     if(t >= 0){
      this.times[3].time = Math.floor(t / 1000 % 60); //seconds
      this.times[2].time = Math.floor(t / 1000 / 60 % 60); //minutes
      this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24); //hours
      this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
       }else {
         this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
       }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
        (currentTime - startTime) / (endTime - startTime) * 100
      ).toFixed(2);
      this.progress = 100-interval;
    }
  },
  created: function() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
  }
}
</script>

<style scoped>
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

.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
}

.title {
  font-family: "Condiment", cursive;
  font-weight: 400;
  font-style: normal;
    color: #fff;
    text-transform: uppercase;
    font-size: 38px;
    text-align: center;
    margin-bottom: 13px;
}

.subtitle {
    font-size: 24px;
    margin-bottom: 40px;
}

table {
    margin-bottom: 22px;
}

th {
  font-weight: 900;
}

th, td {
    padding: 8px;
}
</style>
  