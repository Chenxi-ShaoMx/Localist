<template>
  <div class="bg-icons" >
    <section>
      <v-layout column>
        <v-flex>
          <v-img
            :src="require('@/assets/community.jpeg')"
            gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
            height="400"
            max-height="50vh"
          >
            <v-layout column justify-center align-center fill-height>
              <div
                class="display-2 font-weight-bold align-left white--text text-capitalize"
              >Become a tour guide</div>

              <v-divider></v-divider>

              <div
                class="title align-left white--text linehi-med"
              >You know something different that others want to know.</div>
            </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </section>

    <!-- 
          ************************
          ** Work on your terms **
          ************************
      -->
      <section>
        <v-layout mt-5 mx-5 justify-center>
          <v-flex md5 mx-5>
            <v-layout wrap justify-center column>
              <v-flex mt-5 xs10 class="subheading font-weight-thin align-left">Join the community</v-flex>
              <v-flex mt-2 xs10 class="display-1 font-weight-bold align-left">Work on your terms</v-flex>

              <v-divider width="15%" color="teal"></v-divider>

              <v-flex class="subheading font-weight-regular align-left linehi-med justify-spacing">
                &nbsp &nbsp &nbsp &nbsp Work on your terms Work on your terms. Work on your terms Work on your terms.
                Work on your terms Work on your terms. Work on your terms Work on your terms.
                Work on your terms Work on your terms. Work on your terms Work on your terms.
                Work on your terms Work on your terms. Work on your terms Work on your terms.
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md5 mx-5 align-self-center>
            <v-img 
							:src="require('@/assets/schedule.jpeg')"
							height="320"
						></v-img>
          </v-flex>
        </v-layout>
      </section>

      <!-- 
            *****************************
            ** Meet Interesting People **
            *****************************
      -->
      <section>
        <v-layout mt-5 mx-5 justify-center>
          <v-flex md5 mx-5 align-self-center>
            <v-img 
							:src="require('@/assets/people.jpeg')" 
							max-height="320"
							></v-img>
						
          </v-flex>

          <v-flex md5 mx-5>
            <v-layout wrap justify-center column>
              <v-flex
                mt-5
                xs10
                class="subheading font-weight-thin align-left"
              >Learn different culture</v-flex>
              <v-flex
                mt-2
                xs10
                class="display-1 font-weight-bold align-left"
              >Meet Interesting People</v-flex>

              <v-divider width="15%" color="teal"></v-divider>

              <v-flex
                xs10
                class="subheading font-weight-regular align-left linehi-med justify-spacing"
              >
                &nbsp &nbsp &nbsp &nbsp Meet Interesting People. Meet Interesting People.
                Meet Interesting People. Meet Interesting People.
                Meet Interesting People. Meet Interesting People.
                Meet Interesting People. Meet Interesting People.
                Meet Interesting People. Meet Interesting People.
                Meet Interesting People. Meet Interesting People.
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </section>

      <!-- 
            **************************************
            ** Make use of your local knowledge **
            **************************************
      -->
      <section>
        <v-layout my-5 mx-5 justify-center>
          <v-flex md5 mx-5>
            <v-layout wrap justify-center column>
              <v-flex
                mt-5
                xs10
                class="subheading font-weight-thin align-left"
              >Sell your unique tour idea</v-flex>
              <v-flex
                mt-2
                xs10
                class="display-1 font-weight-bold align-left"
              >Make use of your local knowledge</v-flex>

              <v-divider width="15%" color="teal"></v-divider>

              <v-flex
                xs10
                class="subheading font-weight-regular align-left linehi-med justify-spacing"
              >
                &nbsp &nbsp &nbsp &nbsp Make use of your local knowledge. Make use of your local knowledge.
                Make use of your local knowledge. Make use of your local knowledge.
                Make use of your local knowledge. Make use of your local knowledge.
                Make use of your local knowledge. Make use of your local knowledge.
                Make use of your local knowledge. Make use of your local knowledge.
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md5 mx-5 align-self-center>
            <v-img
              :src="require('@/assets/city.jpeg')"
							max-height="320"
            ></v-img>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <div>
          <v-parallax :src="require('@/assets/background-camp.jpeg')" height="700">
            <v-layout column align-center justify-center>
              <div
                class="display-2 font-weight-bold align-left white--text text-capitalize"
              >Become a guide</div>

              <v-divider></v-divider>

              <div
                class="title align-left white--text linehi-med text-capitalize"
              >share your passion. create memorable stories.</div>
              <v-btn
                class="cyan darken-2 mt-5 font-weight-black"
                dark
                to="/tours/createtour"
              >Host Your Own Tour</v-btn>
            </v-layout>
          </v-parallax>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: "aboutGuide"
};
</script>

<style>
.linehi-med {
  line-height: 1.6;
}
</style>
