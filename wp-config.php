<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'M&4eHa`4rI){Lp>Es~zPROl/,JuqEP_M4TIq3bTsRb{~B~R@+J-V(S)Wm]mY)gL#' );
define( 'SECURE_AUTH_KEY',   'Vhe[%10M H#?w_<!2Du4V+^AX)el6,CBKP,?EC=sN#3p<N/PA4^4Vx[;-0~+_Sx_' );
define( 'LOGGED_IN_KEY',     'NMN4Uc eK%Y(<)Ew1>pgIAJ1[K)C2ZY(@VTaWzyk(T3@V:KnN%h2oZS]vWLRDL1O' );
define( 'NONCE_KEY',         ']K9S>z8r|(wtk7TyR/.RhtT<ZaPVdn0r]cmu:v}Ys0^R7:gUvB2p#om?ZjeVwMp#' );
define( 'AUTH_SALT',         'GX,vYrBmfa_bPZX#Y=4Kr~Agyl5MH{pTN5SP}0p)FJu3O%}u(1N4_59y6/JYJh}K' );
define( 'SECURE_AUTH_SALT',  ';+LEDzf/ReDiHfEdAkHe=aQ-blq2b7|bIuh_oH>*^rGCxk2IkVQEN]i)SIli)1H9' );
define( 'LOGGED_IN_SALT',    '/LQZkZ9m@I2>&T4TF|4*cEAC-I<Y>1_PgaaY4XAo]3/LGsu|W;+H?>=+NXnImR,z' );
define( 'NONCE_SALT',        '%BUW_7q}7EyfLsE+^gak208.FR>4[W4$XMHqbr2Z,w@9tzbfK(TLKPi%A-,F^+W|' );
define( 'WP_CACHE_KEY_SALT', 'eNP3-9eb=cf|Ad8,A`4bTdPmby]}<7SB7brfC|QWa=?<#$B}ayo9Y1;ZJLG!I$&-' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
