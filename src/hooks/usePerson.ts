import {ref,computed,onMounted} from "vue";

export default function (){
    
    let sum=ref(0);
    let getSum=computed(function(){
        return sum.value*10;
    });
    let setSum=function(){
        return sum.value++;
    }

    onMounted(()=>function(){
        setSum();
    });
    return {
        sum,getSum,setSum
    }
}