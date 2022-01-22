<template>
    <div id="Info1">
        <div class="py-10 px-3 mx-auto info1-grids">
            <div class="info1-title text-center">
                <h1> This could be your starting line for the 2032 Olympic and Paralympic Games in Brisbane </h1>
            </div>
            <div class="grid grid-rows-1 py-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 justify-items-center px-5 latos-fonts">
                    <div class="">
                        <span>
                            We're looking for talented young Queensland athletes with Olympic-sized dreams to register their interest in being part the Queensland Academy of Sport Talent Identification Program. This program is strictly for athletes born between 1999 and 2009 inclusive. Parents, coaches and sporting clubs
                        </span>
                    </div>
                    <div class="py-5 md:py-0">
                        <img :src="'/img/warning-sign.png'" alt="" class="float-left pr-5 pb-5">
                        <span>
                            <strong> Warning </strong> :  Our standards are high (because we want the best) but if you think you have what it takes please pre-register now by filling out the form. 
                            <br> Further information will become available in December when we launch our application portal, but by pre-registering you will be automatically prompted when applications become open. 
                        </span>
                    </div>
                    <div class="mobile-paragraph block md:hidden">
                        <span class=""> Further information will become available in December when we launch our application portal, but by pre-registering you will be automatically prompted when applications become open. </span>
                    </div>
                </div>
            </div>
              <div class="text-center info1-end flex justify-center flex-wrap md:block latos-fonts">
                  <h1> This could be the first step in your Olympic or Paralympic journey. </h1> <span class="info1-goodluck pl-5 italic font-extrabold"> Good luck!</span>
              </div>
        </div>
    </div>
</template>

<style lang="scss">
    #Info1 {
        .latos-fonts {
        font-family: 'Lato-Regular';
        src: url('/fonts/Lato-Regular.ttf');
        }

        .info1-title {
            h1 {
                font-size: 25px;
                font-weight: 800;
                color: #009AC6;
            }
        } 
        .info1-grids {
            width: 100%;
        }
        .info1-end {
            font-size: 21px;
            font-weight: 800;
        }
        .info1-goodluck {
            color: #F0534D;
            font-family: 'FFMetaProBold';
            src: url('/fonts/FFMetaProBold.TTF');
            font-weight: 800;
        }

        @media screen and (min-width: 1000px) and (max-width: 1500px) {
            .info1-title {
                h1 {
                    font-size: 35px;
                    font-weight: 800;
                    color: #009AC6;
                }
            } 
            .info1-grids {
                width: 73%;
            }
            .info1-end {
                font-size: 25px;
                font-weight: 800;
            }
            .info1-goodluck {
                color: #F0534D;
            font-family: 'FFMetaProBold';
            src: url('/fonts/FFMetaProBold.TTF');
            font-weight: 800;
            }
        }

        @media screen and (min-width: 1501px) and (max-width: 1600px) {
            .info1-title {
                h1 {
                    font-size: 35px;
                    font-weight: 800;
                    color: #009AC6;
                }
            } 
            .info1-grids {
                width: 68%;
            }
            .info1-end {
                font-size: 25px;
                font-weight: 800;
            }
            .info1-goodluck {
                color: #F0534D;
            font-family: 'FFMetaProBold';
            src: url('/fonts/FFMetaProBold.TTF');
            font-weight: 800;
            }
        }

        @media screen and (min-width: 1601px) {
            .info1-title {
                h1 {
                    font-size: 35px;
                    font-weight: 800;
                    color: #009AC6;
                }
            } 
            .info1-grids {
                width: 64%;
            }
            .info1-end {
                font-size: 25px;
                font-weight: 800;
            }
            .info1-goodluck {
                color: #F0534D;
            font-family: 'FFMetaProBold';
            src: url('/fonts/FFMetaProBold.TTF');
            font-weight: 800;
            }
        }
    }
</style>

<script>
export default {

}
</script>