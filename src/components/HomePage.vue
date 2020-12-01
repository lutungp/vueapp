<template>
    <Page loaded="pageLoaded" actionBarHidden="true">
      <StackLayout backgroundColor="#3c495e">
        <Label :text="username" height="70" backgroundColor="#43b883"/>
      </StackLayout>
    </Page>
</template>

<script >
  import * as moment from "moment";
  import { getString, setString } from "tns-core-modules/application-settings";
  export default {
    data() {
      return {
        username : "",
      }
    },

    beforeCreated () {
      var st = getString('token');
      let session = this.$store.getters.isAuth;
      if (!session) {
        this.$navigator.navigate('/login', { clearHistory: true });
      }
    },

    methods : {
      
    }
  }
</script>

<style scoped>

</style>
