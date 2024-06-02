<template>
  <div class="note">
      <div>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" @keyup.enter="addNote($event)">
      </div>
      <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="(item, index) in listNote" :key="index">
          <P>  {{ item }}</P>
          <button @click="delNote(index)">del</button>
          </li>
         
      </ul>
      </div>
  </div>
</template>
<script setup lang="ts">
   import { reactive } from 'vue';

   let listNote=reactive(["lit","sdsd"]);


   let addNote=function(element:KeyboardEvent){
      var noteEle=element.currentTarget as HTMLInputElement;
      if(!noteEle.value){
          alert("dont null");
          return false;
      }
      listNote.unshift(noteEle.value);

      noteEle.value="";
   }

   let delNote=function(index:number){

      listNote.splice(index,1);

}
</script>