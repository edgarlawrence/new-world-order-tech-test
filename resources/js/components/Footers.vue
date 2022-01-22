<template>
    <div id="Footers">
        <div class="grid grid-rows-1">
            <div class="grid grid-col-1 flex justifies md:pr-32 py-10">
                <img :src="'/img/queensland-logo.png'" alt="">
            </div>
               <div class="footers-line">
                    <hr class="lines pb-5 mx-auto">
               </div>
               <div class="show md:hidden footers-links mx-auto w-customs text-center text-sm">
                        Help  |  Copyright  |  Disclaimer  |  Privacy  |  Right to information  |  Accessibility  |  Jobs in Queensland Government  |  Tagalog (Other languages) <br> <br>
                        © The State of Queensland 1995–2021 <br> <br>
                        Queensland Government
               </div>
        </div>
    </div>
</template>

<style lang="scss">
    #Footers {
        .lines {
             border-top: 1px solid #C4C4C4;
             width: 84%;
        }

        .w-customs {
            width: 90%;
        }
        .justifies {
            justify-content: center;
        }

        @media screen and (min-width: 768px) {
            .justifies {
                justify-content: flex-end;
            }
        }
    }
</style>