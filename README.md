
## APNIC Virtual Labs

```bash
git clone https://github.com/listingslab-software/apnic-virtual-labs.git
cd apnic-virtual-labs
docker build -t apnic-virtual-labs .
docker-compose up -d
docker exec -i apnic-virtual-labs_mysql_1 sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < wordpress/database.sql
```

### Docs

- [Dockerised WordPress](./docs/dockerised-wordpress.md)
- [WordPress Plugin](./docs/wordpress-plugin.md)
- [React](./docs/wordpress-plugin.md)

### Brief

1. Create/Use a Dockerised version of WordPress
2. Write code to consume this list: https://academy.apnic.net/wp-json/academy/virtual-labs
3. Display the list in point 2 on a WordPress page that uses a Frontend framework of your choice (React, Vue.js, Angular etc..) with the following functionality
	- Front end pagination
	- Drag and drop sorting
4. Put the code on Github under your account and send a link to us (hr@apnic.net) so that we can clone it, run it and see the page created in point 3. Please ensure you have a README.md that explains how to run your application.