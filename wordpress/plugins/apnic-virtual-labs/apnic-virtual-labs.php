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
 	$needle = 'src="/';
 	$haystack = file_get_contents(dirname(__FILE__) . '/app/build/index.html');
 	$newNeedle = 'src="' . plugin_dir_url(__FILE__) . 'app/build/';
 	$app = str_replace($needle, $newNeedle, $haystack);
	$ReactApp .= '<div class="virtual-labs">';
	$ReactApp .= $app;
	$ReactApp .= '</div>';
    return $ReactApp;
}

add_shortcode('apnic-virtual-labs', 'apnic_virtual_labs');
