require 'bundler'
Bundler.require

get '/' do
  erb :index
end

get '/area' do
  erb :area
end

get '/slope' do
  erb :slope
end

get '/salestax' do
  erb :salestax
end