<template>
    <h2>데이터 모델링</h2>
    <v-container>
        <v-row>
            <v-text-field type="text" v-model="value1"></v-text-field>
        </v-row>

        <v-row>
            <v-col><v-btn @click.stop="increment">incr</v-btn></v-col>
            <v-col><v-btn @click.stop="decrease">decr</v-btn></v-col>
            <v-col><v-btn @click.stop="reset">reset</v-btn></v-col>
        </v-row>
    </v-container>
    
</template>

<script>
export default{
    data() { // data()는 뷰에서 정해준 메서드이다.
        return {
            value1: 0
        }
    },
    methods: {
        increment() {
            this.value1++;
        },
        decrease() {
            this.value1--;
        },
        reset() {
            this.value1 = 0;
        }
    },
    computed: { // computed는 종속된 변수가 변경될 때, 함수를 다시 실행하여 값을 계산하는 함수이다.
        doubleCount() {
            return this.value1 * 2;
        }
    }
}
</script>