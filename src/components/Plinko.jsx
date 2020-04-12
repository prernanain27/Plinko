import React from 'react';
import Matter from 'matter-js';

const {Engine,World,Bodies,Render} = Matter;


class Plinko extends React.Component{

    componentDidMount(){
        this.canvas = document.getElementById('plinko-canvas');
        this.engine = Engine.create();
        this.renderer =  Render.create({
            element: this.canvas,
            engine: this.engine,
            options:{width:500,height:500,hasBounds:true}
            });
        this.world = this.engine.world;
        this.show();
    }

    show=()=>{
        this.particle = Bodies.circle(100,100,10);
        World.add(this.world, [this.particle]);
        Engine.run(this.engine);
        Render.run(this.renderer);
     }

    render(){
        return  <div id="plinko-canvas" style={{backgroundColor:'pink',height:'500px',width:'60%'}}/>
    }
}

export default Plinko;