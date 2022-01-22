<template>
    <div id="Header" class="bg-black">
        <div class="container mx-auto md:pb-10 header-containers">
            <div class="grid grid-rows-1">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="header-logooo">
                        <img :src="'/img/header-logo.png'" alt="">
                    </div>
                    <div class="grid grid-rows-1 mx-auto title-sections">
                            <!-- <div class="meta-btns mx-auto md:relative md:pt-3">
                                <span class="text-white float-right flex pl-10 text-cyan-400"> <img :src="'/img/sync-alt.png'" alt="" class="pr-3"> Meta </span>
                            </div> -->
                            <div class="contents flex flex-wrap justify-center items-center content-end">
                                <div class="2032-img pb-5">
                                    <img :src="'/img/2032-guthen.png'" alt="">
                                </div>
                                <div class="header-title-content-one text-center">
                                    <h1 class="text-white font-extrabold"> On your marks! <br> Get set! Wait for it … </h1>
                                </div>
                                    <div class="header-title-content-two pt-10">
                                        <div class="header-title-content-two-buttons bg-blue-500 mx-auto w-56 text-center md:w-60  py-5 rounded-md">
                                            <a href="#Register" class="text-white text-center"> Register Your Interest </a>
                                        </div>
                                        <div class="grid justify-center items-center pt-14">
                                            <a href="#Register"> <img :src="'/img/arrow-down.png'" alt=""> </a>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #Header {
        font-family: 'Lato';
        src: url('/fonts/Lato-Regular.ttf');

        .title-sections {
            width: 100%;
            padding: 2rem;
        }
        .meta-btns {
            width: 100%;
            display: none;
        }

        .header-logooo {
            display: flex;
            justify-content: center;
        }

        .header-title-content-one {
                h1 {
                    font-size: 32px;
                }
        }


        @media (min-width: 1280px) {
             .header-containers{
                 width: 51rem;
             }   
            .title-sections {
                width: 100%;
                padding: 1rem;
            }
            .meta-btns {
                width: 141%;
                display: block;
            }
            .header-logooo {
                display: flex;
                justify-content: flex-start;
            }
            .header-title-content-one {
                h1 {
                    font-size: 35px;
                }
            }
        }

        @media (min-width: 1440px) {
            .header-containers {
                 width: 56rem;
             }  
            .meta-btns {
                width: 138%;
                display: block;
            }

            .header-logooo {
                display: flex;
                justify-content: flex-start;
            }
        }

        @media (min-width: 1500px) {
            .meta-btns {
                width: 145%;
                display: block;
            }
            .header-logooo {
                display: flex;
                justify-content: flex-start;
            }
        }
    }
</style>