angInc = 0.007
angle =0
let wave
let bricks
let start=false
let test


const sketch3 = p =>{
	
	p.setup = ()=>{
		p.createCanvas(p.windowWidth,p.windowHeight) 
		radius = p.width/6
		p.world.gravity.y = 3
		setTimeout(()=>{
			wave= new p.Group()
			wave.color="skyblue"
			wave.w=10
			wave.h=10
			wave.x=i=>i*25
			wave.amount=50
			wave.collider="s"
			start=true
			const  word= "Trig Is Fun"
			let j=3
			for(let i of word){
				j+=3
				if(i==" ")continue
				wave[j].text=i
				wave[j].w=30
				wave[j].h=30
				wave[j].textSize=30

			}
			p.world.gravity.y = 10
		},1800)

			bricks = new p.Group();
			bricks.w = 20;
			bricks.h = 10;
			bricks.life= 300;
			bricks.tile = '=';

		if(!start){
				new p.Tiles(
		[
			'=====...====....=...======',
			'..=.....=...=...=...=.....',
			'..=.....=.=.....=...=..===',
			'..=.....=..=....=...=....=',
			'..=.....=...=...=...======',
		],
		p.width/2-500,
		40,
		bricks.w + 4,
		bricks.h + 4
	);
		}


	} 
	p.draw = ()=>{
 	 	p.clear()
		// p.background(247, 243, 222,100)

		let k=10
		let phi=0
		let w=200
		if(start)
			wave.y=i=>(radius/2)*p.sin( (i*k) +(angle*w) +phi)+p.height/2
		if(p.mouse.presses())
			new p.Sprite(p.mouseX,p.mouseY,30).life=500

	}
	p.windowResized = ()=> { 
		p.resizeCanvas(p.windowWidth,p.windowHeight)
		radius  = p.width/6
		ballRadius = radius/8
	}
}
const sketch4 = new p5(sketch3,"p53")

