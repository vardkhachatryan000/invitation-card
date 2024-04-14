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
        <div class="mt-3">
            Խնդրում ենք նշել ձեր անուն ազգանունը և հյուրերի թիվը
        </div>
        <div class="flex flex-col gap-4">
            <input v-model="formData.fullName" type="text" required placeholder="Անուն ազգանուն" class="outline-none border-b pb-4" :class="{'border-error placeholder-error': errorMessages.fullName}"/>
            <input v-model="formData.count" type="number" required placeholder="Հյուրերի թիվ" class="outline-none border-b pb-4"  :class="{'border-error placeholder-error': errorMessages.count}"/>
        </div>
        <button @click.prevent="sendData" type="button" class="border border-gray-300 focus:outline-none font-bold rounded-full text-sm px-5 py-3 bg-gray-800 text-white">Ուղարկել</button>
    </form>
</template>

<script>
import { firestore } from '@/firebase';
import { collection, doc, setDoc } from "firebase/firestore";

export default {
    name: "FormComponent",
    data() {
        return {
            date: "15.05.2024թ․",
            formData: {
                isGoing: null,
                fullName: '',
                count: null
            },
            errorMessages: {
                isGoing: false,
                fullName: false,
                count: false
            }
        }
    },
    methods: {
        async sendData() {
            this.errorMessages.isGoing = this.formData.isGoing === null;
            this.errorMessages.fullName = !this.formData.fullName;                
            this.errorMessages.count = !this.formData.count;

            if(this.errorMessages.isGoing || this.errorMessages.fullName || this.errorMessages.count) {
                return;
            }

            const querySnapshot = collection(firestore, "guests");

            await setDoc(doc(querySnapshot, this.formData.fullName), this.formData)
            .then(() => {
                this.resetData();
            })

        },
        resetData() {
            this.formData.isGoing = null;
            this.formData.fullName = "",
            this.formData.count = null;
        }
    }
}
</script>

<style scoped>
.container {
    width: 90%;
    margin: 20px auto;
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