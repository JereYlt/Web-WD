<?php


add_action( 'woocommerce_thankyou', 'custom_woocommerce_auto_complete_order' );
function custom_woocommerce_auto_complete_order( $order_id ) { 
    if ( ! $order_id ) {
        return;
    }
 
    $order = wc_get_order( $order_id );
    $order->update_status( 'completed' );
}


/*redireccionar luego de la compra
add_action( 'template_redirect', 'wc_custom_redirect_after_purchase' );
 
function wc_custom_redirect_after_purchase() {
 
global $wp;
if ( is_checkout() && ! empty( $wp->query_vars['order-received'] ) ) {
wp_redirect( 'http://prueba.coursesya.com/gracias-por-comprar');
exit;
 
}
}  
*/

//Enviar directamente al pago
add_filter (‘add_to_cart_redirect’, ‘redirect_to_checkout’);

function redirect_to_checkout() {
global $woocommerce;
$checkout_url = $woocommerce->cart->get_checkout_url();
return $checkout_url;

}