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

ActiveRecord::Schema.define(version: 2021_02_15_220810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "announcements", force: :cascade do |t|
    t.bigint "author_id"
    t.bigint "event_id"
    t.string "title", null: false
    t.text "content", null: false
    t.boolean "external", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id"], name: "index_announcements_on_author_id"
    t.index ["event_id"], name: "index_announcements_on_event_id"
  end

  create_table "attendees", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_attendees_on_email", unique: true
  end

  create_table "eventattendances", force: :cascade do |t|
    t.bigint "event_id"
    t.bigint "attendee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attendee_id"], name: "index_eventattendances_on_attendee_id"
    t.index ["event_id"], name: "index_eventattendances_on_event_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.string "location"
    t.string "event_type"
    t.integer "max_size", null: false
    t.integer "tickets_sold", default: 0, null: false
    t.integer "num_checked_in", default: 0, null: false
    t.datetime "date"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "members", force: :cascade do |t|
    t.bigint "role_id"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.integer "num_referrals", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["role_id"], name: "index_members_on_role_id"
  end

  create_table "referrals", force: :cascade do |t|
    t.bigint "member_id"
    t.bigint "attendee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attendee_id"], name: "index_referrals_on_attendee_id"
    t.index ["member_id"], name: "index_referrals_on_member_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_roles_on_name", unique: true
  end

  add_foreign_key "announcements", "events"
  add_foreign_key "announcements", "members", column: "author_id"
  add_foreign_key "members", "roles"
end
