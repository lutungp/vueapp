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

            me.$store.commit('save', me.user );
            me.$navigator.navigate('/home', { clearHistory: true });
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