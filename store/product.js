import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    product: null,
    products: null,
    productVariants: [],
    productVariantAttributes: [],
    searchResults: null,
    cartProducts: null,
    wishlistItems: null,
    compareItems: null,
    brands: null,
    categories: null,
    total: 0,
    orderProductList: []
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },
    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },
    setProductVariants(state, payload) {
        state.productVariants = payload;
    }, 
    setProductVariantAttributes(state, payload) {
        state.productVariantAttributes = payload;
    },
    setBrands(state, payload) {
        state.brands = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setTotal(state, payload) {
        state.total = payload;
    },
    setOrderProductList(state, payload) {
        state.orderProductList = payload;
    },
    removeItem(state, payload) {
        const index = state.orderProductList.products.findIndex(item => item.product_vendor_id === payload.id);
        state.orderProductList.products.splice(index, 1);
        if (state.orderProductList.length === 0) {
            state.orderProductList = [];
        }
    },
    updateProductItem(state, payload){
        let selectedItem  = state.orderProductList.products.find(item => item.product_vendor_id === payload.productId);
        if (selectedItem) {
            if(payload.qty=='up'){
                selectedItem.local_qty+=payload.final_increment;
            }

            if(payload.qty=='down'){
                selectedItem.local_qty-=payload.final_decrement;

            }
        }
    },
    updateProductItemUI(state, payload){
        let selectedItem  = state.orderProductList.products.find(item => item.product_vendor_id === payload.productId);
        if (selectedItem) {
          selectedItem.is_dropdown=payload.is_dropdown;
          selectedItem.is_quantity_btn=payload.is_quantity_btn;
          selectedItem.is_quantity_box=payload.is_quantity_box;
        }
    },
};

export const actions = {
    
    async getProducts({ commit }, payload) {
        const reponse = await this.$axios.get(
            `products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
     async getProductVariants({ commit }, payload) {
        const reponse = await this.$axios.post(
            `products/get-product-variant`,payload
        )
            .then(response => {
                commit('setProduct', response.data.data.product[0])
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getTotalRecords({ commit }, payload) {
        const reponse = await this.$axios.get(`products/count`)
            .then(response => {
                commit('setTotal', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsById({ commit }, payload) {
                // commit('setProduct', null);
                // commit('setProductVariants', []);
                // commit('setProductVariantAttributes', []);
        const reponse = await this.$axios.get(`product-detail/${payload}`)
            .then(response => {
                commit('setProduct', response.data.data.product)
                // commit('setProductVariants', response.data.data.variants)
                response.data.data.variantAttributes.forEach(attribute => {
                    attribute.tags = JSON.parse(attribute.tags)
                })
                commit('setProductVariantAttributes', response.data.data.variantAttributes)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await this.$axios.get(
            `products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCartProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await this.$axios.get(`products?${query}`)
            .then(response => {
                commit('setCartProducts', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCheckoutProducts({ commit }, payload) {
        
         const reponse = await this.$axios.get(`customer/fetchCartProducts/${payload.toString()}`)
            .then(response => {

                const cartItemsOnCookie = this.$cookies.get('cart', {
                    parseJSON: true,
                });

                
                var record=response.data.data.products.forEach(product => {
                
                    let qty_arr=[];
                if(product.qty>0){
                    for(var i=1; i<=product.qty;i++){
                        if(i<10){
                            qty_arr.push(i);
                        }else if(i=>10){
                            qty_arr.push('10+');
                        }
                        
                    }
                   
                }
                const existItem = cartItemsOnCookie.cartItems.find(
                    (item) => item.id === product.product_vendor_id
                );

        
                if(existItem.quantity<10){
                    product['is_dropdown']=1;
                    product['is_quantity_btn']=0;
                    product['is_quantity_box']=0;
                
                }else{
                    product['is_dropdown']=0;
                    product['is_quantity_btn']=0;
                    product['is_quantity_box']=1;
                
                }
               
                product['local_qty']=existItem.quantity;
                product['qty_arr']=qty_arr;
            });
            
              commit('setOrderProductList', response.data.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) })) .finally(() => {
              
                $nuxt.$emit('my-custom-event')
            });;
        return reponse; 
    },

    async getWishlishtProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await this.$axios.get(`products?${query}`)
            .then(response => {
                commit('setWishlistItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCompareProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await this.$axios.get(`products?${query}`)
            .then(response => {
                commit('setCompareItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductBrands({ commit }) {
        const reponse = await this.$axios.get(`brands`)
            .then(response => {
                commit('setBrands', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductCategories({ commit }) {
        const reponse = await this.$axios.get(`product-categories`)
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByBrands({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await this.$axios.get(`brands?${query}`)
            .then(response => {
                if (response.data) {
                    const brands = response.data;
                    let products = [];
                    brands.forEach(brand => {
                        brand.products.forEach(product => {
                            products.push(product);
                        });
                    });
                    commit('setProducts', products);
                    commit('setTotal', products.length);
                    return products;
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await this.$axios.get(
            `products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async removeProductFromCart({ commit }, payload) {
        commit('removeItem', payload);
    },
    async updateCheckoutProduct({ commit }, payload) {
      commit('updateProductItem', payload);
    },

    async updateCheckoutProductUI({ commit }, payload) {
        commit('updateProductItemUI', payload);
      },

    async orderSave({ commit }, payload) {
        const reponse = await this.$axios.post(
            `customer/order`,payload
        )
            .then(response => {
                alert(response.data.message);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
};
