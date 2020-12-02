<template lang="html">
  <Page actionBarHidden="true" androidStatusBarBackground="#53ba82">
    <!-- <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="openDrawer()" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
      </GridLayout>
    </ActionBar> -->

    <GridLayout ~mainContent columns="*" rows="*">
      <Label class="message" :text="text" col="0" row="0"/>
    </GridLayout>
    <SD/>
  </Page>
</template>

<script>
import sideDrawer from './mixins/sideDrawer'
import { getString, setString } from "tns-core-modules/application-settings";
import SD from './sideDrawer.vue'
import DC from './drawerContent.vue'
export default {
  mixins: [ sideDrawer ],
  components : { SD, DC },
  data () {
    return {
      text: 'Hello Home Page!'
    }
  },

  beforeCreated () {
    var st = getString('token');
    let session = this.$store.getters.isAuth;
    if (!session) {
      this.$navigator.navigate('/login', { clearHistory: true });
    }
  },
}
</script>

<style lang="css">
</style>