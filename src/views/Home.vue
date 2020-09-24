<template>
<div class="home">
    <v-img dark max-height="635px" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <v-layout fill-height align-center>
            <v-container>
                <v-row align="center" justify="center" class="white--text">
                    <v-col cols="12">
                        <div :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,'title font-weight-bold': $vuetify.breakpoint.smAndDown, }">
                            <span style="color:#800040;">Welcome</span> to My Page.
                        </div>
                        <div :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }">
                            <span style="color:#800040;">I Develop Applicactions and Setup Enterprise GIS.</span>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </v-img>
    <v-container class="mt-5">
        <v-layout wrap>
            <v-col class="lighten-2 py-5 text-center " cols="12">
                <v-spacer></v-spacer>
                <h1 style="color:#800040;" id="about">Statement of Experience</h1>
                <v-spacer></v-spacer>
            </v-col>
            <v-flex xs12 mt-5>

                <v-col class="lighten-2 py-1 text-center " cols="12">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card :loading="loading" :elevation="hover ? 16 : 2" class="pa-md-4 mx-lg-auto" color="white">
                            <v-card-text>
                                <div class="body-1">{{ aboutText }}</div>
                                <div class="body-1 mt-3">
                                    Working on starting an app development business and always looking
                                    for new clients! Would love to talk to you about your idea.
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>

            </v-flex>
        </v-layout>
        <v-layout wrap my-5>
            <v-col class="py-4 text-center" cols="12">
                <v-spacer></v-spacer>
                <h1 style="color:#800040;" id="portfolio">My Projects Portfolio</h1>
                <v-spacer></v-spacer>
            </v-col>
            <v-flex xs12 class="mt-5">
                <v-layout wrap>
                    <template v-for="(app, i) in apps">
                        <v-flex :key="i" class="mt-5" xs12 sm6 md4>
                            <p-portfolio-app :app="app" />
                        </v-flex>
                    </template>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-col class="lighten-2 py-2 text-center " cols="12">
            <v-spacer></v-spacer>
            <h1 style="color:#800040;" id="contact">Contact Me</h1>
            <v-spacer></v-spacer>
        </v-col>
        <v-layout>
            <!-- <template v-for="(contact, i) in 1">
                <v-flex :key="i">
                    <p-contact-info :contact="contact" />
                </v-flex>
            </template> -->
            <PContactInfo />
        </v-layout>
    </v-container>
</div>
</template>

<script>
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";

export default {
    name: "home",
    components: {
        PPortfolioApp,
        PContactInfo,
    },
    data() {
        return {
            aboutText: "I’m a Computer Scientist that is passionate about developing quality software with great innovative skills in solving client’s problems. Hence, over the past 6 years in the IT industry, I have worked as a Media Data Analysis Expert, Production Geology Software Developer, Enterprise GIS Software Developer & Administrator, and Software Engineering Instructor. I have acquired a high level of industrial experience in building well-crafted and easily maintainable small to medium scale applications for deployment on Cloud/Web, Desktop, and Mobile platforms. I also have adequate knowledge in administering Enterprise GIS especially for land Administration and Casdastral, Mapping and Cartography, and Geodesy.",
            apps: [{
                    name: "Media Data App",
                    price: "COMING SOON",
                    logo: "finance-logo.png",
                    platforms: [{
                            name: "apple",
                            icon: "mdi-apple",
                            link: "",
                        },
                        {
                            name: "android",
                            icon: "mdi-android",
                            link: "",
                        },
                    ],
                    description: "My sister always kept asking me about my money situation and how I was doing there, so I decided that I would make an app that we could use to track our finances. Using Plaid I was able to get access to my bank account and hers and connect the 2 using firebase Functions and Auth to secure the app. ",
                    technologies: [{
                            name: "VueJS",
                            icon: "mdi-vuejs",
                            link: "",
                        },
                        {
                            name: "Vuetify",
                            icon: "mdi-vuetify",
                            link: "",
                        },
                        {
                            name: "Cordova",
                            icon: "mdi-cordova",
                            link: "",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "",
                        },
                        {
                            name: "Node",
                            icon: "mdi-nodejs",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "https://github.com/uzirthapa/finance-app",
                    },
                },

                {
                    name: "Covid 19 GIS App",
                    price: "FREE",
                    logo: "covid19.png",

                    platforms: [{
                        name: "apple",
                        icon: "mdi-apple",
                        link: "https://apps.apple.com/us/app/food-vision/id1437083324",
                    }, ],
                    description: "A Sample implementation of CRUD functionality in using asp.net core with razor, EntityFrameCore Code First and PostgreSQL DBMS ",
                    technologies: [{
                            name: "Swift",
                            icon: "mdi-language-swift",
                            link: "",
                        },
                        {
                            name: "XCode",
                            icon: "mdi-apple-ios",
                            link: "",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "",
                    },
                },
                {
                    name: "Queue Management System",
                    price: "COMING SOON",
                    logo: "baguette-logo.png",
                    platforms: [{
                            name: "apple",
                            icon: "mdi-apple",
                            link: "",
                        },
                        {
                            name: "android",
                            icon: "mdi-android",
                            link: "",
                        },
                    ],
                    description: "Similar to 'Bag it'. I wanted to make a swippable market place where people could swipe on goods from a store. Also it got rid of all the extra distractions and you are able to focus on just one item at a time. Still need to build the recommender system. But I am working on it! :)",
                    technologies: [{
                            name: "VueJS",
                            icon: "mdi-vuejs",
                            link: "",
                        },
                        {
                            name: "Vuetify",
                            icon: "mdi-vuetify",
                            link: "",
                        },
                        {
                            name: "Cordova",
                            icon: "mdi-cordova",
                            link: "",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "",
                    },
                },
                {
                    name: "Facebook UI",
                    price: "OPEN SOURCE",
                    logo: "facebook-logo.png",
                    platforms: [{
                        name: "web",
                        icon: "mdi-web",
                        link: "https://uzirthapa.github.io/facebook-ui/dist/",
                    }, ],
                    description: "One Day build - I saw this guy on youtube building apps in 1 day and I wanted to see if I could make a better version of the Facebook UI. I didn't design it but I found this design on dribbble and just thought I would make the designers UI come to life.",
                    technologies: [{
                            name: "VueJS",
                            icon: "mdi-vuejs",
                            link: "",
                        },
                        {
                            name: "Vuetify",
                            icon: "mdi-vuetify",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "https://github.com/worinium/facebook-clone",
                    },
                },

                {
                    name: "BookList App",
                    price: "FREE",
                    logo: "food-vision-logo.png",
                    platforms: [{
                        name: "apple",
                        icon: "mdi-apple",
                        link: "",
                    }, ],
                    description: "A Sample implementation of CRUD functionality in using asp.net core with razor, EntityFrameCore Code First and PostgreSQL DBMS ",
                    technologies: [{
                            name: "Swift",
                            icon: "mdi-language-swift",
                            link: "",
                        },
                        {
                            name: "XCode",
                            icon: "mdi-apple-ios",
                            link: "",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "",
                    },
                },
                {
                    name: "PhotoShoot GIS Appication",
                    price: "LIVE",
                    logo: "firebird-logo.png",
                    platforms: [{
                        name: "web",
                        icon: "mdi-web",
                        link: "https://firebirdfitness.xyz/",
                    }, ],
                    description: "I needed a place to put my workouts that we do at work, So I made a place where I could store them and also if I forgot a certian exercise I could easily search it and watch a video on how to do it.",
                    technologies: [{
                            name: "VueJS",
                            icon: "mdi-vuejs",
                            link: "https://vuejs.org/",
                        },
                        {
                            name: "Vuetify",
                            icon: "mdi-vuetify",
                            link: "https://vuetifyjs.com/",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "https://firebase.google.com/",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "https://github.com/worinium/gis-photo-sharing-app",
                    },
                },
                {
                    name: "Music App",
                    price: "CLOSE SOURCE",
                    logo: "music2.jpg",
                    platforms: [{
                        name: "web",
                        icon: "mdi-web",
                        link: "https://ecommerce-skeleton.firebaseapp.com/",
                    }, ],
                    description: "We Wanted to help people who want to create an ecommerce store with VueJS and Vuetify have a template that had authentication and payments integrated right from the get go. So now you can hit the ground running! In Collaboration with Aatish Balla.",
                    technologies: [{
                            name: "VueJS",
                            icon: "mdi-vuejs",
                            link: "https://vuejs.org/",
                        },
                        {
                            name: "Vuetify",
                            icon: "mdi-vuetify",
                            link: "https://vuetifyjs.com/",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "https://firebase.google.com/",
                        },
                        {
                            name: "Stripe",
                            icon: "mdi-credit-card-outline",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "https://github.com/worinium/music-vue",
                    },
                },

                {
                    name: "GIS Land Survey App",
                    price: "FREE",
                    logo: "logo.png",
                    platforms: [{
                        name: "apple",
                        icon: "mdi-apple",
                        link: "",
                    }, ],
                    description: "A Sample implementation of CRUD functionality in using asp.net core with razor, EntityFrameCore Code First and PostgreSQL DBMS ",
                    technologies: [{
                            name: "Swift",
                            icon: "mdi-language-swift",
                            link: "",
                        },
                        {
                            name: "XCode",
                            icon: "mdi-apple-ios",
                            link: "",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "",
                    },
                },
                {
                    name: "Sacred Summits",
                    price: "LIVE",
                    logo: "ss-logo-high-res.png",
                    platforms: [{
                        name: "web",
                        icon: "mdi-web",
                        link: "",
                    }, ],
                    description: "Sacred Summits was looking for a redesign of their website and they asked me to come up with a sample. This is what I came up with.",
                    technologies: [{
                            name: "VueJS",
                            icon: "mdi-vuejs",
                            link: "https://vuejs.org/",
                        },
                        {
                            name: "Vuetify",
                            icon: "mdi-vuetify",
                            link: "https://vuetifyjs.com/",
                        },
                        {
                            name: "Firebase",
                            icon: "mdi-firebase",
                            link: "https://firebase.google.com/",
                        },
                    ],
                    code: {
                        name: "github",
                        icon: "mdi-github",
                        link: "",
                    },
                },
            ],

        }
    },
}
</script>
