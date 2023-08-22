angInc = 0.004
angle =0
let stretchy

const sketch5= p =>{
	
	p.setup = ()=>{
		p.createCanvas(p.windowWidth,p.windowHeight) 
		radius = p.width/6

		stretchy = new p.Sprite();
		stretchy.draw = () => {
			p.fill(237, 205, 0);
			p.push();
				p.rotate(stretchy.direction);
				p.ellipse(0, 0, 20+ stretchy.speed, 20 - stretchy.speed);
			p.pop();
			p.noCursor()
	  }
		stretchy.update = () => stretchy.moveTowards(p.mouse, 0.09)
		

	} 
	p.draw = ()=>{
		p.clear()
	}
	p.windowResized = ()=> { 
		p.resizeCanvas(p.windowWidth,p.windowHeight)
		radius  = p.width/6
		ballRadius = radius/8
	}
	

}
const sketch6 = new p5(sketch5,"p55")

