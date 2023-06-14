<template>
    <div class="flex">
        <button 
            class="btn"
            @click.stop="cartStore.decreaseItemCount(product)"
        >
            -
        </button>  

        <p class="py-1 px-4 mx-1 rounded-sm text-lg bg-gray-200">
            {{ product.quantity }}
        </p>

        <button 
            class="btn"
            @click.stop="cartStore.increaseItemCount(product)"
        >
            +
        </button>  
    </div>
</template>

<script setup>

import { useCartStore } from "@/stores/cartStore"

const cartStore = useCartStore()

const props = defineProps({
    product: {
        type: Object,
        default: () => {}
    }
})

</script>