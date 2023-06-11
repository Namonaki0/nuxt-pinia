<script setup>
    const props = defineProps({
        product: {
            type: Object,
            default: () => {}
        }
    })
</script>
<template>
    <div class="card flex items-center gap-8">
        <img :src="product.img" alt="product.title">
        <div>
            <p class="text-2xl text-secondary">{{ product.title }}</p>
            <p class="text-xl text-gray-50">{{ product.description }}</p>
            <p class="text-l text-secondary my-3">{{ product.price }} Silver coins</p>
            <button class="btn">
                <span>Add to basket</span>
            </button>
        </div>
    </div>
</template>