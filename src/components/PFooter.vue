<template>
<v-container>
    <v-footer color="primary" dark padless>
        <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                {{ link }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                &copy; {{ new Date().getFullYear() }} — <strong>Alapher W. Hearty</strong>
            </v-col>
        </v-row>
    </v-footer>
</v-container>
</template>

<script>
export default {
    data: () => ({
        links: ["Home", "Services", "About Us", "Contact Us"]
    }),
    methods: {}
};
</script>
