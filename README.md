# README

This README would normally document whatever steps are necessary to get the
application up and running.

## Setup - Windows/Linux

* Ruby version

* System dependencies

1. sudo -u postgres psql 
2. CREATE USER mscfishpa_user WITH PASSWORD 'password1';
3. ALTER USER mscfishpa_user CREATEDB;
4. \q (to exit postgres)

After this is done, run "rails db:create" and "rails db:migrate" to create the database on your local machine.

## Setup - Mac

### (Steps for railsTest branch.)

1. psql postgres
2. CREATE USER mscfishpa_user WITH PASSWORD 'password1';
3. ALTER USER mscfishpa_user CREATEDB;
4. \q (to exit postgres)
5. bundle install
6. yarn
7. db:create, db:migrate
8. db:seed
9. rails s (to start server)
