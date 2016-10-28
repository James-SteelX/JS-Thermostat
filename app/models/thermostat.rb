require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'

class Thermostat

  include DataMapper::Resource

    property :id,    Serial
    property :temp,  Integer
    property :city,  Text
    property :psm,   Boolean

end
