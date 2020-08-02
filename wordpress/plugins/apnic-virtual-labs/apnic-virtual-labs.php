<?php
/**
 * Plugin Name: APNIC Virtual Labs
 * Plugin URI: https://listingslab.com/work/apnic
 * Description: Displays a list of APNIC Virtual Labs in WordPress via the shortcode [apnic-virtual-labs]
 * Version: 0.1
 * Text Domain: apnic
 * Author: listingslab
 * Author URI: https://listingslab.com
 */
 
 function apnic_virtual_labs($atts) {
	$ReactApp .= '<div class="virtual-labs">';
	$ReactApp .= 'React App';
	$ReactApp .= '</div>';
	return $ReactApp;
}

add_shortcode('apnic-virtual-labs', 'apnic_virtual_labs');
