<template>
  <div>
    <div class="content" id="content">
      <div class="content-title">
        Սիրով հրավիրում ենք Ձեզ կիսելու մեզ հետ մեր կյանքի կարևոր և հիշարժան օրը
      </div>
      <div class="date">8 Հունիսի 2024</div>
    </div>
    <div class="agenda w-full flex flex-col gap-24">
      <agenda-place v-for="(agenda, index) in agendaItems" :key="index"
        :icon="agenda.icon"
        :name="agenda.name"
        :place="agenda.place"
        :url="agenda.url"
        :time="agenda.time"
        :image="agenda.image"
        :position="agenda.position"
      ></agenda-place>
    </div>
  </div>
</template>

<script>
import AgendaPlace from "./AgendaPlace.vue";

export default {
  name: 'ContentComponent',
  components: {
    AgendaPlace
  },
  data() {
    return {
      agendaItems: [
        {
          icon: "church.png",
          name: "Պսակադրություն",
          place: "Տեղերի վանք",
          url: "https://hy.wikipedia.org/wiki/%D5%8F%D5%A5%D5%B2%D5%A5%D6%80%D5%AB_%D5%BE%D5%A1%D5%B6%D6%84",
          time: "15:00",
          image: "tegher.png",
          position: { lat: 40.345070460922635, lng: 44.23993367680197 }
        },
        {
          icon: "engagement.png",
          name: "Հանդիսություն",
          place: "Լազուր ռեստորան",
          url: "https://www.facebook.com/lazur.pool/",
          time: "17:00",
          image: "lazur.jpg",
          position: { lat: 40.28602308704935, lng: 44.21670699104484 }
        }
      ]
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.content-title {
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
  line-height: 24px;
  margin-top: 16px;
}

.subtitle  {
  margin-top: 15px;
}

.date {
	font-family: ArmAllergoU;
  font-size: 64px;
  color: #a9787c;
}

.divider {
  position: absolute;
  width: 1.5px;
  height: 85px;
  background-color: #a9787c;
  bottom: -43%;
  left: 24px;
}

.agenda {
  margin-top: 56px;
}

@media screen and (max-width: 375px) {
  .date {
    font-size: 55px;
  }
}
</style>
  