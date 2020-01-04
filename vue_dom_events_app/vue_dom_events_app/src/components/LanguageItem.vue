<template>
    <div class="language-item">
        <p>{{ language.name }}</p>
    </div>
</template>

<script>
export default {
    name: "LanguageItem",
    props: ["language"]
}
</script>

<style lang="css" scoped>
    .language-item {
        background: #202C39;
        padding: 10px;
        border-bottom: 1px, #383F51 dotted;
    }

    .is-learning {
        text-decoration: line-through;
    }

    .mark-learning {
        background: #713e5a;
        color: #383F51;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>