<template>
   <input   v-model="price" />
<button @click="sum">X</button>

----------------------
<hr>
{{carinfo.name}}
<input   v-model="carinfo.price" />
<button @click="sum2">X2</button>

----------------------
<hr>
{{carinfo3.name}}
<input   v-model="carinfo3.price" />
<button @click="sum3">X2</button>


<hr>

{{person.name }}

<hr/>

{{personList.length }}

{{aa}}
</template>
<script setup lang="ts"> 
   import {reactive, ref,watch} from "vue";

   import {type PersonExt,type Persons}  from "@/types";


   let person:PersonExt={id:"",name:"",age:333};

   let personList:Persons=[{id:"1",name:"1",age:333},{id:"2",name:"2",age:333},{id:"3",name:"3",age:333}]

   let persons=reactive<Persons>([{id:"1",name:"1",age:333},{id:"2",name:"2",age:333},{id:"3",name:"3",age:333}])

   let adda= defineProps(['aa'])

  console.info(adda.aa);

   let price=ref(0);

   function sum(){
      price.value= price.value*2+1;
   }

  
   var stopWatch= watch(price,(v,o)=>{

        console.info(v);
        console.info(o);

        if(price.value>128){
            stopWatch(); 
            console.info("stopWatch");
        }
   });

  
   let carinfo= ref({price:100,name:'jili'});
   function sum2(){
      carinfo.value.price=carinfo.value.price*2;
   }

  
   var stopWatch1=watch(carinfo,(v,o)=>{
      console.info("变化了");
       console.info(v.price);
        console.info(o?.name);
   },{deep:true,immediate:true});

   let carinfo3= reactive({price:100,name:'jili'});


   function sum3(){
      carinfo3.price=carinfo3.price*2;
      carinfo3.name="weewe";
      //Object.assign(carinfo3,{price:1222,name:'weewe'});
   }

  
   var stopWatch3=watch(carinfo,(v,o)=>{
      console.info("变化了");
       console.info(v.price);
        console.info(o?.name);
   },{deep:true,immediate:true});


</script>
<style scoped>

</style>