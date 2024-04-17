<template>
    <form class="container" @submit.prevent="sendData">
        <div class="title">
            Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը
        </div>
        <div>
            Կսպասենք պատասխանի մինչև <span class="font-bold">{{ date }}</span>
        </div>
        <div>
            <div class="flex gap-2">
                <input type="radio" name="going" id="going" :value="true" v-model="formData.isGoing" required/>
                <label for="going">Կգամ</label>
            </div>
            <div class="flex gap-2">
                <input type="radio" name="going" id="notGoing" :value="false" v-model="formData.isGoing" required/>
                <label for="notGoing">Չեմ կարողանա գալ</label>
            </div>
            <div v-if="errorMessages.isGoing" class="text-xs text-error">Չեք գալի՞ս</div>
        </div>
        <div>ՈՒ՞մ կողմից եք</div>
        <div>
            <div class="flex items-center gap-2">
                <input type="radio" name="whosGuest" id="groom" value="փեսա" v-model="formData.whosGuest" required/>
                <label for="groom">Փեսա</label>
            </div>
            <div class="flex items-center gap-2">
                <input type="radio" name="whosGuest" id="bride" value="հարս" v-model="formData.whosGuest" required/>
                <label for="bride">Հարս</label>
            </div>
            <div class="flex items-center gap-2">
                <input type="radio" name="whosGuest" id="unknown" value="unknown" v-model="formData.whosGuest" required>
                <label for="unknown">Պատահական անցորդ եմ</label>
            </div>
            <div v-if="errorMessages.whosGuest" class="text-xs text-error">{{ guestsErrorMessage}}</div>
        </div>
        <div class="mt-3">
            Խնդրում ենք նշել ձեր անուն ազգանունները
        </div>
        
        <div class="relative">
            <button
                type="button"
                class="flex justify-end items-end absolute right-0 top-3 z-50"
                @click="addMore()"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill="#969696"/></svg>
            </button>
            <div v-for="(guest, index) in formData.guests" :key="index" class="flex flex-col gap-4" >
                <div class="flex justify-start ml-2 mt-4 relative">
                    <input
                        v-model="guest.fullName"
                        placeholder="Անուն ազգանուն"
                        class="w-full outline-none border-b pb-4"
                        :class="{'border-error placeholder-error': errorMessages.fullName}"
                    />
                    <button
                        type="button"
                        class=""
                        @click="remove(index)"
                        v-show="index != 0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#969696"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <button @click.prevent="sendData" type="button" class="border border-gray-300 focus:outline-none font-bold rounded-full text-sm px-5 py-3 bg-gray-800 text-white">
            <div v-if="isInProcess" class="flex items-center justify-center">
                <svg class="motion-reduce:hidden animate-spin" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z" fill="#fff"/></svg>
            </div>
            <div v-else>
                Հաստատել
            </div>
        </button>
        <modal v-if="openModal" :mode="modeValue" @close="closeModal"></modal>
    </form>
</template>

<script>
import { firestore } from '@/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import Modal from "./Modal.vue";

export default {
    name: "FormComponent",
    components: {
        Modal
    },
    data() {
        return {
            openModal: false,
            isInProcess: false,
            modeValue: null,
            date: "15.05.2024թ․",
            inputsCount: 1,
            formData: {
                isGoing: null,
                whosGuest: null,
                guests: [
                    { fullName: '' }
                ]
            },
            errorMessages: {
                isGoing: false,
                fullName: false,
                whosGuest: false
            },
            guestsErrorMessage: 'Չեք կողմնորոշվե՞լ ում կողմից եք'
        }
    },
    watch: {
        "formData.isGoing" (val) {
            this.modeValue = val;
        }
    },
    methods: {
        addMore() {
            this.formData.guests.push({
                fullName: "",
            });
        },
        remove(index) {
            this.formData.guests.splice(index, 1);
        },
        async sendData() {
            this.errorMessages.isGoing = this.formData.isGoing === null;
            this.errorMessages.whosGuest =  this.formData.whosGuest === null || this.formData.whosGuest === 'unknown';           
            this.errorMessages.fullName = !this.formData.guests[0].fullName;
            
            if (this.formData.whosGuest === 'unknown') {
                this.guestsErrorMessage = "Նո նո նո՜";
            }

            if(this.errorMessages.isGoing || this.errorMessages.fullName || this.errorMessages.whosGuest) {
                return;
            }

            this.isInProcess = true;

            this.formData.guests = this.formData.guests.map((guest) => {
                let chars = [];

                for(let char of guest.fullName) {
                    chars.push(this.latinToArmenian(char))
                }

                return chars.join('');
            });

            const querySnapshot = collection(firestore, "guests");

            await setDoc(doc(querySnapshot, this.formData.guests[0]), this.formData)
            .then(() => {
                this.openModal = true;
                this.isInProcess = false;
            })
            .catch((err) => console.log('err', err))

        },
        resetData() {
            this.formData.isGoing = null;
            this.formData.whosGuest = null;
            this.formData.guests = [
                { fullName: '' }
            ];

        },
        closeModal() {
            this.openModal = false;
            this.resetData();
        },
        latinToArmenian(char) {
      switch (char.toLowerCase()) {
        case "a":
          return "ա";
        case "b":
          return "բ";
        case "c":
          return "ց"; // There is no direct equivalent in Armenian, so this is an approximation
        case "d":
          return "դ";
        case "e":
          return "ե";
        case "f":
          return "ֆ"; // There is no direct equivalent in Armenian, so this is an approximation
        case "g":
          return "գ";
        case "h":
          return "հ";
        case "i":
          return "ի";
        case "j":
          return "ջ"; // There is no direct equivalent in Armenian, so this is an approximation
        case "k":
          return "կ";
        case "l":
          return "լ";
        case "m":
          return "մ";
        case "n":
          return "ն";
        case "o":
          return "ո";
        case "p":
          return "պ";
        case "q":
          return "ք"; // There is no direct equivalent in Armenian, so this is an approximation
        case "r":
          return "ր";
        case "s":
          return "ս";
        case "t":
        return "տ";
        case "u":
          return "ու";
        case "v":
          return "վ";
        case "w":
          return "ւ";
        case "x":
          return "խ";
        case "y":
          return "յ";
        case "z":
          return "զ";
case "a":
            return "ա";
        case "б":
            return "б";
        case "в":
            return "в";
        case "г":
            return "գ"; // For Russian "г", use Armenian "գ"
        case "д":
            return "դ";
        case "е":
            return "ե";
        case "ё":
            return "ё"; // Russian "ё"
        case "ж":
            return "ж";
        case "з":
            return "զ"; // For Russian "з", use Armenian "զ"
        case "и":
            return "ի";
        case "й":
            return "й"; // Russian "й"
        case "к":
            return "կ";
        case "л":
            return "լ";
        case "м":
            return "մ";
        case "н":
            return "ն";
        case "о":
            return "ո";
        case "п":
            return "պ";
        case "р":
            return "ր";
        case "с":
            return "ս";
        case "т":
            return "տ";
        case "у":
            return "ու"; // For Russian "у", use Armenian "ու"
        case "ф":
            return "ֆ"; // Approximation for Russian "ф"
        case "х":
            return "խ";
        case "ц":
            return "ց"; // Approximation for Russian "ц"
        case "ч":
            return "չ"; // For Russian "ч", use Armenian "չ"
        case "ш":
            return "շ";
        case "щ":
            return "շ"; // Approximation for Russian "щ"
        case "ъ":
            return "ъ"; // Russian "ъ"
        case "ы":
            return "ը"; // For Russian "ы", use Armenian "ը"
        case "ь":
            return "բ"; // For Russian "ь", use Armenian "բ" (similar appearance)
        case "э":
            return "ե"; // For Russian "э", use Armenian "ե"
        case "ю":
            return "յու"; // For Russian "ю", use Armenian "յու"
        case "я":
            return "յա";
        default:
          return char;
        }
    }
    }
}
</script>

<style scoped>
.container {
    width: 90%;
    margin: 20px auto 100px auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: #fff;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 6px 0 rgba(0, 0, 0, 0.19);
    border-radius: 34px;
    padding: 15px;
}

.title {
    font-size: 20px;
    text-align: left;
    font-weight: bold;
}
</style>