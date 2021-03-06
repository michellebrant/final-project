# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170121172706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorizations", force: :cascade do |t|
    t.string   "user"
    t.string   "provider"
    t.integer  "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "user_id"
  end

  create_table "logs", force: :cascade do |t|
    t.string   "day"
    t.string   "food_name"
    t.integer  "calories"
    t.integer  "cal_from_fat"
    t.integer  "protein"
    t.integer  "fat"
    t.integer  "sat_fat"
    t.integer  "sodium"
    t.integer  "sugar"
    t.integer  "carbs"
    t.integer  "servings"
    t.string   "meal"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "user_id"
    t.string   "brand"
  end

  create_table "o_authorizations", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "o_users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "height"
    t.string   "weight"
    t.integer  "log_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "email"
    t.string   "fname"
    t.string   "lname"
    t.string   "goal"
    t.integer  "caloriegoal"
    t.integer  "proteingoal"
    t.integer  "fatgoal"
    t.integer  "satfatgoal"
    t.integer  "sodiumgoal"
    t.integer  "sugargoal"
    t.integer  "carbgoal"
  end

  create_table "weightbydays", force: :cascade do |t|
    t.integer  "weight"
    t.string   "day"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "userid"
  end

end
