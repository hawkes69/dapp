namespace :db do
  desc "Load the parks seed data"
  task parks: :environment do
    load Rails.root.join('db/parks.rb')
    puts "Loaded California Adventure, Sea World, and Disneyland seed data!"
  end
end