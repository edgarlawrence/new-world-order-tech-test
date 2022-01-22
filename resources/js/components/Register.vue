<template>
    <div id="Register">
       <div class="grid grid-row-1">
           <div class="grid grid-cols-1 md:grid-cols-2  md:flex md:flex-wrap justify-items-center register-background p-10 md:p-40">
               <div class="register-title px-0 py-3 md:py-0 lg:px-28"> 
                    <h1> Register Now!</h1>   
                    <div class="register-title-content">
                        Register your details and create an account. When applications open in
                        December, we’ll let you know.
                    </div>
                </div>
               <div class="register-signup"> 
                    <form action="" class="">
                        <div class="mb-3 block md:flex items-center justify-between">
                            <label class=""> First name: </label>   
                            <input type="text" name="FirstName" id="FirstName" class="shadow appearance-none border rounded w-auto py-2 px-10 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-3 block md:flex items-center justify-between">
                            <label class=""> Surname: </label>   
                            <input type="text" name="Surname" id="Surname" class="shadow appearance-none border rounded w-auto py-2 px-10 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-3 block md:flex items-center justify-between">
                            <label class="pr-4"> Date of Birth: </label>   
                            <input type="text" name="Date" id="Date" class="shadow appearance-none border rounded w-auto py-2 px-10 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-3 block md:flex items-center justify-between">
                            <label class="pr-4"> Email address: </label>   
                            <input type="text" name="email" id="email" class="shadow appearance-none border rounded w-auto py-2 px-10 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-10 block md:flex items-center justify-between">
                            <label class="pr-4"> Mobile number: </label>   
                            <input type="number" name="phones" id="phones" class="shadow appearance-none border rounded w-auto py-2 px-10 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-3 flex justify-between">
                            <div class="privacy block">
                                <a href="#"> Privacy policy </a> <br>
                                <a href="#"> Terms and conditions </a>
                            </div>
                            <div class="submit bg-black p-3 rounded-md" type="submit">
                                Register now
                            </div>
                        </div>
                    </form>
                </div>
           </div>
       </div>
    </div>
</template>

<style lang="scss">
    #Register {
        color: white;
        .register-title {
            h1 {
                font-size: 30px;
            }
        }
        .register-background {
            background-image: url('/img/curtis-mobile-bg.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-color: #0099C6E5;
        }
        .labels {
            padding-right: 4.5rem;
        }
        .select-forms {
            padding-right: 5.6rem;
            padding-left: 1rem;
        }

        @media screen and (min-width: 1000px) and (max-width: 1300px) {
            .register-title {
                 h1 {
                     font-size: 40px;
                 }
             }
             .register-background {
                 background-image: url('/img/curtis-bg.png');
                 background-size: cover;
                 background-repeat: no-repeat;
                 background-color: #0099C6E5;
             }
             .labels {
                 padding-right: 4.5rem;
             }
             .select-forms {
                 padding-right: 2.2rem;
                 padding-left: 1rem;
             }
        }

        @media screen and (min-width: 1400px) {
            .register-title {
                 h1 {
                     font-size: 50px;
                 }
             }
             .register-background {
                 background-image: url('/img/curtis-bg.png');
                 background-size: cover;
                 background-repeat: no-repeat;
                 background-color: #0099C6E5;
             }
             .labels {
                 padding-right: 4.5rem;
             }
             .select-forms {
                 padding-right: 2.2rem;
                 padding-left: 1rem;
             }
        }
    }
</style>

<script>
export default {
    
}
</script>