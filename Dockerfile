FROM wordpress:php7.1-apache
COPY wordpress/plugins/apnic-virtual-labs /var/www/html/wp-content/plugins/apnic-virtual-labs/