<template lang="html">
    <div class="ps-contact-form">
        <h3>Apply to sell on MartFury Marketplace</h3>
        <form class="ps-form--contact-us">
            <div class="container main-container">
                <!------------------------------------------------------------------------------->
                <!---======================== How can we get in touch? =======================--->
                <!------------------------------------------------------------------------------->
                <div class="field-title">
                    <strong>How can we get in touch?</strong>
                </div>
                <div class="container main-form">
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="First Name"
                                    v-model="seller_name"
                                    :error-messages="sellerNameErrors"
                                    @input="$v.seller_name.$touch()"
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field label="Last Name"></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Email"
                                    v-model="seller_email"
                                    :error-messages="sellerEmailrrors"
                                    @input="$v.seller_email.$touch()"
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Contact Number"
                                    v-model="seller_phone_number"
                                    :maxlength="13"
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Mobile Number"
                                    v-model="seller_mobile_number"
                                    :error-messages="sellerMobileNumberrrors"
                                    @input="$v.seller_mobile_number.$touch()"
                                ></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!------------------------------------------------------------------------------->
                <!---====================== Tell us about your business ======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title">
                    <strong>Tell us about your business</strong>
                </div>
                <div class="container main-form">
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Company Name"
                                    v-model="seller_company_name"
                                    :error-messages="sellerCompnyNamerrors"
                                    @input="$v.seller_company_name.$touch()"
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-select
                                    :items="items"
                                    label="Standard"
                                    v-model="seller_standard"
                                    :error-messages="sellerStandardrrors"
                                    @input="$v.seller_standard.$touch()"
                                >
                                </v-select>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Website (optional)"
                                    v-model="seller_website"
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Social Media (optional)"
                                    v-model="seller_social_media"
                                ></v-text-field>
                            </div>
                        </div>

                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-radio-group
                                    v-model="seller_monthly_revnue"
                                    :error-messages="sellerRevnuerrors"
                                    @input="$v.seller_monthly_revnue.$touch()"
                                >
                                    <template v-slot:label>
                                        <p class="radio-paragraph">
                                            Monthly Revnue
                                        </p>
                                    </template>
                                    <v-radio value="Less than R20k">
                                        <template v-slot:label>
                                            <div>Less than R20k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio value="R20k-R50k">
                                        <template v-slot:label>
                                            <div>R20k-R50k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio value="R50k-R100k">
                                        <template v-slot:label>
                                            <div>R50k-R100k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio value="R100k-R500k">
                                        <template v-slot:label>
                                            <div>R100k-R500k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio value="More than R500k">
                                        <template v-slot:label>
                                            <div>More than R500k</div>
                                        </template>
                                    </v-radio>
                                </v-radio-group>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Business Registration Number"
                                    v-model="seller_business_registration_no"
                                    type="number"
                                ></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!------------------------------------------------------------------------------->
                <!---======================== Business Owner / Director Details =======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title">
                    <strong>Business Owner / Director Details</strong>
                </div>
                <div class="container main-form">
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Business Owner First Name"
                                    v-model="seller_business_owner_fname"
                                    :error-messages="sellerOwner_fnamerrors"
                                    @input="
                                        $v.seller_business_owner_fname.$touch()
                                    "
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Business Owner Last Name"
                                    v-model="seller_business_owner_lname"
                                    :error-messages="sellerOwner_lnamerrors"
                                    @input="
                                        $v.seller_business_owner_lname.$touch()
                                    "
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Business Owner Email Address"
                                    v-model="seller_business_owner_email"
                                    :error-messages="sellerOwner_emailrrors"
                                    @input="
                                        $v.seller_business_owner_email.$touch()
                                    "
                                ></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!------------------------------------------------------------------------------->
                <!---====================== Tell us about your products ======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title">
                    <strong>Tell us about your products</strong>
                </div>
                <div class="container main-form">
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-text-field
                                    label="Number of Unique Products"
                                    v-model="seller_total_products"
                                    :error-messages="sellerTotal_productsrrors"
                                    @input="$v.seller_total_products.$touch()"
                                ></v-text-field>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-textarea
                                    name="input-7-1"
                                    label="
                        What brands or products do you carry? (Optional)"
                                    v-model="seller_product_description"
                                ></v-textarea>
                            </div>
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="form-group">
                                <v-textarea
                                    name="input-7-1"
                                    label="
                            Do you have any additional comments? (Optional)"
                                    v-model="seller_comments"
                                ></v-textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group submit">
                            <button class="ps-btn">Cancel</button>
                            <button
                                class="ps-btn"
                                @click.prevent="handleSubmit"
                            >
                                Apply to Sell
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import Cookies from 'js-cookie';

export default {
    name: 'Login',
    computed: {
        sellerNameErrors() {
            const errors = [];
            if (!this.$v.seller_name.$dirty) return errors;
            !this.$v.seller_name.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerEmailrrors() {
            const errors = [];
            if (!this.$v.seller_email.$dirty) return errors;
            !this.$v.seller_email.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerMobileNumberrrors() {
            const errors = [];
            if (!this.$v.seller_mobile_number.$dirty) return errors;
            !this.$v.seller_mobile_number.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerCompnyNamerrors() {
            const errors = [];
            if (!this.$v.seller_company_name.$dirty) return errors;
            !this.$v.seller_company_name.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerStandardrrors() {
            const errors = [];
            if (!this.$v.seller_standard.$dirty) return errors;
            !this.$v.seller_standard.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerRevnuerrors() {
            const errors = [];
            if (!this.$v.seller_monthly_revnue.$dirty) return errors;
            !this.$v.seller_monthly_revnue.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerRegistrationrrors() {
            const errors = [];
            if (!this.$v.seller_business_registration_no.$dirty) return errors;
            !this.$v.seller_business_registration_no.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerOwner_fnamerrors() {
            const errors = [];
            if (!this.$v.seller_business_owner_fname.$dirty) return errors;
            !this.$v.seller_business_owner_fname.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerOwner_lnamerrors() {
            const errors = [];
            if (!this.$v.seller_business_owner_lname.$dirty) return errors;
            !this.$v.seller_business_owner_lname.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerOwner_emailrrors() {
            const errors = [];
            if (!this.$v.seller_business_owner_email.$dirty) return errors;
            !this.$v.seller_business_owner_email.required &&
                errors.push('This field is required');
            return errors;
        },
        sellerTotal_productsrrors() {
            const errors = [];
            if (!this.$v.seller_total_products.$dirty) return errors;
            !this.$v.seller_total_products.required &&
                errors.push('This field is required');
            return errors;
        },
        seller_Detailsrrors() {
            const errors = [];
            if (!this.$v.seller_product_description.$dirty) return errors;
            !this.$v.seller_product_description.required &&
                errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            seller_name: null,
            seller_email: null,
            seller_phone_number: null,
            seller_mobile_number: null,
            seller_company_name: null,

            seller_standard: null,
            seller_website: null,
            seller_social_media: null,
            seller_monthly_revnue: null,
            seller_business_registration_no: null,
            seller_business_owner_fname: null,
            seller_business_owner_lname: null,
            seller_business_owner_email: null,
            seller_total_products: null,
            seller_product_description: null,
            seller_comments: null,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz']
        };
    },
    validations: {
        seller_name: { required },
        seller_email: { required },
        seller_mobile_number: { required },
        seller_company_name: { required },
        seller_standard: { required },
        seller_monthly_revnue: { required },
        seller_business_owner_fname: { required },
        seller_business_owner_lname: { required },
        seller_business_owner_email: { required },
        seller_total_products: { required }
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            const payload = {
                seller_name: this.seller_name,
                seller_email: this.seller_email,
                seller_phone_number: this.seller_phone_number,
                seller_mobile_number: this.seller_mobile_number,
                seller_company_name: this.seller_company_name,

                seller_standard: this.seller_standard,
                seller_website: this.seller_website,
                seller_social_media: this.seller_social_media,
                seller_monthly_revnue: this.seller_monthly_revnue,
                seller_business_registration_no: this
                    .seller_business_registration_no,
                seller_business_owner_fname: this.seller_business_owner_fname,
                seller_business_owner_lname: this.seller_business_owner_lname,
                seller_business_owner_email: this.seller_business_owner_email,
                seller_total_products: this.seller_total_products,
                seller_product_description: this.seller_product_description,
                seller_comments: this.seller_comments
            };

            if (!this.$v.$invalid) {
                this.$store
                    .dispatch('submitSellerRequest', payload)
                    .then(() => {});
            }
            if (this.$v.$invalid) {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Unsuccessful!!',
                    text: `Please fill all above required fields`
                });
            }
        }
    }
};
</script>
<style scoped>
.main-form {
    background: white;
}

.radio-paragraph {
    font-size: 16px;
}

.field-title {
    font-size: 18px;
    margin: 24px 0px 24px 0px;
}

.main-container {
    width: 60%;
}

.submit {
    margin-top: 30px;
    text-align: right;
}

@media screen and (max-width: 768px) {
    .main-container {
        width: 100%;
    }
}
</style>
