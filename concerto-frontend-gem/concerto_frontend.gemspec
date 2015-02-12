$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "concerto_frontend/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "concerto_frontend"
  s.version     = ConcertoFrontend::VERSION
  s.authors     = ["Gabriel Perez"]
  s.email       = ["perez283@gmail.com"]
  s.homepage    = "https://concerto-signage.org"
  s.summary     = "Concerto Frontend"
  s.description = "A Ruby Gem that contains the Concerto polymer frontend."

  s.files = Dir["{app,config,db,lib}/**/*", "LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.6"

  s.add_development_dependency "sqlite3"
end