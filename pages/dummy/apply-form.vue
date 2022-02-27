<template lang="html">
<div class="ps-contact-form">
    <h3>Apply to sell on MartFury Marketplace</h3>
        <form class="ps-form--contact-us">
            <div class="container main-container">

                <!------------------------------------------------------------------------------->
                <!---======================== How can we get in touch? =======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title"><strong>How can we get in touch?</strong></div>
                <div class="container main-form">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="First Name"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Last Name"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Email"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Phone Number"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Mobile Number"></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!------------------------------------------------------------------------------->
                <!---====================== Tell us about your business ======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title"><strong>Tell us about your business</strong></div>
                <div class="container main-form">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Company Name"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-select :items="items" label="Standard"></v-select>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Website (optional)"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Social Media (optional)"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-radio-group v-model="radios">
                                    <template v-slot:label>
                                        <p class="radio-paragraph">Monthly Revnue</p>
                                    </template>
                                    <v-radio>
                                        <template v-slot:label>
                                            <div>Less than R20k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio>
                                        <template v-slot:label>
                                            <div>R20k-R50k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio>
                                        <template v-slot:label>
                                            <div>R50k-R100k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio>
                                        <template v-slot:label>
                                            <div>R100k-R500k</div>
                                        </template>
                                    </v-radio>
                                    <v-radio>
                                        <template v-slot:label>
                                            <div>More than R500k</div>
                                        </template>
                                    </v-radio>
                                </v-radio-group>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Business Registration Number"></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!------------------------------------------------------------------------------->
                <!---======================== Business Owner / Director Details =======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title"><strong>Business Owner / Director Details</strong></div>
                <div class="container main-form">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Business Owner First Name"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Business Owner Last Name"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Business Owner Email Address"></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!------------------------------------------------------------------------------->
                <!---====================== Tell us about your products ======================--->
                <!------------------------------------------------------------------------------->

                <div class="field-title"><strong>Tell us about your products</strong></div>
                <div class="container main-form">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-text-field label="Number of Unique Products"></v-text-field>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-textarea name="input-7-1" label="
                        What brands or products do you carry?"></v-textarea>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="form-group">
                                <v-textarea name="input-7-1" label="
                            Do you have any additional comments? (Optional)"></v-textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div class="form-group submit">
                            <button class="ps-btn">Cancel</button>
                            <button class="ps-btn">Apply to Sell</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
</div>
</template>

<script>


export default {
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>

<style lang="scss" scoped>
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
