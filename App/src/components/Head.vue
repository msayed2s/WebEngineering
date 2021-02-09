<template>
    <div class="in_head">
        {{Button}}
    </div>
</template>

<script>
import Button from ".Button.vue"

export default {
    name: "Head",
    props: {
        notMine: Array
    },
    
}


</script>