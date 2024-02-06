# README

This is a working directory that contains a simple app to track the completion percentage of various amusement parks in Orlando. My wife and I would like to "100%" (complete every attraction and eat at every restaurant) each of the parks and want a simple web app to keep track of our progress. This will be a mobile-first app and I don't plan to have a working desktop implementation as we will almost exclusively access this from our phones while in the parks. 

## Things that need to be implemented. 

* Ruby Backend
* User Authentication
* React front end
* Rails api
* Host app

## Feature wishlist

* Progress bar
* Date night generator (uncompleted ride, restaurant, and show)
* Fog of war map to demonstrate progression

## TODO
-[] Shows Table and data
-[] join table for user and attraction
-[] join table for user and restaurant
-[] join table for user and show
-[] update crud actions to work with join table

- [] FRONTEND *sparkle*

-[] user login
-[] user authentication simple

should look something like this 

```ruby
# Example usage
user = User.find(1)
attraction = Attraction.find(1)

# Add attraction to user
user.attractions << attraction

# note this won't update the full db just that users join table. So if we add some attractions it will update our table but no one elses. For this use case I think that's fine.
# Just make sure my seed file is good
```