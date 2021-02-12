# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_11_023537) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "announcements", force: :cascade do |t|
    t.bigint "author_id"
    t.bigint "event_id"
    t.text "content"
    t.datetime "date_posted"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id"], name: "index_announcements_on_author_id"
    t.index ["event_id"], name: "index_announcements_on_event_id"
  end

  create_table "attendees", force: :cascade do |t|
    t.bigint "referred_by_id"
    t.bigint "event_id"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_attendees_on_event_id"
    t.index ["referred_by_id"], name: "index_attendees_on_referred_by_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.integer "max_size"
    t.integer "tickets_sold"
    t.integer "num_checked_in"
    t.datetime "date"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "members", force: :cascade do |t|
    t.string "name"
    t.boolean "is_admin"
    t.integer "num_referrals"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "announcements", "events"
  add_foreign_key "announcements", "members", column: "author_id"
  add_foreign_key "attendees", "events"
  add_foreign_key "attendees", "members", column: "referred_by_id"
end
