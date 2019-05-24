<template>
    <v-layout class="profile">
        <v-flex xs2 md2>
            <ProfileNavigation></ProfileNavigation>
        </v-flex>
        <v-flex xs10 md10>
            <v-layout row wrap>
                <v-flex ml-5 xs10 align-self-end>
                    <h1 class="display-1">{{userName}}</h1>
                    <img v-if="userImage" :src="userImage" class="preview" height="300px">
                    <p class="title">{{gender}}</p>
                    <p class="subheading">{{city}}, {{country}}</p>
                    <p class="subheading">{{description}}</p>

                </v-flex>
                <v-flex>

                </v-flex>

            </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
    import ProfileNavigation from "./ProfileNavigation.vue";
    export default {
        data: () => ({
            userName: "",
            gender: "",
            city: "",
            country: "",
            userImage: "",
            description: ""

        }),
        created(){
            var instance = this;
            this.$http
                .get("/user/find/" + this.$route.params.id)
                .then(function(response){
                    response = response.data;
                    if (response.name) {
                        instance.userName = response.name.first + " " + response.name.last;
                    }
                    if (response.gender) {
                        instance.gender = response.gender;
                    }
                    if (response.location) {
                        instance.country = response.location.country;
                        instance.city = response.location.city;
                    }
                    if (response.image) {
                        instance.userImage = response.image;
                    }
                    if (response.description) {
                        instance.description = response.description;
                    }
                })
        },
        components: { ProfileNavigation }
    }
</script>
<style scoped>
.profile{
    padding-top: 5%;
}
</style>