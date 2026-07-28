<template>
    <article class="article-body" v-html="post.content">
    </article>
</template>
<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.article-body {
    white-space: pre-wrap;
    color: #374151;
    line-height: 1.9;
    font-size: 1.08rem;
}

.article-body :deep(p) {
    margin-bottom: 24px;
}

.article-body :deep(h1),
.article-body :deep(h2),
.article-body :deep(h3),
.article-body :deep(h4) {
    margin: 40px 0 18px;
    color: #111827;
    font-family: Georgia, serif;
    line-height: 1.3;
}

.article-body :deep(img) {
    width: 100%;
    border-radius: 12px;
    margin: 30px 0;
}

.article-body :deep(blockquote) {
    margin: 35px 0;
    padding: 25px;
    border-left: 5px solid #14532d;
    background: #f8fafc;
    font-style: italic;
}

.article-body :deep(ul),
.article-body :deep(ol) {
    margin: 20px 0 30px 24px;
}

.article-body :deep(li) {
    margin-bottom: 10px;
}

.article-body :deep(a) {
    color: #14532d;
    font-weight: 600;
    text-decoration: underline;
}

.article-body :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
}

.article-body :deep(th),
.article-body :deep(td) {
    border: 1px solid #e5e7eb;
    padding: 12px;
}

.article-body :deep(pre) {
    background: #111827;
    color: #fff;
    padding: 18px;
    border-radius: 8px;
    overflow-x: auto;
}

.article-body :deep(code) {
    font-family: monospace;
}

@media(max-width:768px) {

    .article-body {
        font-size: 1rem;
    }

    .lead {
        font-size: 1.15rem;
    }

    .article-body h2 {
        font-size: 1.6rem;
    }

    blockquote {
        padding: 22px;
        font-size: 1.15rem;
    }

}
</style>