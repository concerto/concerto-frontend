module ConcertoFrontend
  class Engine < ::Rails::Engine
    isolate_namespace ConcertoFrontend
    engine_name "concerto_frontend"

    # Define plugin information for the Concerto application to read
    def plugin_info(plugin_info_class)
      @plugin_info ||= plugin_info_class.new do
        add_view_hook "frontend/ScreensController", :concerto_frontend, partial: "concerto_frontend/frontend"
      end
    end

  end
end
