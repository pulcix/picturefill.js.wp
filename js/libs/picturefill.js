/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){
	
	// Enable strict mode
	"use strict";

	w.picturefill = function() {
		var ps = w.document.getElementsByTagName( "span" );
		
		// Loop the pictures
		for( var i = 0, il = ps.length; i < il; i++ ){
			if( ps[ i ].getAttribute( "data-picture" ) !== null ){

				var sources = ps[ i ].getElementsByTagName( "span" ),
					matches = [];
			
				// See if which sources match
				for( var j = 0, jl = sources.length; j < jl; j++ ){
					var media = sources[ j ].getAttribute( "data-media" );
					// if there's no media specified, OR w.matchMedia is supported 
					if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
						matches.push( sources[ j ] );
					}
				}

			// Find any existing img element in the picture element
			var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

			if( matches.length ){			
        var matchedEl = matches.pop();
				if( !picImg ){
					picImg = w.document.createElement( "img" );
					picImg.id = ps[ i ].getAttribute( "data-id" );
					picImg.className = ps[ i ].getAttribute( "data-class" );
					picImg.alt = ps[ i ].getAttribute( "data-alt" );
					picImg.title = ps[ i ].getAttribute( "data-title" );
          if(ps[i].getAttribute("data-width")){
            picImg.width = ps[ i ].getAttribute( "data-width" );
          }
          if(ps[i].getAttribute("data-height")){
            picImg.height = ps[ i ].getAttribute( "data-height" );
          }
				}

        if(matchedEl.getAttribute( "data-width" )){
          picImg.width =  matchedEl.getAttribute( "data-width" );
        }
        if(matchedEl.getAttribute( "data-height" )){
          picImg.height =  matchedEl.getAttribute( "data-height" );
        }
				picImg.src =  matchedEl.getAttribute( "data-src" );
        matchedEl.appendChild(picImg);
			}
			else if( picImg ){
				picImg.parentNode.removeChild( picImg );
			}
		}
		}
	};
	
	// Run on resize and domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "resize", w.picturefill, false );
		w.addEventListener( "DOMContentLoaded", function(){
			w.picturefill();
			// Run once only
			w.removeEventListener( "load", w.picturefill, false );
		}, false );
		w.addEventListener( "load", w.picturefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.picturefill );
	}
	
}( this ));
