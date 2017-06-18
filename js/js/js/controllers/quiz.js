(function () {
    
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);
    
    QuizController.$inject = ['quizMetrics', 'DataService'];
    
    function QuizController(quizMetrics){
        var vm = this;
        
        vm.quizMetrics = quizMetrics;
    }
    
    
})();