<template>
<v-row class="mr-top">
    <v-col cols="12">
        <div class="d-flex flex-column justify-center align-center initial-screen__book">
                <svg xmlns="http://www.w3.org/2000/svg" width="237" height="200" viewBox="0 0 237 200">
                    <g fill="none" fill-rule="nonzero">
                        <path fill="#9198AF" d="M224.741 183.673h-89.896c-6.742 0-16.345 7.143-16.345 16.327V12.245C118.5 5.51 124.016 0 130.759 0h93.982C231.484 0 237 5.51 237 12.245v159.184c0 6.734-5.516 12.244-12.259 12.244z"/>
                        <path fill="#C0C3D2" d="M12.259 183.673h89.896c6.742 0 16.345 7.143 16.345 16.327V12.245C118.5 5.51 112.984 0 106.241 0H12.26C5.516 0 0 5.51 0 12.245v159.184c0 6.734 5.516 12.244 12.259 12.244z"/>
                    </g>
                </svg>    

            <span class="initial__text dark">Nenhum contato foi criado ainda</span>
            <br>
            <NewContactButton/>
        </div>
    </v-col>
</v-row>
</template>

<script setup lang="ts">
import NewContactButton from '@/components/buttons/NewContactButton.vue'

</script>

<style lang="scss" scoped>
.initial {
    &__book {
        margin-top: 7rem;
    }

    &__text {
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
    }
}

.mr-top{
    margin-top: 10%;
}
</style>