require 'sinatra/base'
require './app/models/thermostat'
require_relative 'data_mapper_setup'

class ThermoApp < Sinatra::Base

  enable :sessions
  set :session_secret, 'super secret'

  @thermo = Thermostat.new_therm

  get '/' do
     erb:'index'
  end

  post '/' do
    @thermo = Thermostat.new_therm
    erb:'index'
  end

  post '/data' do
    erb:'index'
    puts params[:temp]
     @thermo = Thermostat.instance
     @thermo.id = Thermostat.instance.id
     @thermo.temp = params[:temp]
     @thermo.city = params[:city]
     @thermo.psm = params[:psm]
     @thermo.save
  end
  # run! if app_file == $0

end
