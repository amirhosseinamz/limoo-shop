<template>
     <div  class="tabs__content">
                <div class="w-100">
                        <div v-for="(data,indexParent) in productDetail" :key="indexParent" class="tabs__content-data">
                            <h3 class="tabs__content-title">{{data.label}}</h3>
                        
                            <div class="tabs__content-items">
                                    <div v-for="childContent in data.data" :key="childContent.id" class="tabs__content-item">
                                            <div class="tab__content-wrapper w-100">
                                                <div class="tabs__content-right">
                                                    <h3 class="tabs__content-text">{{childContent.Label}}</h3>
                                                    <span class="tabs__content-line"></span>
                                                </div>
                                                <div class="tabs__content-left">
                                                    <h3 class="tabs__content-text">{{childContent.AttributeValue}}</h3>
                                                </div>
                                            </div>
                                    </div>
                            </div>

                            <div class="tab__more-main">
                                    <div @click="eventShowModalDetailTechnical" class="tab__more" to="/">
                                        مطالب بیشتر
                                        <span class="tab__more-icon mobile--arrow"></span>
                                    </div>
                            </div>

                        </div>
                </div>

            <modal-detail-technical
             :active.sync="showModalDetail"
             :product-data="productDetail"
            ></modal-detail-technical>
     </div>
</template>
<script>
import modalDetailTechnical from './modalDetailTechnical';


export default {
    props: {
        productData  : { type: [Object,Array], default: [] },
      },

    components: {
      modalDetailTechnical,
    },

    data() {
        return {
            productDetail   : [],
            showModalDetail : false,
        };
    },

    watch: {
        productData(data){
             const productDetail = data.response_value[0].values.attribute_groups[0].group_attribute.detailTechnical;
            
            productDetail.map((content)=>{
                for (const key in content) {
                    const allDetail     = content[key];
                    this.productDetail  = [...this.productDetail,allDetail];
                }
            })


        }
    },

    created() {
    },

    mounted() {
        // بسته شدن مودال در سایز های تبلت //
        const width   = window.innerWidth;
        if (760 < width) {
           this.showModalDetail = false;
        }

        this.detectedResizeBrowser();
    },

    methods: {
        eventShowModalDetailTechnical(){
            this.showModalDetail = true;
        },

        detectedResizeBrowser(){
            window.addEventListener("resize", ()=>{
               const width   = window.innerWidth;
                if (760 < width) {
                   this.showModalDetail = false;
                }
                else {
                
                }
            }, true);
        },

    }
};
</script>

<style lang="scss" scoped>
    @import '~/assets/styles/detailTechnical.scss';
    


</style>
