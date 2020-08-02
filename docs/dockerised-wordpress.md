
## Dockerised WordPress

> Requirement; Create a dockerised WordPress install with persisted data

### Docker Compose

[docker-compose.yml](./docker-compose.yml) is our friend here. [Docker Compose](https://docs.docker.com/compose) helps us define and run our Docker app, configuring the services etc in Yet Another Markup Language and start the project with the single command `docker-compose up -d`

### Persisting Data

A Volume for persisting data is created in the YAML file, but the database needs to be populated the first time the image is run


#### Dump
```bash
docker exec apnic-virtual-labs_mysql_1 sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > wordpress/database.sql
```

#### Restore
```bash
docker exec -i apnic-virtual-labs_mysql_1 sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < wordpress/database.sql
```
