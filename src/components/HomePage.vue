<template>
    <Page loaded="pageLoaded" actionBarHidden="true">
      <StackLayout backgroundColor="#3c495e">
        <Label :text="username" height="70" backgroundColor="#43b883"/>
      </StackLayout>
    </Page>
</template>

<script >
  import * as http from "http";
  import * as moment from "moment";
  export default {
    data() {
      return {
        username : "",
      }
    },

    beforeCreated () {
      let session = this.$store.getters.isAuth;
      if (!session) {
        this.$navigator.navigate('/login', { clearHistory: true });
      }
    },

    mounted(){
      let user = this.$store.getters.user;
      this.username = user.username;
    },

    methods : {
      
    }
  }
</script>

<style scoped>

</style>
