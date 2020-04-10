<template>
    <div class="container">
        <form v-on:submit.prevent>
                    <div class="form-group">
                <label for="title">ProductName</label>
                <input type="text" class="form-control" required name="title"
                       v-model="productName"/>
            </div>
                     <div class="form-group">
                <label for="category">ProductCategory</label>
                <input type="text" class="form-control" required name="title"
                       v-model="ProductCategory"/>
            </div>
                 <div class="form-group">
                <label for="price">ProductPrice</label>
                <input type="number" class="form-control"  placeholder="1" step="1" required name="title"
                       v-model="productPrice"/>
            </div>
                                <div class="form-group">
                <label for="picture">ProductPicture</label>
                <input  id="picture" ref="inputFile" type="file" class="form-control" required name="picture"
                      multiple />
            </div>
             <hr class="mb-4"/>
            <button class="btn btn-primary btn-lg btn-block" type="submit"
                    >Create
            </button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
