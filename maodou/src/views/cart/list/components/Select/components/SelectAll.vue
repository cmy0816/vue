<template>
    <transition>
        <div class="mark" v-show='visibility'>
            <div class='select'   @click='close'>
                <transition
                enter-active-class="animated slideInDown"
                >
                <slot/>
                </transition>
            </div> 
        </div>
    </transition>
</template>
<script>
export default {
    props:{
        visibility:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close:function(){
            this.$emit('update:visibility', false)
        }
    }
}
</script>
<style scoped>
    .select{
        position: fixed;
        top:.85rem;
        left:0;
        height:100%;
        width:100%;
        background:rgba(0,0,0,.5);
    }
</style>

