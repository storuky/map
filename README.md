## How to start

1. Make your database.yml. You can use database.yml.example for it. 
2. Start bundler and create database
```
bundle
rake db:create
```
3. Restore from dump(100000 records)
```
pg_restore -d map_dev db/db.dump
```

Or you can migrate your database and start seeds.
