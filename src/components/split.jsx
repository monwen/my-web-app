import React, { Component } from 'react';
import '../css/styles.css';

class Split extends Component {
   containerRef = React.createRef();
    state ={
       hovered: false,
       x: null,
       y: null,
       width: null,
       leftWidth: null,
       rightWidth: null,
       leftOpacity: 1,
       rightOpacity: 1,
    }

    
    componentDidMount(){
        const currentWidth = this.containerRef.current.clientWidth;
        this.setState({
            width: currentWidth,
        })
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () =>{
        this.setState({
            width: this.containerRef.current.clientWidth
        });
    }

 

    handleMouseMove = (event) =>{
        const {width,leftOpacity, rightOpacity} = this.state;
        const x = event.clientX;
        let updatedLeft = leftOpacity;
        let updatedRight = rightOpacity;
        this.setState({
            x,
            y: event.clientY
            
        })
        if(!window.matchMedia('(min-width: 768px').matches){
            return;
        }
        //left screen adjustment
        if(x < width/2){
            let hiddenWidth = width*1/3;
            if(x < hiddenWidth && rightOpacity > 0){
                updatedRight = updatedRight - (hiddenWidth-x)/1000;
                if(updatedRight < 0){
                    updatedRight = 0;
                }
              
            }else if(x >= hiddenWidth){
                updatedRight = updatedRight + (x-hiddenWidth)/1000;
                if(updatedRight > 1){
                    updatedRight =1;
                }
                
            }
            
            this.setState(
                {
                    leftWidth:((width/2 - x) + width/2),
                    rightWidth: width - ((width/2 - x) + width/2),
                    rightOpacity: updatedRight
                });
            
        }
        //right screen adjustment
        else if(x > width/2){
            let hiddenWidth = width*2/3;
            if(x > hiddenWidth && leftOpacity > 0){
               
                updatedLeft = updatedLeft - (x-hiddenWidth)/1000;
                if(updatedLeft < 0){
                    updatedLeft = 0;
                }
              
            }else if(x <= hiddenWidth){
                updatedLeft = updatedLeft + (hiddenWidth - x)/1000;
                if(updatedLeft > 1){
                    updatedLeft =1;
                }
                
            }
            this.setState(
                {
                    rightWidth: (x-width/2 + width/2),
                    leftWidth: width - (x-width/2 + width/2),
                    leftOpacity: updatedLeft
                }
            );
        }
        
    }
    
    handleMouseEnter = () =>{
       
        this.setState({hovered: true});
       
        console.log("cursor entered the component");
    }

    handleMouseLeave = () =>{
        const {width} = this.state;
        this.setState(
            {
                hovered: false,
                leftWidth: width/2,
                rightWidth: width/2,
                leftOpacity: 0.5,
                rightOpacity: 0.5,

            }
        );
        console.log("cursor left the component");
    } 

    render() { 
        const {leftWidth, rightWidth, leftOpacity, rightOpacity} = this.state;
        const screenSize = window.matchMedia('(min-width: 768px').matches;
        const styleLeft = screenSize?leftWidth:null;
        const styleRight = screenSize?rightWidth:null;
        
        return (
            <div  ref={this.containerRef}>
                <div className="split-screen-container">
                    <div className="split-screen-container__left" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onMouseMove={this.handleMouseMove} style={{width: styleLeft}}>
                        <div className="split-screen-container__left__content" style={{opacity: leftOpacity}}>
                            <h1 className='split-screen-container__h1'>Front-end</h1>
                            <p className='split-screen-container__p'>Front end developer who passionate about building UIs</p>
                        </div>
                    </div>
                    
                    <div className="split-screen-container__right" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onMouseMove={this.handleMouseMove} style={{width: styleRight}}>
                        <div className="split-screen-container__right__content" style={{opacity: rightOpacity}}>
                                <h1 className="split-screen-container__h1">Back-end</h1>
                                <p className='split-screen-container__p'>Dedicated back end developer who buids cutting edge infrastructures</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Split;