<template>
    <div class="section">
        <div class="title">Elements</div>
        <router-link :to="{ name: 'contentBlocks' }">
            <p>Blocks</p>
        </router-link>
        <router-link :to="{ name: 'dashboard' }">
            <p>Pages</p>
        </router-link>
    </div>
</template>

