<template>
    <div class="card flex items-center gap-8">
        <img :src="product.img" alt="product.title">
        <div>
            <p class="text-2xl text-secondary">{{ product.title }}</p>
            <p class="text-xl text-gray-50">{{ product.description }}</p>
            <p class="text-l text-secondary my-3">{{ product.price }} silver coins</p>
            <button 
                class="btn"
                @click.stop="addToCart()"
            >
                <span v-if="isPending">Adding...</span>
                <span v-else>Add to basket</span>
            </button>
        </div>
    </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore';
import { ref } from "vue"

const cartStore = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        default: () => {}
    }
})

const isPending = ref(false)

const addToCart = async () => {
    isPending.value = true
    await cartStore.addItemToCart(props.product)
    isPending.value = false
}
</script>