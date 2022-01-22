<template>
    <div id="navbars">
        <nav class="flex items-center flex-wrap p-2">
          <div class="navbar-content w-auto flex justify-around block px-5 md:pl-20 lg:pl-56 xl:pl-64 flex-grow items-center lg:w-auto">
            <div class="text-sm flex-grow">
                <a href=""> <img :src="'/img/navbar-logo.png'" alt="navbar-logo"> </a>
            </div>
            <div class="flex pl-10 md:justify-around mx-auto regist">
              <a href="#" class="inline-block border-black text-xs md:text-sm p-2 leading-none border rounded text-black font-bold">Register Now</a>
              <img :src="'img/phone-laptop.png'" alt="phone-laptop" class="device-logo">
            </div>
          </div>
        </nav>
    </div>
</template>

<style lang="scss">
    #navbars {
        .device-logo {
            display: none;
        }
        @media (min-width: 1000px) {
            .regist {
                width: 15rem;
            }
            .device-logo {
                display: block;
            }
        }

        @media (min-width: 1441px) {
            .navbar-content {
                padding-left: 10rem;
            }
        }
        @media (min-width: 1500px) {
            .regist {
                width: 20rem;
            }
            .navbar-content {
                padding-left: 20rem;
            }
        }
        @media (min-width: 1920px) {
            .navbar-content {
                padding-left: 23rem;
            }
        }
    }
</style>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
