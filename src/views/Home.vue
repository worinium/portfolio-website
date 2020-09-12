<template>
<div class="home">
    <v-img dark max-height="500px" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <v-layout fill-height align-center>
            <v-container>
                <v-row align="center" justify="center" class="white--text">
                    <v-col cols="12">
                        <div :class="{
                  'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
                  'title font-weight-bold': $vuetify.breakpoint.smAndDown,
                }">
                            Welcome to My Page.
                        </div>
                        <div :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }">
                            I Develop Applicactions and Setup Enterprise GIS.
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </v-img>
    <v-container class="mt-5">
        <v-layout wrap>
            <v-flex xs12>
                <div class="display-1 font-weight-bold" id="about">This is me</div>
            </v-flex>
            <v-flex xs12 mt-5>
                <div class="body-1">{{ aboutText }}</div>
                <div class="body-1 mt-3">
                    Working on starting an app development business and always looking
                    for new clients! Would love to talk to you about your idea.
                </div>
            </v-flex>
        </v-layout>
        <v-layout wrap my-5>
            <v-flex xs12>
                <div class="display-1 font-weight-bold" id="portfolio">My Work</div>
            </v-flex>
            <v-flex xs12 class="mt-5">
                <v-layout wrap>
                    <template v-for="(app, i) in apps">
                        <v-flex :key="i" xs12 sm6 md4>
                            <p-portfolio-app :app="app" />
                        </v-flex>
                    </template>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout wrap my-5>
            <v-flex xs12 mb-5>
                <div class="display-1 font-weight-bold" id="contact">Contact Me</div>
                <template v-for="(contact, i) in contactLinks">
                    <v-flex sm6 md4 xs12 :key="i">
                        <p-contact-info :contact="contact" />
                    </v-flex>
                </template>
            </v-flex>
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
                    name: "Food Vision",
                    price: "FREE",
                    logo: "food-vision-logo.png",
                    platforms: [{
                        name: "apple",
                        icon: "mdi-apple",
                        link: "https://apps.apple.com/us/app/food-vision/id1437083324",
                    }, ],
                    description: "One day my friend and I were eating at a restaurant and she suddenly asked me what an item looks like. I looked up at her an told her I didnt know. Then she told me why dont you make an app where you can see the pictures of food thats on the menu? Then I made Food Vision. :)",
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
                    name: "Baguette",
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
                        link: "https://github.com/uzirthapa/facebook-ui",
                    },
                },
                {
                    name: "Firebird Fitness",
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
                        link: "https://github.com/uzirthapa/Firebird-Fitness",
                    },
                },
                {
                    name: "Ecommerce Biolerplate",
                    price: "OPEN SOURCE",
                    logo: "logo.png",
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
                        link: "https://github.com/uzirthapa/ecommerce-skeleton",
                    },
                },
                {
                    name: "Sacred Summits",
                    price: "LIVE",
                    logo: "ss-logo-high-res.png",
                    platforms: [{
                        name: "web",
                        icon: "mdi-web",
                        link: "https://sacred-summits-web.firebaseapp.com/",
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
            contactLinks: [{
                    name: "Email",
                    value: "alapherwori8g5@gmail.com",
                    link: "mailto:alapherwori8g5@gmail.com",
                    icon: "mdi-email",
                },
                {
                    name: "LinkedIn",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.linkedin.com/wori-hearty/",
                    icon: "mdi-linkedin",
                },
                {
                    name: "YouTube",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.youtube.com/channel/UC0ZXJAhTh09Fw_nuCJQJILA",
                    icon: "mdi-youtube",
                },
                {
                    name: "Github",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://github.com/worinium/",
                    icon: "mdi-github",
                },
                {
                    name: "Facebook",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.facebook.com/worinium/",
                    icon: "mdi-facebook",
                },
                {
                    name: "Instagram",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.instagram.com/worinium/",
                    icon: "mdi-instagram",
                },
            ],
        };
    },
};
</script>
