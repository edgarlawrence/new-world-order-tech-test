<template>
    <div id="Carousels" class="pb-20">
        <div class="carousel-title text-center pt-10 md:py-10"> <span class="not-italic md:italic"> You for 2032</span>-Program snapshot </div>
        <div class="grid grid-rows-1 grid-flow-col">
            <div class="carousel-content1">
                <div class="block md:grid grid-cols-2 justify-items-center carousel-content mx-auto">
                    <div class="md:w-96"> 
                         The Talent Identification Program has been designed to unearth our next generation of Queensland sporting stars. The aim is to develop and nurture young Queensland athletes who have the potential to be an Olympian in 2032. <br> <br>
                         Athletic ability is the key ingredient in the program. You may be currently competing in a sport that isn’t in the Olympics, but we may identity an Olympic sport that’s perfect for your athletic strengths.
                    </div>
                    <div class="md:w-96"> 
                        Those successful in being selected for the program will receive substantial training, coaching and development support over an extended period of time. More details about the program will become available to athletes who who gain selection. <br> <br>
                        Once applications open in December, a thorough process of vetting and assessments will take place. The diagram below indicates the basic process.
                    </div>
                </div>
            </div>
        </div>
            <div class="">
                <VueSlickCarousel  v-bind="settings" class="mx-auto carousel-content2 py-10">
                  <div class="text-center p-1">
                      <span class="pr-14"> 1 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box m-auto">
                          <h1> Register your interest </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 2 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box2 m-auto">
                          <h1> Applications open in December </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 3 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box2 m-auto">
                          <h1> Submit your application </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 4 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box3 m-auto">
                          <h1> Assessment </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 5 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box2 m-auto">
                          <h1> Get invited to our testing days </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 6 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box3 m-auto">
                          <h1> Assessment </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 7 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box2 m-auto">
                          <h1> Qualify for our combines </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 8 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box3 m-auto">
                          <h1> Assessment </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 9 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box2 m-auto">
                          <h1> Confirmation and selection into development program </h1>
                      </div>
                      <img :src="'/img/arrows1.png'" class="arrowsss">
                    </div>
                 </div>
                  <div class="text-center p-1">
                      <span class="pr-14"> 10 </span>
                      <br> <br>
                    <div class="flex">
                    <div class="carousel-box2 m-auto">
                          <img :src="'/img/2032-box.png'" alt="">
                      </div>
                    </div>
                 </div>
                </VueSlickCarousel>
            </div>
    </div>
</template>

<style lang="scss">
    #Carousels {
            background-image: url('/img/abby-mobile-bg.png');
            background-size: cover;
            background-repeat: no-repeat;
            background: rgba(254, 192, 3, 0.8);

        .slick-prev, .slick-next {
            top: 105%;
        }

        .slick-prev:before {
            content: url('/img/leftArrow.png');
        }

        .slick-next:before  {
            content: url('/img/rightArrow.png');
        }

        // .slick-next {
        //     right: 32%;
        // }

        // .slick-prev {
        //     left: 32%;
        // }

        .slick-slider {
            position: relative;
            width: 80%;
            display: flex;
            justify-content: center;
        }

        .arrowsss {
            height: 2rem;
            margin-top: 4rem;
        }

        .boxed {
            display: inline-table;
        }

        .carousel {
            &-title {
                font-size: 50px;
            }
            &-content {
                width: 55%;
            }
            &-box {
                color: white;
                background-color: black;
                width: 14rem;
                padding: 1rem;
                height: 10rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-box2 {
                color: black;
                background-color: white;
                width: 14rem;
                padding: 1rem;
                height: 10rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-box3 {
                color: white;
                background-color: #F3724A;
                width: 14rem;
                padding: 1rem;
                height: 10rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        @media (max-width: 768px) {
            .carousel {
                &-title {
                    font-size: 30px;
                }
            &-content {
                width: 100%;
                padding: 2rem;
            }
            }    
        }
    }
</style>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
  "dots": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 6,
  "slidesToScroll": 1,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1500,
      "settings": {
        "slidesToShow": 6,
        "slidesToScroll": 1,
        "infinite": false,
        "dots": true,
        "arrows": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": false
      }
    }
  ]
}
        }
    }
  }
</script>