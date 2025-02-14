<template>
    <LoadingComponent :props="loading"/>
    <section class="mb-10 sm:mb-20">
        <div class="container">
            <div class="flex items-center justify-between gap-5 mb-6 max-md:mb-8">
                <div class="flex flex-wrap items-end gap-3 max-md:flex-col max-md:items-start max-md:gap-1.5">
                    <h3 class="text-3xl font-bold capitalize max-sm:text-lg">
                        {{ $t('label.flash_sale') }}
                    </h3>
                    <span class="text-xl font-medium capitalize max-sm:text-sm">
                        ({{ products.length }} {{ products.length > 1 ? $t('label.products_found') : $t('label.product_found') }})
                    </span>
                </div>
            </div>

            <div class="w-full max-md:p-0">
                <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mb-12">
                    <LoadingContentComponent :props="loadingContent"/>
                    <ProductListComponent v-if="products.length > 0" :products="products"/>
                </div>
                <PaginationComponent @pagination-change-page="flashSaleProducts" :data="pagination" :limit="1" :keep-length="false"/>
            </div>
        </div>
    </section>
</template>

<script>
import ProductListComponent from "../components/ProductListComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import LoadingContentComponent from "../components/LoadingContentComponent.vue";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
    name: "FlashSaleProductComponent",
    components: {
        LoadingComponent,
        LoadingContentComponent,
        ProductListComponent,
        PaginationComponent,
    },
    data() {
        return {
            loading: {
                isActive: false,
            },
            loadingContent: {
                isActive: false
            },
        }
    },
    computed: {
        pagination: function () {
            return this.$store.getters["frontendProduct/flashSaleProductPagination"];
        },
        products: function () {
            return this.$store.getters["frontendProduct/flashSaleProducts"];
        }
    },
    mounted() {
        this.flashSaleProducts();
    },
    methods: {
        flashSaleProducts: function (page = 1) {
            this.loadingContent.isActive = true;
            this.$store.dispatch("frontendProduct/flashSaleProducts", {
                paginate: 1,
                page: page,
                per_page: 30,
                order_column: "name",
                order_type: "asc",
            }).then((res) => {
                this.loadingContent.isActive = false;
            }).catch((err) => {
                this.loadingContent.isActive = false;
            });
        },
    }
}
</script>
