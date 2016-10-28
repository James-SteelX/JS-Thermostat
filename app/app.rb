require 'sinatra/base'
require './app/models/thermostat'
require_relative 'data_mapper_setup.rb'
require 'json'
require 'gon-sinatra'

ENV['RACK_ENV'] = 'development'

class ThermostatApp < Sinatra::Base

  register Gon::Sinatra

  get '/' do
    @user = Thermostat.first_or_create
    puts @user.city
    gon.temp = @user.temp
    gon.currentcity = @user.city
    gon.psm = @user.psm
    erb :index
  end

  post '/data' do
    @user = Thermostat.first
    @user.temp = params[:temp]
    @user.city = params[:city]
    @user.psm = params[:psm]
    # puts @user.city
    @user.save
  end

end
