<template>
     <input  placeholder="first name" v-model="fname"/>
     <br/>
     <input  placeholder="last name" v-model="person.name"/>
     <input  placeholder="last name" v-model="lname"/>

<br/>
     <br/>
     <input  placeholder="last name" v-model="getName"/>

     {{sum}}    {{getSum}}

     <button @click="setSum">+++</button>

</template>

<script setup lang="ts" name="Person">

    import {ref,computed, reactive} from  "vue";

    import usePerson from "@/hooks/usePerson";

   let fname=ref("wu");

   let lname=ref("chao");

   let getName=computed(m=>{
       return fname.value+":"+lname.value;
   });


   let person=reactive({name:1});

   let getName1=computed({
            get(){

            },
            set(){

            }
   });


   let {sum,getSum,setSum} = usePerson();

</script>


<style>

</style>