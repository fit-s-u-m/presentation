let angInc = 0.008 
let angle =0
let phi = 0
let currentSceneIndex = 0

let circleButtonIsOn				 = false
let circlingBallButtonIsOn	 = false
let makeCircleButtonIsOn		 = false
let makeEllipse              = false
let midPointButtonIsOn			 = false
let ballsButtonIsOn					 = false
let sinGraphButtonIsOn			 = false
let cosGraphButtonIsOn			 = false
let vertCosGraphButtonIsOn	 = false
let showDerivativeButtonIsOn = false
let isevenButtonIsOn         = false
let isAllTrigButtonOn        = false
let isquareButtonOn          = false
let isSinCosVisualied        = false
let isTanSecVisualied        = false
let isCotCscVisualied        = false
let phiOn                    = false

let stop                     = false

let input

let xPoints = [] // for collecting value of x's
let yPoints  = [] // for collecting value of y's
let nextX =[]
let nextY =[]
let xMid =[]
let yMid =[]
let radius
let radiusOne
let cam


const sketch = p =>{

	 p.setup = ()=>{ 

		const can = p.createCanvas(p.windowWidth,p.windowHeight,p.WEBGL) // creates a HTML5 canvas
		can.parent('can-container')
		p.debugMode()
		radius = p.width/6
		radiusOne = p.width/6

	 }

	 p.draw = ()=>{
		p.clear() 
		p.orbitControl()
		const ballRadius = p.width/80

		const x = radius * p.cos(angle)
		const y = radius * p.sin(angle)
		const always= ()=>{ 
			p.noStroke()
			p.fill(0,0,255,150)
			p.cylinder(5,p.height)
			p.fill(255,0,0,150)
			p.push()
				p.rotateZ(p.PI/2)
				p.cylinder(5,p.height)
			p.pop()

			xPoints.length >500 ? xPoints.pop() :null
			yPoints.length >500 ? yPoints.pop() :null
			xMid.length    >500 ?    xMid.pop() :null
			yMid.length    >500 ?    yMid.pop() :null
			nextX.length  =0 
			nextY.length  =0 
	   }
		 always()

			xPoints.unshift(x) 
			yPoints.unshift(y)

			// if this                   then                                     else 
			circleButtonIsOn				 ? showCircle(x,y,radius)                            :null 
			circlingBallButtonIsOn	 ? showCirclingBall(x,y,xPoints,yPoints,ballRadius)  :null
			sinGraphButtonIsOn       ? showSinGraph(xPoints,yPoints)							               :null
		 	cosGraphButtonIsOn       ? showCosGraph(x,xPoints)                             :null
			isSinCosVisualied        ? sinV(x,y,radius,ballRadius)						           :null
			if(!circlingBallButtonIsOn && !midPointButtonIsOn && !sinGraphButtonIsOn && !cosGraphButtonIsOn) { xPoints.length=0;yPoints.length=0 }

			p.stroke(0)
			p.noFill()
			p.strokeWeight(1)
			angle-=angInc
			circleButtonIsOn = true

		}

	p.windowResized = ()=> { 
		p.resizeCanvas(p.windowWidth,p.windowHeight)
		radius  = p.width/6
		ballRadius = radius/8
	}
	const showCircle = (x,y, radius) =>{
		if(phiOn){
			let rad1 = p.dist(0,0,x,y)
			let ang1 = p.atan2(y,x)
			let x1 = rad1*p.cos(ang1+phi) 
			let y1 = rad1*p.sin(ang1+phi) 
			p.push()
				p.translate(x1,y1)
				p.fill("pink")
				p.sphere(radius/30)
			p.pop()
			xMid.unshift(x1)
			yMid.unshift(-y1)

		}
		p.noFill()
		p.strokeWeight(2.5) 
		p.stroke(0)
		p.smooth()
		p.ellipse(0,0,2*radius)
		p.noStroke()
		p.fill("purple")
		p.push()
				p.translate(x,y)
				p.sphere(radius/30)
		p.pop()
		p.strokeWeight(4)
		p.stroke(100)

		if(makeCircleButtonIsOn){
			p.line(0, 0, x, y)
			p.line(x, y, 0, y)
			p.line(x, y, x, 0) 
			p.noFill()
			p.stroke(100)
			p.strokeWeight(2)
			p.arc(0,0,100,100,angle,0)

		}

	}
	const showCirclingBall = (x, y,xs,ys, ballradius) =>{

			p.stroke("orange")
			p.noFill()

			for(let i =20 ;i <xs.length/2; i+=20){
				// let z = p.map(i,0,xPoints.length/2,0,p.width)
		    p.push()
					p.translate(xs[i],ys[i],-i*2)
					p.sphere(ballradius/2)
		    p.pop()
				p.push()
					p.translate(0,0,-i*2)
					p.strokeWeight(2.5) 
					p.stroke(0)
					p.ellipse(0,0,2*radius)
				p.pop()
			}
		
		p.strokeWeight(4)
		p.stroke(50)
		p.line(0, 0, x, y)
		p.line(x, y, 0, y)
		p.line(x, y, x, 0) 

		p.noFill()
		p.stroke(255,50)
		p.strokeWeight(2)
		p.arc(0,0,100,100,angle,0)
		
	}
	
  const makeCircle = (x, y, radius) =>{

		showDerivativeButtonIsOn=false	
		isevenButtonIsOn = false
		isAllTrigButtonOn =false
		isquareButtonOn  = false
		ballsButtonIsOn = false

		p.stroke(180)
		p.strokeWeight(2)
		let slope = -y/x
		let theta = p.atan(slope)

		let d = radius*3/2
		nextX.unshift ( x      + (d*p.cos(theta)*(-x/p.abs(x))) )
		nextY.unshift ( 0      + (d*p.sin(theta)*(-x/p.abs(x))) )
		p.line(x,0,nextX[0],nextY[0])
		
		p.noStroke()
		// rectMode(RADIUS)
		p.fill("red")
		p.push()
			p.translate(0,y)
			p.box(radius/20,radius/5,radius/20)
		p.pop()
		p.push()
			p.fill("blue")
			p.translate(x,0)
			p.box(radius/5,radius/20,radius/20)
		p.pop()
		p.noFill()
		p.stroke(255,150)
		p.push()
			p.translate(0,0)
			p.box(radius*2,radius/30)
			p.box(radius/30,2*radius,radius/30)
		p.pop()

		
		p.beginShape()
			p.stroke("white")
			p.noFill()
			for(let i=0;i<nextX.length;i++){
				p.push()
					p.translate(nextX[i],nextY[i])
					p.cylinder(2) 
				p.pop()
			}
		p.endShape()

		nextX.length >500 ? nextX.pop(): null
		nextY.length >500 ? nextY.pop(): null
		xPoints.length >500 ? xPoints.pop() :null
		yPoints.length >500 ? yPoints.pop() :null
		
	}
	const showMidPoint = (x, y, xs, ys, radius) => {
		p.stroke("white")
		p.strokeWeight(2)
		p.noFill()
		p.line(x,0,0,y)
		p.push()
			p.fill("blue")
			p.translate(x,0)
			p.sphere(radius/30)	
		p.pop()
		p.push()
			p.fill("red")
			p.translate(0,y)
			p.sphere(radius/30)	
		p.pop()
		
		p.beginShape()
				for (let i=0; i<xs.length; i+=10){
					p.circle(xs[i]/2, ys[i]/2, radius/30)
				}
		p.endShape()
		p.stroke("black")
		p.line(0,0,x/2,y/2)
		
	}
	const showBalls =(radius,angle,num,ballRadius)=> {
		p.stroke("white")
		p.strokeWeight(1)
		p.noFill()
		p.ellipse(0,0,radius*2)
		const angledivided = 360/num
		
		for (let i=0; i<360;i+=angledivided){
			p.push()
				p.angleMode(p.DEGREES)
				p.rotate(i)
				const xi = radius * p.cos(p.degrees(angle)-i)
				const yi = radius * p.sin(p.degrees(angle)-i)
				
				let hue = p.map (i,0,360,0,255)
				p.colorMode(HSB,255)
				p.strokeWeight(2)
				p.fill(hue,255,200)
				p.stroke(hue,255,200)
				p.line(-radius,0,radius,0)
				p.line(0,-radius,0,radius) 
				p.push()
				p.translate(xi,0)
				p.sphere(ballRadius)
				p.pop()
				p.push()
				p.translate(0,yi)
				p.sphere(ballRadius)
				p.pop()
			p.pop()
		}
			p.angleMode(RADIANS)
	}
	const showSinGraph = (xs,ys) =>{
		circleButtonIsOn = true
		 p.beginShape()
			 let sintime =0
			 const skipTime = 10
			 p.noFill()
			 p.stroke("blue")
			 p.strokeWeight(2)
			 for(let i=0; i<ys.length;i+=skipTime){
				 p.push()
					 p.translate(sintime,ys[i])
					 p.sphere(5)
					 sintime+=skipTime
				 p.pop()
			 }
		  p.endShape()
			p.push()
		 		p.stroke(200)
		   	p.translate(xs[0]/2,ys[0])
			  p.rotateZ(p.PI/2)
				p.cylinder(2,xs[0])
			p.pop()
      	
		 if(isevenButtonIsOn){
				p.beginShape()
				 let sintime2 =0
				 for(let i=0; i<ys.length;i+=skipTime){
					 p.push()
						 p.translate(sintime2,-ys[i])
					  	p.fill("blue")
						 p.sphere(5)
						 sintime2+=skipTime
					 p.pop()
				 }
				p.endShape()
		 }
		 if(phiOn){
				p.beginShape()
				 let sintime2 =0
				 for(let i=0; i<yMid.length;i+=skipTime){
					 p.push()
						 p.translate(sintime2,-yMid[i])
					 		p.noStroke()
					 		p.fill(0,100,0)
						  p.sphere(5)
						 sintime2+=skipTime
					 p.pop()
				 }
				p.endShape()
				p.push()
			 	p.stroke(200)
			  p.translate(xMid[0]/2,-yMid[0])
				p.rotateZ(p.PI/2)
				p.cylinder(2,xMid[0])
				p.pop()

		 }
	}
	const showCosGraph = (x, xs ) =>{
		 p.beginShape()
			 let costime =0
			 const skipTime = 10
			 p.noFill()
			 p.stroke("red")
			 p.strokeWeight(2)
			 for(let i=0; i<xs.length;i+=skipTime){
				 p.push()
					 p.translate(costime,xs[i])
					 p.sphere(5)
					 costime+=skipTime
				 p.pop()
			 }
			p.push()
		 		p.stroke(200)
		   	p.translate(xs[0],yPoints[0]/2)
			  // p.rotateZ(p.PI/2)
				p.cylinder(2,yPoints[0])
			p.pop()

		p.endShape()
		p.stroke("black")
		p.line(x,0,0,xs[0])
		p.push()
			p.translate(x,0)
			p.sphere(8)
		p.pop()
	}
	const sinV = (x,y,radius,ballRadius)=>{
		// let x = p.mouseX-p.width/2
		// let y = -p.sqrt(radius**2-x**2)
		// let xM = p.mouseX-p.width/2
		// let yM =  p.mouseY-p.height/2
		// let ang = p.atan2(xM,yM)
		// let x = p.radius * p.cos(ang)
		// let y = p.radius * p.sin(ang)

		p.stroke("gold")
		if(x< radius && x > -radius) {
			p.push()
				p.noStroke()
				p.fill("yellow")
				p.translate(x,y)
				p.sphere(ballRadius/4)
			p.pop()
			p.push()
				p.fill(0)
				p.translate(x,0,y/2)
				p.rotateY(p.PI/2)
				p.strokeWeight(1)
				p.rect(0,0,y,y)
			p.pop()
			p.push()
				p.strokeWeight(1)
				p.stroke("red")
				p.rotateZ(p.PI/2)
				p.translate(0,-x/2)
				p.cylinder(5,x)
			p.pop()

		 }
	}
	p.keyPressed = ()=> {


		if (p.keyCode === 219 )  // [
			angInc+=0.002
		else if (p.keyCode ===221 )  // ]
			angInc-=0.002
		else if (p.keyCode === 84 ) // t
			isSinCosVisualied = !isSinCosVisualied
		else if (p.keyCode ===89) // y
			sinGraphButtonIsOn = !sinGraphButtonIsOn
		else if (p.keyCode ===87) // w
			cosGraphButtonIsOn = !cosGraphButtonIsOn
		else if (p.keyCode === 82) // r
			circlingBallButtonIsOn = !circlingBallButtonIsOn
		else if (p.keyCode === 65) // a
			 makeCircleButtonIsOn =!makeCircleButtonIsOn
		else if (p.keyCode === 80) // p
			 angInc =0
		else if (p.keyCode === 37) // left
			 radius -=10
		else if (p.keyCode === 39) // right
			 radius +=10
		else if (p.keyCode === 38) // up
			 phi +=p.PI/10
		else if (p.keyCode === 40) // down
			 phi -=p.PI/10
		else if (p.keyCode === 73) // i
			 phiOn= !phiOn
		else if (p.keyCode === 81) // q
			 phi=p.PI/2
  }
}

const p1 = new p5(sketch,"p5")

// const tanV = (radius,ballradius) =>{
// 	styleWhenButtonOn("#tanSecVButton")
// 	stroke("white")
// 	strokeWeight(1)
// 	// let x = mouseX-width/2
// 	// let y = -sqrt(radius**2-x**2)
// 	let xM = mouseX-width/2
// 	let yM =  mouseY-height/2
// 	let ang = atan2(xM,yM)
// 	let x = radius * cos(ang)
// 	let y = radius * sin(ang)
// 	let slope = y/x
// 	let yN = slope*radius
// 	fill(0)
// 	push()
// 		translate(radius,0)
// 		stroke(255,100)
// 		cylinder(2,2000)
// 	pop()
//
// 	push()
// 		translate(radius,yN/2)
// 		stroke("blue")
// 		cylinder(3,yN)
// 	pop()
// 	push()
// 		translate(radius,yN)
// 		stroke("yellow")
// 		sphere(ballradius/2)
// 	pop()
// 	push()
// 		if(x>0) {
// 			push()
// 				let planeH =sqrt(yN**2+radius**2)
// 				translate(0,0,radius/2)
// 				rotateY(PI/2)
// 				rotateX(-atan2(y,x)+PI/2)
// 				stroke("yellow")
// 				rect(0,0,radius,planeH)
// 			pop()
// 	  }
// 		else {
// 			push()
// 				let planeH =sqrt((yN-y)**2+(radius-x)**2)
// 				translate(x,y)
// 				translate(0,0,radius/2)
// 				rotateY(PI/2)
// 				rotateX(-atan2(y,x)-PI/2)
// 				stroke("yellow")
// 				rect(0,0,radius,planeH)
// 			pop()
// 		}
// 	pop()
// }
//
// const CotV = (radius,ballradius)=>{
// 	styleWhenButtonOn("#cotCscVButton")
// 	stroke("white")
// 	strokeWeight(1)
// 	// let x = mouseX-width/2
// 	// let y = -sqrt(radius**2-x**2)
// 	let xM = mouseX-width/2
// 	let yM =  mouseY-height/2
// 	let ang = atan2(xM,yM)
// 	let x = radius * cos(ang)
// 	let y = radius * sin(ang)
// 	let slope = y/x
// 	let xN = radius/slope
// 	// arc(0,0,100,100,0,atan(slope))
// 	fill(0)
// 	push()
// 		translate(0,-radius)
// 		rotate(PI/2)
// 		stroke(255,100)
// 		cylinder(2,2000)
// 	pop()
// 	if(y<0){
// 	  let planeW = dist(0,0,xN,radius) 
//
// 		push()
// 			translate(0,0,radius/2)
// 			rotateY(PI/2)
// 			rotateX(-atan2(y,x)+PI/2)
// 			stroke("yellow")
// 			rect(0,0,radius,planeW)
// 		pop()
//
// 		push()
// 			translate(0,0,radius/2)
// 			rotateY(PI/2)
// 			rotateX(-atan2(y,x)+PI/2)
// 			translate(radius/2,planeW)
// 			stroke("yellow")
// 			sphere(ballradius/2)
// 		pop()
//
// 		push()
// 			strokeWeight(3)
// 			stroke("green")
// 			let val = sqrt(planeW**2-radius**2)
// 			let hDist = x>0 ? val : -val
// 			translate(hDist/2,-radius)
// 			rotate(PI/2)
// 			cylinder(2,hDist)
// 		pop()
//
// 	}
// 	else{
// 	  let planeW = dist(x,-y,xN,radius) 
//
// 		push()
// 			translate(x,y,radius/2)
// 			rotateY(PI/2)
// 			rotateX(-atan2(y,x)+PI/2)
// 			// translate(0,0,0)
// 			stroke("yellow")
// 			rect(0,0,radius,-planeW)
// 		pop()
//
// 		push()
// 			// translate(0,0,radius/2)
// 			rotateY(PI/2)
// 			rotateX(-atan2(y,x)+PI/2)
// 			translate(radius/2,planeW)
// 			stroke("yellow")
// 			// sphere(ballradius/2)
// 		pop()
//
// 		push()
// 			strokeWeight(3)
// 			stroke("green")
// 			let val = sqrt(planeW**2-radius**2)
// 			let hDist = x>0 ? val : -val
// 			translate(-hDist/2,-radius)
// 			rotate(PI/2)
// 			cylinder(2,hDist)
// 		pop()
// 	}
// }
