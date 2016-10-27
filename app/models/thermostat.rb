require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'

class Thermostat

  include DataMapper::Resource
  property :id, Serial
  property :temp, Integer
  property :city, String
  property :psm, Boolean

  def self.new_therm
   @therm = Thermostat.new
  end

  def self.instance
   @therm
  end

end
