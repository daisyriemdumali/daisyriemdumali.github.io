var granimElements = ['.jumbotron', '.follow-up', '.get-designs'];

granimElements.forEach(function(element){
    var granimInstance = new Granim({
        element: element+' > .canvas-img',
        direction: 'left-right',
        opacity: [.9, .9, .9],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#00c6ff', '#0072ff', '#0072ff'],
                    ['#eb3fd9', '#cc00b7', '#eb3fd9'],
                    ['#ffb20a', '#ff9106', '#ffb20a']
                ],
                transitionSpeed: 1800
            }
        }
    });
});