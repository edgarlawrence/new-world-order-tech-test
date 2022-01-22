<template>
    <div id="Locations" class="py-10">
        <div class="grid grid-rows-1 md:grid-rows-2 justify-center">
            <div class="location-title text-center">
                <h1 class="font-extrabold"> Testing session locations </h1>
            </div>
            <div class="location-title text-left mx-auto">
                <p> 
                You for 2032 testing days will be hosted across Queensland in the first half of 2022. 
                Below is a list of the regions, broken down to cities, towns and suburbs identified as hosts for testing sessions.
                As part of the selection process athletes will need to be prepared to attend at least one testing day.     
                </p>
            </div>
            <div class="block md:grid grid-cols-2 gap-4 py-10 w-50">
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Darling Downs </strong> <br> Warwick, Toowoomba </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Metro Brisbane </strong> <br> Chandler, Morayfield, Toowong, Ipswich </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Wide Bay Region </strong> <br> Gympie, Hervey Bay, Bundaberg, Kingaroy </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Capricornia </strong> <br> Gladstone, Rockhampton, Emerald </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Scenic Rim </strong> <br> Beaudesert </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> North West Region </strong> <br> Longreach, Mt. Isa </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Gold Coast </strong> <br> Carrara </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> North Queensland </strong> <br> Ingham, Townsville, Airlie Beach, Mackay, Cairns </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> Sunshine Coast </strong> <br> Sippy Downs </h4>
                </div>
                <div class="border rounded-md p-3 my-3 md:my-0"> 
                    <h4> <strong> South West Region </strong> <br> Roma, Dalby, St. George, Goondiwindi </h4>
                </div>
            </div>
            <div class="bg-black text-white w-52 py-5 text-center round-md m-auto">
                <span> Register Your Interest </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #Locations {
            margin-left: auto;
            margin-right: auto;
            width: 80%;

        @media (min-width: 1000px) {
            margin-left: auto;
            margin-right: auto;
            width: 50%;

            .location-title {
                h1 {
                    font-size: 35px;
                }
            }
        }
    }
</style>