import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import  $  from 'jquery'
import  Granim from 'granim'

import '../css/style.css'
import '../css/fontello.css'


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  componentDidMount () {
    console.log('body loaded');
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

    $(window).scroll(function() {
       if( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 100) ) {
            $(".fb-messenger").css("display", "none");
       }
       else {
            $(".fb-messenger").css("display", "block");
       }
    });
  },
  render () {
    return (
      <div className="templateclass">
        
          {this.props.children}
        
      </div>
    )
  },
})

// $(document).ready(function(){
// var granimElements = ['.jumbotron', '.follow-up', '.get-designs'];

// granimElements.forEach(function(element){
//     var granimInstance = new Granim({
//         element: element+' > .canvas-img',
//         direction: 'left-right',
//         opacity: [.9, .9, .9],
//         isPausedWhenNotInView: true,
//         states : {
//             "default-state": {
//                 gradients: [
//                     ['#00c6ff', '#0072ff', '#0072ff'],
//                     ['#eb3fd9', '#cc00b7', '#eb3fd9'],
//                     ['#ffb20a', '#ff9106', '#ffb20a']
//                 ],
//                 transitionSpeed: 1800
//             }
//         }
//     });
// });
// };



// console.log('jquery here');
// console.log($(window).scrollTop());