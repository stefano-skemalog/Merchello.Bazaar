    /**
     * @ngdoc service
     * @name merchello.services.settingDisplayBuilder
     *
     * @description
     * A utility service that builds SettingDisplay models
     */
    angular.module('merchello.models')
        .factory('settingDisplayBuilder',
        ['genericModelBuilder',
            function(genericModelBuilder) {

                var Constructor = SettingDisplay;

                return {
                    createDefault: function() {
                        return new Constructor();
                    },
                    transform: function(jsonResult) {
                        return genericModelBuilder.transform(jsonResult, Constructor);
                    }
                };
            }]);
