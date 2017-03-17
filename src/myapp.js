angular.module('myapp', [])
    .controller('SampleController', function SampleController(){
        this.tars = "Hello World";
        this.doClear = function() {
            this.tars = "";
        }
    });