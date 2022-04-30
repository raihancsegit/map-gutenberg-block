<?php
/**
 * Plugin Name: Advanced Map
 * Plugin URI: https://github.com/advanced-map/
 * Description: advanced-map — is a Gutenberg plugin created .
 * Author: Raihan Islam
 * Author URI: https://raihan.website/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
