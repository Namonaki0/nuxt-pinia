<template>
    <div>
        <h2 class="text-white text-2xl text-center my-8">All products</h2>
    </div>
    <div class="grid grid-cols-2 gap-7">
        <div 
            v-for="product in products"
            :key="product.id"    
        >
            <ProductCard 
                :product="product"
            />
        </div>
    </div>
</template>

<script setup>
    // fetch products
    import ProductCard from '@/components/ProductCard.vue'
    const { data: products } = await useFetch('http://localhost:3000/products');
</script>