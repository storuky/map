## How to start

The faster way is restoring from the dump (If you're using PostgreSQL).
1. Make your database.yml. You can use database.yml.example for it. 
2. Start bundler and create database
3. Restore from dump (100000 records)
  ```
  bundle
  rake db:create
  pg_restore -d map_dev db/db.dump
  ```

Or you can migrate your database and start seeds.
  ```
  bundle
  rake db:create db:migrate db:seed
  ```
