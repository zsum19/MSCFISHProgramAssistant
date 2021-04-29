# README

* Link to unedited README Video (1080p): https://drive.google.com/file/d/10RfqUfVjsD2qS2eBn0st2oYTK05aCnO-/view?usp=sharing
* Link to edited README Video (360p): https://drive.google.com/file/d/19lEJb4FMGhf94dzvxyiNcgZGzNsGNa4-/view?usp=sharing

Please install Ruby, Rails, Node, Yarn, and PostgresSQL before following the README instructions.

## Versions:
* Ruby - 3.0.1
* Rails - 6.1.3.1
* Node - 14.16.0
* Yarn - 1.22.5

## Setup - Windows(WSL)/Linux/Mac (Assuming Ruby, Rails, and PostgresSQL have already been installed)

1. sudo -u postgres psql 
2. CREATE USER mscfishpa_user WITH PASSWORD 'password1';
3. ALTER USER mscfishpa_user CREATEDB;
4. \q (to exit postgres)
5. Might need to change how the user is authenticated in postgres config file:
    * Follow instructions in this link: https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge
6. Change user and password in database.yml to use the mscfishpa_user information to test locally (currently commented out)

## Executing the code

1. bundle install
2. yarn
3. rails db:create
4. rails db:migrate
5. rails db:seed (seed the development database)
6. RAILS_ENV=test rake db:test:prepare db:seed (seed the test database)
7. rails s (to start server)

## Deployment on Heroku (Assuming a Heroku account has already been made and is installed on the system)

* No extra steps are required to deploy the application on Heroku. Simply pull from main and follow this tutorial to set up a basic deployment:
   * https://devcenter.heroku.com/articles/git

#### *** Be sure to include packs when committing to Github so that the front-end changes are recompiled. ***

## Committing to Github - CI/CD

#### *** Be sure to change the user in database.yml back to postgres user and password before committing to allow CI to pass. ***

### CI - on Github

* No additional steps are required to set up CI. CI is managed by the main.yml file in the .github/workflows folder. If you would like when CI is run (currently on pushs, pull requests, and merges to main) you may modify this file before committing your code to Github.

### CD - on Heroku

* Please see previous steps on how to deploy to Heroku.
* Set up a Heroku pipeline with any necessary applications and connect it to the main branch.
    * We used a staging application with automatic deployments from the main branch and a production app that would be directly fed from the staging app.
    * There was also some use of a sub-staging app that was used to test production versions of code (automatically deployed from a Github branch) to avoid merging to main while       committing code.
* No additional steps are required after the pipeline is setup and automatic deploys are configured. You may test on the staging application before promoting to the production application.
