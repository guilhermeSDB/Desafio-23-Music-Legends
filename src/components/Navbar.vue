<template>
    <nav class="bg-[#14061F] text-md py-4 text-white flex justify-around items-center font-normal xl:py-6 xl:text-lg">
        <ul class="flex justify-center items-center gap-4 relative">
            <router-link class="hover:text-[#2EF4CC] w-full transition-all duration-400" to="/">
                Inicio
            </router-link>
            <router-link class="hover:text-[#2EF4CC] transition-all duration-400" to="/library">
                Bibliotecas
            </router-link>
        </ul>

        <div class="font-medium text-[28px] xl:text-[32px]">
            Music Legends
        </div>

        <div class="flex justify-center items-center gap-3">
            <p>Guilherme S.</p>
            <img class="w-10 xl:w-12" src="../assets/iuricode 1.svg" alt="">
        </div>
    </nav>
</template>

<script>
export default{
    name:'Navbar',
}
</script>

<style lang="scss">
</style>