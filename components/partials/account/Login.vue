<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Log In Your Account</h5>
            <div class="form-group">
                <span 
                    v-if="backendErrors.email"
                    class="red--text"
                    >
                 {{ backendErrors.email[0] }}
                </span>
                <span v-if="invalidCredential" class="errors">
                 {{ invalidCredential }}
                </span>
                <v-text-field
                    v-model="username"
                    class="ps-text-field"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
                    placeholder="Username or email"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="password"
                    type="password"
                    class="ps-text-field"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Please enter password"
                    height="50"
                    outlined
                />
            </div>
            <div class="float-left">
                <!-- <v-checkbox label="Remember me" color="warning" /> -->
            </div>
             <div class="float-right mb-2">
                <nuxt-link to="/account/forgot-password">Forgot Password</nuxt-link>
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Login
                </button>
            </div>
        </div>
        <div class="ps-form__footer"></div>

        <!-- <div class="ps-form__footer">
            <p>Connect with:</p>
            <ul class="ps-list--social">
                <li>
                    <a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="google">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div> -->
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import Cookies from 'js-cookie';
import { mapState } from 'vuex';


export default {
    name: 'Login',
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This field is required');
            return errors;
        },
        ...mapState({
          auth: (state) => state.auth,
        })
    },
    data() {
        return {
            username: null,
            password: null,
            device_name: 'mobile',
            backendErrors: {},
            invalidCredential: '',
        };
    },
    validations: {
        username: { required },
        password: { required }
    },
    
    methods: {
       async handleSubmit() {
            this.$v.$touch();
            const payload = {
                email : this.username,
                password: this.password,
                device_name: this.device_name
            } 
            if (!this.$v.$invalid) {
                this.$auth.loginWith('local', { data: payload })
                    .then(response => {
                        if(!response.data.status) {
                           this.invalidCredential= response.data.message
                        }
                        if(response.data.status) {
                            this.$auth.setUser(response.data.data.userData)
                            this.$auth.$storage.setUniversal('user', response.data.data.userData)
                            const redirect = this.$store.state.common.redirectUrl;
                            if(redirect) {
                                this.$router.push(redirect)
                            } else {
                            this.$router.push('/')

                            }
                        } 
                    }).catch(error => {
                        this.backendErrors = error.response.data.errors
                    })
            }
        }
    },
    destroyed(){
        
        this.$store.commit('common/setRedirectUrl', null);
    }
};
</script>

<style lang="scss" scoped></style>
