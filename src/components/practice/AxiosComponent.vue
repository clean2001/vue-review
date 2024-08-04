<template>
<v-container>
    <v-row>
        <v-col>이름: </v-col>
        <v-col>{{memberName}}</v-col>
    </v-row>
    <v-row>
        <v-col>이메일: </v-col>
        <v-col>{{memberEmail}}</v-col>
    </v-row>
    <v-row>
        <v-btn @click.stop="checkInfo">정보 확인</v-btn>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            member: null,
            memberName: null,
            memberEmail: null,
            token: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjIxNTMyNzcsImV4cCI6MTcyNDc0NTI3N30.mmOd-DSfAduSTWuTh5HdewBDP6dez2afR7RvvfDF8jE`
        }
    },
    async created() {
     
        // const headers = {
        //     'Access-Control-Allow-Origin': '*',
        //     'Authorization':`Bearer ${this.token}`
        // };
        
        const response = await axios.get("http://localhost:8080/api/member/3", {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        this.member = response.data;
        this.memberName = response.data.name;
        this.memberEmail = response.data.email;


    },
    mounted() {
        console.log(this.member);
    },
    methods: {
        checkInfo() {
            console.log(this.member);
            // alert(this.member);
        }
    }
}
</script>