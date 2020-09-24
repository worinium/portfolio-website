<template>
<v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
        <v-col v-for="(item, index) in contactLinks" :key="index">
            <v-card class="pa-2" tile outlined>
                <v-card class="mx-auto" max-width="350">
                    <v-row class="flex-column ma-0 fill-height" justify="center">
                        <v-btn color="primary" x-medium dark>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </v-row>
                    <v-card-title> {{ item.name }} </v-card-title>
                    <v-card-subtitle>
                        {{ item.value }}
                    </v-card-subtitle>

                    <v-card-actions>
                        <a target="_blank" :href="item.link" style="text-decoration:none;" class="btn">
                            <v-btn :loading="loading3" color="primary" class="ma-2 white--text" @click="loader = 'loading3'">
                                Connect
                                <v-icon right dark>mdi-share-variant</v-icon>
                            </v-btn>
                        </a>
                    </v-card-actions>
                </v-card>
            </v-card>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            default: function () {
                return {};
            },

        },
    },
    data() {
        return {
            contactLinks: [{
                    index: 1,
                    name: "Email",
                    value: "Woriayibapri Hearty Alapher",
                    link: "mailto:alapherwori8g5@gmail.com",
                    icon: "mdi-email",
                },
                {
                    index: 2,
                    name: "LinkedIn",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.linkedin.com/wori-hearty/",
                    icon: "mdi-linkedin",
                },
                {
                    index: 3,
                    name: "YouTube",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.youtube.com/channel/UC0ZXJAhTh09Fw_nuCJQJILA",
                    icon: "mdi-youtube",
                },
                {
                    index: 4,
                    name: "Github",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://github.com/worinium/",
                    icon: "mdi-github",
                },
                {
                    index: 5,
                    name: "Facebook",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.facebook.com/worinium/",
                    icon: "mdi-facebook",
                },
                {
                    index: 6,
                    name: "Instagram",
                    value: "Woriayibapri Hearty Alapher",
                    link: "https://www.instagram.com/worinium/",
                    icon: "mdi-instagram",
                }
            ]
        }

    }
}
</script>

<style></style>
