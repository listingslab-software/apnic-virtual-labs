
## WordPress Plugin

A quick, clean way to integrate our React app with WordPress is with a simple Shortcode plugin, which is defined here **/wordpress/plugins/apnic-virtual-labs/apnic-virtual-labs.php**. We add our wordpress directory to Dockerfile

```
COPY wordpress/plugins/apnic-virtual-labs /var/www/html/wp-content/plugins/apnic-virtual-labs/
```

In short, the plugin grabs our app's build folder and returns it to the rendered page. This approach is pleasingly decoupled and modular. When the plugin is activated the react app can be added anywhere in WordPress using the shortcode 

```
[apnic-virtual-labs]
```
