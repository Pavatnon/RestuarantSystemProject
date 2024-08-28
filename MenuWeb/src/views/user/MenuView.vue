<script setup>
    import {useUserMenuStore} from '@/stores/user/menu'
    const menuTypeStore = useUserMenuStore()

</script>
<template>
    <UserLayout>
        <p>menupage</p>
        <p>search: {{ menuTypeStore.selectedType }}</p>
    </UserLayout>
</template>