require 'pry'
require 'httparty'

puts "Please enter URL Address!"
address=gets.chomp

answer=true

  url="http://localhost:3000/"
  response = HTTParty.get(address)
  parsed = response.to_json
  array = ['profession','gender',"first letter of first name"]
  random = rand(array.length)
  puts array[random]+": "+response['results'][array[random]]
  puts "known for"+": "+response['results']['known_for'][rand(3)]

  while answer
  puts "Who could this celebrity be?"
  guess=gets.chomp.gsub(" ","%20")
  response2=HTTParty.get(address+guess)
  parsedg = response2.to_json

  if parsedg['incorrect']
    puts parsedg['incorrect']
    answer=true
  else parsedg['correct']
    puts parsedg['correct']
    answer=false
  end
end


  # while answer
  #   puts "guess again"
  #   guess=gets.chomp.chomp.gsub(" ","%20")
  #
  #   response2=HTTParty.get(address+guess)
  #   parsedg = response2.to_json
  #   if parsedg['incorrect']
  #   puts parsedg
  # end
  # if parsed['correct']
  #   puts 'good job'
  #   answer=false
  # end
  # end
