<template>
<div id="side-btn">
    <div class="btn-icon">
        <slot name="btnIcon">
        </slot>
    </div>
    <div class="btn-title">
        <slot name="btnTitle">

        </slot>
        <slot name="btnSubTitle"></slot>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
#side-btn{
    div{float: left;}
}
</style>