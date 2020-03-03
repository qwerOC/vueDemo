<template>
    <div class="main_contain">
        <div class="main_left">
            qwqeqwe
        </div>

        <div  class="main_right">
            eqewq
        </div>

    </div>


</template>

<script>
export default {
    name:"HomeMain",
    data(){
        return {

        };
    },
}
</script>

<style>
.main_contain{
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.main_left{
    width: 20%;
    background-color: red;
    height: 100%;
}
.main_right{
    width: 80%;
    background-color: green;
    height: 100%;
}

</style>