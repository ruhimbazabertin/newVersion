<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style='{width: "50%"}'>Product</th>
                <th style='{width: "10%"}'>Price</th>
                <th style='{width: "8%"}'>Quantity</th>
                <th style='{width: "22%"}' class="text-center">Subtotal</th>
                <th style='{width: "10%"}'></th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <td data-th="Product">
                    <div class="row">
                        <div class="col-sm-3 hidden-xs"></div>
                        <div class="col-sm-9">
                            <h4></h4>
                            <p></p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">$</td>
                <td data-th="Quantity">
                    <label>
                        <input class="form-control text-center" type="number" min="1"/>
                    </label>
                </td>
                <td data-th="Subtotal" class="text-center">$</td>
                <td class="actions" data-th="">
                    <button class="remove-product">
                        X
                    </button>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr class="visible-xs">
                <td class="text-center"><strong>Total </strong></td>
            </tr>
            <tr>
                <td>
                    <router-link to="/" class="btn btn-warning">
                        <i class="fa fa-angle-left"></i> Continue Shopping
                    </router-link>
                </td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center"><strong>Total </strong>
                </td>
                <td>
                    <router-link to="/Checkout" class="btn btn-success btn-block">
                        Checkout
                        <i class="fa fa-angle-right"></i>
                    </router-link>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>

</template>
<script>
export default {
    
}
</script>>