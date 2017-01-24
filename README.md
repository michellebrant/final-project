# README

Welcome to My Meal Planner! A nutrition and meal tracker powered by Under Armour and Nutritionix. This app was built in Ruby on Rails with Javascript. 

# Ruby on Rails

This App uses:
- Ruby 2.2.3 with Rails 5.0.0.1 
- Javascript/JQuery
- OmniAuth
- OmniAuth-UnderArmour 
- Chartkick
- Simple Calendar 2.0

# Wireframes and Screenshots

![Homepage Wireframe](https://github.com/michellebrant/my-meal-planner/blob/master/wireframe.png)

![Homepage Screenshot](https://github.com/michellebrant/my-meal-planner/blob/master/MMP.png)

# User Story

The target users for this app are young adults looking for a way to track their meals and nutritional value intake.

As a user, I can track my weight and meals/nutrient intake in order to track progress and create a plan of action to achieve that progress.


# API and other Services

This app utilizes UnderArmour OAuth 2.0 login to create a simpler sign up experience for the user, and the Nutritionix API to power the nutrition data.

# Database

Our database uses ActiveRecords' Postgresql's power to support our growing user base.

# Models

The app uses four tables in the database: Authorizations, Logs, Users and Weightbydays.

# Deployment Instructions

Heroku was used to deploy this app. You can find it here: https://my-meal-planner.herokuapp.com/login
