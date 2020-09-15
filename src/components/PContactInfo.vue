<template>
<v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
        <v-col v-for="n in 4" :key="n">
            <v-card class="pa-2" tile outlined>
                <v-card class="mx-auto" max-width="250">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px"></v-img>

                    <v-card-title>
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>
                            Explore
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than
                                he could deliver. You won't have time for sleeping, soldier,
                                not with all the bed making you'll be doing. Then we'll go
                                with that data file! Hey, you add a one and two zeros to that
                                or we walk! You're going to do his laundry? I've got to find a
                                way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
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
};
</script>

<style></style>
