# MSCFISHProgramAssistant

## Welcome
 Welcome to MSC FISH Program Assistant, a Ruby on Rails application built to help the MSC FISH student organization coordinate and track their program events.

## Setup

First, clone the repository using git clone.
Next, you will want to set up a user in psql with createdb permissions.

The commands to do so are as follows:

1. sudo -u postgres psql (psql postgres for Mac users)
2. CREATE USER mscfishpa_user WITH PASSWORD 'password1';
3. ALTER USER mscfishpa_user CREATEDB;
4. \q (to exit postgres)

After this is done, run "rails db:create" and "rails db:migrate" to create the database on your local machine.
