angInc = 0.004
angle =0
let stretchy
let img;
let lipArray=[]
let word=[]
let count=0


const sketch5= p =>{
	
	p.preload = ()=> {
		img = p.loadImage('https://fit-s-u-m.github.io/presentation/mathsNotes/img/char1.png');
		for (let i=1; i<14;i++){
			lipArray.push(p.loadImage("https://fit-s-u-m.github.io/presentation/mathsNotes/img/mpv-shot"+i+".png"))
		}
	}
	p.setup = ()=>{
		p.createCanvas(p.windowWidth,p.windowHeight) 
		radius = p.width/6
		setInterval(()=>{
			count+=1
		},300)

		stretchy = new p.Sprite(p.width/2+200,p.height-100);
		stretchy.draw = () => {
			p.noFill()
			p.fill(237, 205, 0,200);
			p.push();

			//face
			p.image(img, 0, -10,150,150);
		  mouth =  p.image(lipArray[0], 0,45,150,150);
			p.pop();
				//eye
				p.fill(255,100)
				p.ellipse(30, -10, 20,25);
				p.ellipse(-30, -10, 20,25 );
			p.push();
				let ex1 = p.map (p.mouseX,0,p.width,25,35)
				let ex2 = p.map (p.mouseX,0,p.width,-35,-25)
				let ey1 = p.map (p.mouseY,0,p.height,-15,-5)
				p.fill(0)
				p.ellipse(ex1, ey1, 10, 10);
				p.ellipse(ex2, ey1, 10, 10);
			p.pop();
	  }

		let str = "hello every one".toLowerCase()
		for(let i =0; i<=str.length;i++){
			let char=str[i]
			if(char == " "){
				// mouth= lipArray[0]
				 word.push(lipArray[0])
			}
			else if(char == "e" && str[i+1]=="e"){
				// mouth=lipArray[2]
				word.push(lipArray[2])
			}
			else if(char =="a"|| char=="e" || char=="u" || char=="i"){
				// mouth= lipArray[1]
				word.push(lipArray[1])
			}
			else if (char=="f" || char=="v"){
				// mouth=lipArray[3]
				word.push(lipArray[3])
			}
			else if (char=="k" || char=="h" || char=="g"){
				// mouth=lipArray[4]
				word.push(lipArray[4])
			}
			else if (char=="l"){
				// mouth=lipArray[5]
				word.push(lipArray[5])
			}
			else if (char=="m" || char=="b" || char=="p"){
				// mouth=lipArray[6]
				word.push(lipArray[6])
			}
			else if(char == "o" && str[i+1]=="u"){
				// mouth=lipArray[7]
				word.push(lipArray[7])
			}
			else if(char == "o"){
				// mouth=lipArray[7]
				word.push(lipArray[8])
			}
			else if(char == "r"){
				// mouth=lipArray[8]
				word.push(lipArray[9])
			}
			else if ((char=="s" && str[i+1]=="h") || char=="z" || char=="j" || char=="t" || (char=="c"&& str[i+1]=="h")|| char=="d"){
				// mouth=lipArray[10]
				word.push(lipArray[11])
			}
			else if (char=="t" && str[i+1]=="h"){
				// mouth=lipArray[11]
				word.push(lipArray[12])
			}
			else word.push(lipArray[0])
		}
	} 
	p.draw = ()=>{
		p.clear()

	}
	p.windowResized = ()=> { 
		p.resizeCanvas(p.windowWidth,p.windowHeight)
	}
	

}
const sketch6 = new p5(sketch5,"p55")
const sketch7 = new p5(sketch5,"p54")
const sketch8 = new p5(sketch5,"p56")

