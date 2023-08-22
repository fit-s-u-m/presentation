 angInc = 0.004
 angle =0
let scribble 
let scribble1

const sketch2 = p =>{
	
	p.setup = ()=>{
		p.createCanvas(p.windowWidth,p.windowHeight) 
		radius = p.width/6
		p.stroke("red")


} 
	p.draw = ()=>{
		p.clear()
		p.translate(p.width/2-280,p.height/2-80)

		const one = p.width/6
		const ballRadius = radius/10
		const x = radius * p.cos(angle)
		const y = radius * p.sin(angle)

		p.stroke(50)
		p.line(0,-radius,0,radius)
		p.line(-radius,0,radius,0)

		p.noFill()
		p.stroke("black")
		p.ellipse(0,0,2*radius) // circle
		p.noStroke()
		p.fill("purple")
		p.ellipse(x,y,ballRadius) // ball

		// p.noFill()
		p.textSize(radius/10)
		p.stroke("red")
		let radOne = (radius/one).toFixed(2) 
		let k = radOne != 1? "*"+radOne:""
		p.text("sin"+k,x,y/2)
		p.stroke("blue")
		p.text("cos"+k,x/2,y)
		p.stroke("purple")
		p.text((radius/one).toFixed(2),x/2,y/2)

		p.stroke(0)
		p.strokeWeight(2)
		p.line(0,y,x,y)
		p.line(x,0,x,y)
		p.line(0,0,x,y)
		p.strokeWeight(1)
		angle-=angInc
	}
	p.windowResized = ()=> { 
		p.resizeCanvas(p.windowWidth,p.windowHeight)
		radius  = p.width/6
		ballRadius = radius/8
	}
}
const sketch1 = new p5(sketch2,"p52")

