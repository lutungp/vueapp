<template>
    <Page loaded="pageLoaded" actionBarHidden="true" androidStatusBarBackground="#333867">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <StackLayout class="input-field input-transparent" marginBottom="25">
					<TextField class="input" hint="Email or Username" keyboardType="text" autocorrect="false" autocapitalizationType="none" v-model="user.username"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
                <StackLayout class="input-field input-transparent" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" v-model="user.password" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
                <Button text="Sign In" class="fa btn btn-primary btn-md" @tap="onButtonTap"/>
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>
<script>
import * as http from "http";
import { getString, setString } from "tns-core-modules/application-settings";

export default {
    data() {
        return {
            isLoggingIn: true,
            user: {
                username: "",
                password: "",
            },
        };
    },

    methods : {
        onButtonTap(){
            let me = this;
            if (me.user.username == "" || me.user.password == "") {

                return false;
            }

            let url = "https://api-darbechicken.internaldarbegroup.com/api/login"
            http.request({
                url: url,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    email: me.user.username,
                    password: me.user.password
                })
            }).then(response => {
                var result = response.content.toJSON();
                setString("token", result.token);
                setString("username", result.username);
                me.$store.commit('save', me.user );
                me.$navigator.navigate('/home', { clearHistory: true });
            }, error => {
                console.error(error);
            });
        },

        focusPassword(){
            this.$refs.password.nativeView.focus();
        },

        submit(){

        },
    }
}
</script>
<style src="./../custom.scss" lang="scss" />