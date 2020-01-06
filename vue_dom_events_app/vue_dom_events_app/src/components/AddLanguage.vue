<template>
    <div>
        <form @submit="addLanguage">
            <input type="text" v-model="name" name="name" placeholder=" Add language...">
            <input type="submit" value="Submit language" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid'

export default {
    name: "AddLanguage",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addLanguage(e) {
            e.preventDefault();
            const newLanguage = {
                id: uuid.v4(),
                name: this.name,
                learning: false
            }
            this.$emit('add-language', newLanguage);

            this.name = '';
        }
    }
}
</script>

<style scoped>

</style>