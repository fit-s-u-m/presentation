angInc = 0.004
angle =0
let stretchy

const sketch5= p =>{
	
	p.setup = ()=>{
		p.createCanvas(p.windowWidth,p.windowHeight) 
		radius = p.width/6

		stretchy = new p.Sprite();
		stretchy.draw = () => {
			p.noFill()
			p.fill(237, 205, 0,200);
			p.push();
				//face
				p.rotate(stretchy.direction);
				p.ellipse(0, 0, 80+ stretchy.speed, 100 - stretchy.speed);
			p.pop();
				//eye
				p.fill(255,100)
				p.ellipse(20, -10, 20,25);
				p.ellipse(-20, -10, 20,25 );
			p.push();
				let ex1 = p.map (p.mouseX,0,p.width,15,25)
				let ex2 = p.map (p.mouseX,0,p.width,-25,-15)
				let ey1 = p.map (p.mouseY,0,p.height,-15,-5)
				p.fill(0)
				p.ellipse(ex1, ey1, 10, 10);
				p.ellipse(ex2, ey1, 10, 10);
			p.pop();
	  }
		stretchy.update = () => {
			// stretchy.moveTowards(p.mouse, 0.009)
		}
		

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

