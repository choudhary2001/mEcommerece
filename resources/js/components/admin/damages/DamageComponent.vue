<template>
    <div class="row">
        <div class="col-12">
            <BreadcrumbComponent />
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="js">
import BreadcrumbComponent from '../components/BreadcrumbComponent.vue'

export default {
    name: 'DamageComponent',
    components: {
        BreadcrumbComponent
    }
}
</script>