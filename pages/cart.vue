<template>
    <div>
        <h2 class="text-white text-2xl text-center my-8">Your cart</h2>

        <div
            v-if="cartStore.cart.length"
            class="card text-xl"
        >
            <div
                v-for="product in cartStore.cart"
                :key="product.id"
                class="flex gap-8 items-center"
            >
                <img :src="product.img" :alt="product.title">
                <p class="text-white">{{ product.title }}</p>
                <p class="text-white">{{ product.price * product.quantity }} coins</p>
            </div>
        </div>
        <div
            v-else
        >
            <p
                class="text-qhite"
            >
                Currently no items in basket
            </p>
        </div>
    </div>
</template>

<script setup>

import { useCartStore } from "@/stores/cartStore"

const cartStore = useCartStore()

</script>