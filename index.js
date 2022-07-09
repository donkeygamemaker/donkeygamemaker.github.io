//Made by gk0140.

//Imports

import * as THREE from './threejs/build/three.module.js';
import {OrbitControls} from './threejs/examples/jsm/controls/OrbitControls.js';
import {FlyControls} from './threejs/examples/jsm/controls/FlyControls.js';
import {TransformControls} from './threejs/examples/jsm/controls/TransformControls.js';
import {Octree} from "./threejs/examples/jsm/math/Octree.js";
import {Capsule} from "./threejs/examples/jsm/math/Capsule.js";
import Yace from "./yace/yace.js";

//Stuff

/*R.I.P. Texture editor 26/6/2022*/

/*R.I.P. Physical Material 27/6/2022*/

/*R.I.P. Phong Material 27/6/2022*/

/*R.I.P. Legacy D4 format 27/6/2022*/

//About

let about=`






































`;//sorry for the useless lines

//Thing
                                                                                                                                                                                                                                                                                                                                                                                                                           console.log(`
            jjfikfkfdhfudjhhfkhejgekghhekrddxm
          jjfrjkrfl            jfd        fjdkkf
        frir     ri            jkf        dkfffdd
      dejftasnmkfherkofbkxknihejshqmghrgkjcsoftxxd
     ree eege          ff              ffk      fd
    eee  rfr           cp              hig      fee
   freeKHHgkjGkHKjgHJkFGJkKFKjJhkgjkgfhgfdghFJkjjfl
  ve            dd             fds              dfL
 rgd            hr              fr              ggQ
lldKGGkHfgKjdjjfjkelLGghLkGKJhgKGKjHjkhGhjGjkGkjkci
lf     df    rrdBttutiyuityuietyiejsfheckktrrnuerreL
jd     gg   rGdif                frfeGJkvkjFKJkfAfl
fe     djfjfkd                      lfY         B5
ifjJKjhkfkww    Made by gk0140!      dGYd      ooo
lre     dk                             jdjc   NXV
 i    chc                                wicjeei
 jejdjdk
`);

//Main variables

let renderer,
	camera,
	scene,
	hemi,
	dir,
	controls,
	tcons,
	tca,
	treeroot,
	dmat,
	blk,
	bdiv,
	env,
	controls2;

//Variables

let rad=(Math.PI/180);
let deg=(180/Math.PI);

let pointer=new THREE.Vector2(0,0);
let ray=new THREE.Raycaster();
let dbgray=new THREE.Raycaster();

let sc=[new THREE.Object3D()];
sc[0].userData.tag="Main";
let sce=0;

let dodgeDetach=false;
let addTarget;

let mobile=false;

let autoUpdateTab=false;
let ctab=0;

let labelEditMode=false;
let labelToggle=[];

let scripts={};
let openScript="";
let blockEditorOpen=false;

let debugging=false;
let dcamera=camera;
let dscene;
let oldscene;
let scriptScheds=[];
let firstrun=false;
let websocket;
let dfbgs;

let sceneadding=false;
let textureMode=false;

let ctrl=false;
let clipboard;

let imgpsel;

let oo=true;//do not change

let keyspressed={};
let onkeypress=[];
let onkeyunpress=[];

let cameraPointsDistance=5;
let cameraPointsWidth=2;
let cameraPointsHeight=1;

let ucons_open=false;

let touch={r:new THREE.Raycaster(),o:null,p:new THREE.Vector2(),m:false};
let gamevars={};
let astl={};

let fsel_tar=0;

let audios={};

let newChild;

let objDiv;
//Data

const cameraPoints=[
	new THREE.Vector3(0,0,0),
	new THREE.Vector3(-cameraPointsWidth,-cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(cameraPointsWidth,-cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(0,0,0),
	new THREE.Vector3(cameraPointsWidth,cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(-cameraPointsWidth,cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(0,0,0),
	new THREE.Vector3(-cameraPointsWidth,-cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(cameraPointsWidth,-cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(cameraPointsWidth,cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(-cameraPointsWidth,cameraPointsHeight,-cameraPointsDistance),
	new THREE.Vector3(-cameraPointsWidth,-cameraPointsHeight,-cameraPointsDistance)
];

const components={
	"ActiveCamera":`
		if(firstrun){
			dcamera=scope;
		}
	`,
	"More coming soon!":`
		
	`
};

let exts={
	"image":["png","jpg","jpeg","gif","webp"],
	"audio":["mp3","ogg"]
};

let tutorials=[
	{
		"title":"Introduction",
		"image":"",
		"content":[
			""
		]
	}
];

//Functions

function init(){
	//Identify mobile device
	mobile=analyseUA(String(navigator.userAgent));
	//screen size
	let dww=dwh();
	//Create webgl renderer
	renderer=new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(dww[0],dww[1]);
	renderer.shadowMap.enabled=true;
	renderer.shadowMap.type=THREE.BasicShadowMap;
	document.getElementById("content").appendChild(renderer.domElement);
	//Create editor camera
	camera=new THREE.PerspectiveCamera(80,dww[0]/dww[1],0.1,10000);
	camera.position.set(0,0,20);
	camera.up.set(0,1,0);
	//Create editor scene
	scene = new THREE.Scene();
	scene.add(camera);
	//Create starter sun
	hemi=new THREE.HemisphereLight(0xffffff,0x333333,0.5);
	hemi.position.set(0,10,0);
	hemi.userData.type="light";
	hemi.userData.tag="Sun";
	hemi.userData.scripts=[];
	hemi.userData.geo="hemi";
	sc[0].add(hemi);
	//Create starter point light
	dir=new THREE.PointLight(0xffffff,1,20);
	dir.userData.type="light";
	dir.userData.tag="Light";
	dir.userData.scripts=[];
	dir.userData.geo="light";
	dir.castShadow=true;
	setupShadow(dir);
	sc[0].add(dir);
	//Create editor grid
	scene.add(new THREE.GridHelper(10,10));
	let p1=[new THREE.Vector3(0,0,-5),new THREE.Vector3(0,0,5)];
	let p2=[new THREE.Vector3(-5,0,0),new THREE.Vector3(5,0,0)];
	scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p1),new THREE.LineBasicMaterial({color:0x0000ff})));
	scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p2),new THREE.LineBasicMaterial({color:0xff0000})));
	//Setup scene
	scene.add(sc[0]);
	//Events
	treeroot=document.getElementById("root");
	ppc();
	tabs();
	//blockly
	blk=Blockly.inject("blockly",{
		toolbox:document.getElementById("toolbox"),
		scrollbars:true,
		grid:{snap:true,spacing:20,length:1,colour:"#eee"}
	});
	//editor controls
	controls=new OrbitControls(camera,document.getElementById("content"));
	controls.minDistance=0.1;
	controls.maxDistance=1000;
	controls.maxPolarAngle=Math.PI;
	controls.screenSpacePanning=true;
	controls.rotateSpeed=0.5;
	
	controls2=new FlyControls(camera,document.getElementById("content"));
	controls2.movementSpeed=1000;
	controls2.domElement=document.getElementById("content");
	controls2.rollSpeed=Math.PI/4;
	controls2.autoForward=false;
	controls2.dragToLook=true;
	
	tcons=new TransformControls(camera,document.getElementById("content"));
	tcons.size=mobile?2.2:1;
	scene.add(tcons);
	
	document.getElementById("transformmodes").appendChild(createTCOPT());
	
	document.getElementById("transformmodes").addEventListener("click",function(){
		dodgeDetach=true;
	});
	
	document.getElementById("mode1").addEventListener("click",function(){
		tcons.setMode("translate");
		dodgeDetach=true;
	});
	document.getElementById("mode2").addEventListener("click",function(){
		tcons.setMode("scale");
		dodgeDetach=true;
	});
	document.getElementById("mode3").addEventListener("click",function(){
		tcons.setMode("rotate");
		dodgeDetach=true;
	});
	
	if(mobile){
		document.getElementById("transformmodes").style.top="calc(100% - 100px)";//52
		document.getElementById("transformmodes").appendChild(document.getElementById("sidebar"));
		document.getElementById("transformmodes").appendChild(document.getElementById("sidebar_edit"));
	}
	
	objDiv=document.getElementById("fmn");
	
	if(mobile){
		document.getElementById("ucons").style.display="block";
		document.getElementById("ucons_toggle").onclick=function(){
			let e=document.getElementById("ucons_toggle");
			ucons_open=!ucons_open;
			if(ucons_open){
				e.style.transform="rotate(180deg)";
				document.getElementById("ucons_hidden").style.display="block";
			}else{
				e.style.transform="rotate(0)";
				document.getElementById("ucons_hidden").style.display="none";
			}
		};
		
		document.getElementById("ucons_clone").onclick=function(){
			cloneObject(tca);
		}
	}
	
	if(mobile){
		document.getElementById("togglepanel").addEventListener("click",function(){
			if(!textureMode){
				let elem=document.getElementById("panel");
				elem.style.display=elem.style.display=="block"?"none":"block";
			}
		});
	}
	
	document.getElementById("dpar_cancel").onclick=function(){
		newChild=undefined;
		document.getElementById("dpar").style.display="none";
	};
	
	document.getElementById("content").addEventListener("click",click);
	document.getElementById("content").addEventListener("mousemove",m_move);
	document.getElementById("content").addEventListener("mouseup",m_up);
	document.getElementById("content").addEventListener("mousedown",m_down);
	document.getElementById("content").addEventListener("pointerup",m_up);
	document.getElementById("content").addEventListener("pointerdown",m_down);
	
	window.addEventListener("resize",function(){
		let dw=dwh();
		camera.aspect=dw[0]/dw[1];
		camera.updateProjectionMatrix();
		if(dcamera!=undefined){
			dcamera.aspect=dw[0]/dw[1];
			dcamera.updateProjectionMatrix();
		}
		renderer.setSize(dw[0],dw[1]);
		bdiv.style.marginTop=String(window.innerHeight);
	});
	
	window.addEventListener("keydown",function(event){
		if(!textureMode){
			if(event.keyCode==17){
				ctrl=true;
			}
			if(event.keyCode==46){
				if((tca!=undefined)&&(!blockEditorOpen)){
					deleteObject(tca);
				}
			}
			if(event.keyCode==88&&ctrl){
				if((tca!=undefined)&&(!blockEditorOpen)){
					clipboard=tca;
					deleteObject(tca);
				}
			}
			if(event.keyCode==67&&ctrl){
				if((tca!=undefined)&&(!blockEditorOpen)){
					clipboard=tca;
				}
			}
			if(event.keyCode==86&&ctrl){
				if((tca!=undefined)&&(!blockEditorOpen)){
					cloneObject(clipboard);
				}
			}
			if(event.keyCode==69&&ctrl){
				if(!blockEditorOpen){
					if(newChild!=undefined){
						try{
							if(newChild.uuid!=tca.uuid){
								newChild.removeFromParent();
								tca.add(newChild);
								newChild=undefined;
								document.getElementById("dpar").style.display="none";
								updateTree();
							}
						}catch(e){
							newChild.removeFromParent();
							sc[sce].add(newChild);
							newChild=undefined;
							document.getElementById("dpar").style.display="none";
							updateTree();
						}
					}else{
						if(tca!=undefined){
							newChild=tca;
							document.getElementById("dpar").style.display="block";
						}
					}
				}
			}
		}
		if(event.keyCode==16){
			tcons.setTranslationSnap(0.5);
			tcons.setRotationSnap(45*rad);
			tcons.setScaleSnap(0.5);
		}
		if(debugging){
			keyspressed[event.key]=true;
			for(let i=0;i<onkeypress.length;i++){
				onkeypress[i](event.key);
			}
		}
	});
	
	window.addEventListener("keyup",function(event){
		if(event.keyCode==16){
			tcons.setTranslationSnap(null);
			tcons.setRotationSnap(null);
			tcons.setScaleSnap(null);
		}
		if(event.keyCode==17){
			ctrl=false;
		}
		if(debugging){
			keyspressed[event.key]=false;
			for(let i=0;i<onkeyunpress.length;i++){
				onkeyunpress[i](event.key);
			}
		}
	});
	
	document.getElementById("startDebug").addEventListener("click",function(){
		if(!debugging){
			debugging=true;
			startDebugger();
			document.getElementById("startDebug").style.opacity="0.5";
			document.getElementById("stopDebug").style.opacity="1";
		}
	});
	
	document.getElementById("stopDebug").addEventListener("click",function(){
		if(debugging){
			debugging=false;
			stopDebugger();
			document.getElementById("startDebug").style.opacity="1";
			document.getElementById("stopDebug").style.opacity="0.5";
		}
	});
	
	document.getElementById("openSettings").addEventListener("click",function(){
		let settingsView=document.getElementById("settings");
		settingsView.style.display=settingsView.style.display=="block"?"none":"block";
		document.getElementById("openSettings").style.opacity=settingsView.style.display=="block"?"0.5":"1";
	});
	document.getElementById("s_closeBtn").addEventListener("click",function(){
		let settingsView=document.getElementById("settings");
		settingsView.style.display="none";
		document.getElementById("openSettings").style.opacity="1";
	});
	document.getElementById("s_readBtn").addEventListener("click",function(){
		let settingsView=document.getElementById("settings");
		settingsView.style.display="none";
		document.getElementById("openSettings").style.opacity="1";
		let fsel=document.getElementById("fsel");
		let fselt=document.getElementById("fselt");
		let fselc=document.getElementById("fselc");
		fselt.onchange=function(event){
			try{
			function onProjLoad(json){
				readProject(json);
				document.getElementById("fsel").style.display="none";
				updateFM();
			}
			
			JSZip.loadAsync(event.target.files[0]).then(function(content){
				//base json file
				content.files[".json"].async('text').then(function(txt){
					let json=JSON.parse(txt);
					//assets
					let assetstl=[];
					for(let i in content.files){
						if(i!=".json"){
							assetstl.push(i);
						}
					}
					
					let a1=0;
					let a2=assetstl.length;
					
					function loadAst(ast,fn){
						astl[fn]=ast;
						a1+=1;
						if(a1==a2){
							onProjLoad(json);
						}
					}
					
					astl={};
					for(let i=0;i<assetstl.length;i++){
						content.files[assetstl[i]].async('ArrayBuffer').then(function(ab){
							let blob=new Blob([ab],{type:"application/octet-stream"});
							let url=window.URL.createObjectURL(blob);
							loadAst(url,assetstl[i]);
						});
					}
					if(a1==a2){
							onProjLoad(json);
					}
				});
			});
			}catch(e){
				console.error("Project could not load: ",e);
			}
		};
		fselc.onclick=function(){
			fsel.style.display="none";
		};
		fsel.style.display="block";
	});
	document.getElementById("s_writeBtn").addEventListener("click",function(){
		let settingsView=document.getElementById("settings");
		settingsView.style.display="none";
		document.getElementById("openSettings").style.opacity="1";
		
		let json=JSON.stringify(writeProject());
		let zip=new JSZip();
		
		let a1=0;
		function finish(){
			zip.generateAsync({type:"blob"}).then(function(data){
				downloadBlob(data,"project.d4");
			},function(e){});
		}
		function step(){
			a1+=1;
			if(a1==Object.keys(astl).length){
				finish();
			}
		}
		
		zip.file(".json",json);
		
		for(let asset in astl){
			httpRequest(astl[asset],function(){
				zip.file(asset,this.response);
				step();
			},"blob");
		}
		if(Object.keys(astl).length==0){
			finish();
		}
	});
	document.getElementById("s_exportBtn").addEventListener("click",function(){
		let settingsView=document.getElementById("settings");
		settingsView.style.display="none";
		document.getElementById("openSettings").style.opacity="1";
		exportProj();
	});
	
	if(mobile){
		mobilify();
	}else{
		document.getElementById("sidemobile").style.display="none";
	}
	
	let sceneaddbtn;
	if(mobile){
		sceneaddbtn=document.getElementById("sceneadd_mobile");
	}else{
		sceneaddbtn=document.getElementById("sceneadd");
	}
	sceneaddbtn.addEventListener("click",function(){
		sceneadd();
	});
	
	let i=1;
	while(true){
		try{
			document.getElementById("o"+String(i)).addEventListener("click",function(){
				finishAddObject(Number(this.id.split("o")[1]));
			});
			i++;
		}catch(err){
			break;
		}
	}
	
	document.getElementById("imgpallete1").addEventListener("click",function(){
		document.getElementById("imgpallete1").style.display="none";
		document.getElementById("imgpallete2").style.display="block";
	});
	addSinImgPallete();
	addToImgPallete("http://localhost/example.png");
	
	labelToggle=[
		document.getElementById("sidebar"),
		document.getElementById("sidebar_edit"),
		document.getElementById("sidebar_txt")
	];
	
	labelToggle[0].addEventListener("click",function(){
		labelToggle[0].style.display="none";
		labelToggle[1].style.display="block";
		labelToggle[2].focus();
		if(tca==undefined){
			labelToggle[2].value=String(sc[sce].userData.tag);
		}else{
			labelToggle[2].value=String(tca.userData.tag);
		}
	});
	
	labelToggle[2].addEventListener("focusout",function(e){
		labelToggle[1].style.display="none";
		labelToggle[0].style.display="block";
		if(tca==undefined){
			if(labelToggle[2].value==""){
				labelToggle[2].value="blank";
			}
			sc[sce].userData.tag=String(labelToggle[2].value);
			labelToggle[0].innerText=String(labelToggle[2].value).toUpperCase();
			updateSceneDropdown();
			document.getElementById("sceneDropdown").value=String(sce);
		}else{
			if(labelToggle[2].value==""){
				labelToggle[2].value="be careful with blank names";
			}
			tca.userData.tag=String(labelToggle[2].value);
			updateTree();
			labelToggle[0].innerText=String(labelToggle[2].value).toUpperCase();
		}
	});
	
	updateSceneDropdown();
	document.getElementById("sceneDropdown").addEventListener("change",function(){
		if(this.value=="new"){
			createScene();
			switchSceneEd(sc.length-1);
			this.value=String(sc.length-1);
		}else{
			if(this.value=="rename"){
				this.value=String(sce);
				let n=window.prompt("");
				if(n!=""&&n!=null&&n!=undefined){
					sc[sce].userData.tag=n;
					updateSceneDropdown();
				}
				this.value=String(sce);
			}else{
				if(this.value=="delete"){
					this.value=String(sce);
					if(sce!=0){
						switchSceneEd(sce-1);
						sc.splice(sce+1,1);
						updateSceneDropdown();
						this.value=String(sce);
					}
				}else{
					switchSceneEd(Number(this.value));
				}
			}
		}
	})
	//welcome screen
	if(mobile){
		document.getElementById("ver").style.display="none";
	}
	document.getElementById("wlst").onclick=function(){
		document.getElementById("welcome_bg").style.display="none";
	};
	/*document.getElementById("ex1").onclick=function(){
		
	}*/
	//first frame
	animate();
	//first tree update
	updateTree();
	//blockly
	bdiv=document.getElementById("blockly2");
	bdiv.style.marginTop="10000px";
	document.getElementById("blocklyClose").addEventListener("click",finishBlockEditing);
	//load things
	new THREE.TextureLoader()
		.load("assets/skybox/sky.jpeg",function(cm){
			cm.mapping=THREE.EquirectangularReflectionMapping;
			//set envmap
			env=cm;
			scene.environment=env;
			//default material
			dmat=new THREE.MeshStandardMaterial({color:0xffffff,metalness:0,roughness:1});
			dmat.castShadow=true;
			dmat.receiveShadow=true;
			//complete
			document.getElementById("loader").style.display="none";
	});
	//first tab
	if(!mobile){
		loadTab(1);
	}
	//update, well, the FM.
	updateFM();
}

function animate(){
	requestAnimationFrame(animate);
	
	if(debugging){
		tickDebugger();
		if(firstrun){
			firstrun=false;
		}
	}
	
	tcons.enabled=!debugging;
	
	if(oo){
		if((!controls.enabled)&&(!tcons.dragging)){
			dodgeDetach=true;
		}
	}
	
	if(oo){
		controls.enabled=!tcons.dragging;
		controls2.enabled=false;
	}else{
		controls2.enabled=!tcons.dragging;
		controls.enabled=false;
	}
	
	if(tca==undefined){
		document.getElementById("transformmodes").style.display="none";
	}else{
		document.getElementById("transformmodes").style.display="block";
	}
	
	if(oo){
		controls.update();
	}else{
		controls2.update();
	}
	
	if(debugging){
		m_upd();
		if(dcamera!=undefined){
			renderer.render(dscene,dcamera);
		}
	}else{
		renderer.render(scene,camera);
	}
}

function startDebugger(){
	firstrun=true;
	dcamera=camera;
	dscene=new THREE.Scene();
	let p1=[new THREE.Vector3(0,0,-5),new THREE.Vector3(0,0,5)];
	let p2=[new THREE.Vector3(-5,0,0),new THREE.Vector3(5,0,0)];
	dscene.add(new THREE.GridHelper(10,10));
	dscene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p1),new THREE.LineBasicMaterial({color:0x0000ff})));
	dscene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p2),new THREE.LineBasicMaterial({color:0xff0000})));
	document.getElementById("fmn").innerHTML="";
	
	let ms=dbgtrav(sc[sce]);
	dscene.add(ms);
	dfbgs=ms;
	scriptScheds=ejectScripts(dscene);
	keyspressed={};
	gamevars={};
	updateSceneMeta(dscene);
}

function dbgtrav(o){
	let obj;
	if(o.userData.doNotCrawl!=true){
		obj=o.clone();
		if(obj.material!=undefined){
			obj.material=obj.material.clone();
		}
		obj.children=[];
		if(o.children!=undefined){
			for(let i=0;i<o.children.length;i++){
				let cld=dbgtrav(o.children[i]);
				if(cld!=undefined){
					obj.add(dbgtrav(o.children[i]));
				}
			}
		}
	}
	return(obj);
}

function ejectScripts(scene){
	let out=[];
	scene.traverse(function(o){
		if(o.userData.scripts!=undefined){
			for(let i=0;i<o.userData.scripts.length;i++){
				out.push([scripts[o.userData.scripts[i]].javascript,o,scripts[o.userData.scripts[i]].definitions]);
			}
		}
	});
	return(out);
}

function registerScripts(o){
	if(o.userData.scripts!=undefined){
		for(let i=0;i<o.userData.scripts.length;i++){
			scriptScheds.push([scripts[o.userData.scripts[i]].javascript,o,scripts[o.userData.scripts[i]].definitions]);
		}
	}
}

function smartClone(o){
	let obj=o.clone();
	registerScripts(obj);
	return(obj);
}

function stopDebugger(){
	try{
		websocket.close();
	}catch(e){}
	updateFM();
}

function tickDebugger(){
	for(let i=0;i<scriptScheds.length;i++){
		runScript(scriptScheds[i][0],scriptScheds[i][2],scriptScheds[i][1]);
	}
}

function runScript(code,defs,scope){
	eval(code);
}

function dwh(){
	return([window.innerWidth,window.innerHeight]);
}

function isKeyPressed(key){
	return(keyspressed[key]==true);
}

function onKeyPress(on){
	onkeypress.push(on);
}

function onKeyUnpress(on){
	onkeyunpress.push(on);
}

function getPressedKeys(){
	let out=[];
	for(let key in keyspressed){
		if(keyspressed[key]==true){
			out.push(key);
		}
	}
	return(out);
}

function findObjectByTag(tag){
	let obj;
	dscene.traverse(function(o){
		if(o.userData.tag==tag){
			obj=o;
		}
	});
	return(obj);
}

function addCapsuleTo(h,r,o){
	o.userData.capsule=new Capsule(new THREE.Vector3(0,r,0),new THREE.Vector3(0,h,0),r);
	o.userData.capsuleData={h:h,r:r};
}

function createOctree(o){
	o.userData.octree=new Octree();
	o.userData.octree.fromGraphNode(o);
}

function checkCollision_CO(capsule,octree,o1,o2,collide){
	updateCapsule(o1);
	if(octree!=undefined&&capsule!=undefined){
		let coll=false;
		let result=octree.capsuleIntersect(capsule);
		if(result){
			coll=true;
			if(collide){
				o1.position.add(result.normal.multiplyScalar(result.depth));
			}
			o1.userData.capsuleDir=result.normal;
		}else{
			o1.userData.capsuleDir=new THREE.Vector3();
		}
		return(coll);
	}
}

function updateCapsule(scope){
	if(scope.userData.capsule!=undefined){
		scope.userData.capsule.start.copy(scope.position);
		scope.userData.capsule.end.copy(scope.position);
		scope.userData.capsule.start.y+=scope.userData.capsuleData.r-(scope.userData.capsuleData.h/2);
		scope.userData.capsule.end.y+=scope.userData.capsuleData.h/2;
	}
}

function vecOperation(v1,v2,op){
	let base;
	if(v1.z!=undefined){
		base=new THREE.Vector3();
		base.copy(v1);
	}else{
		base=new THREE.Vector2();
		base.copy(v1);
	}
	if(op=="add"){
		base.add(v2);
	}
	if(op=="sub"){
		base.sub(v2);
	}
	if(op=="mul"){
		base.multiply(v2);
	}
	if(op=="div"){
		base.divide(v2);
	}
	return(base);
}

function findDefinitions(code){
	let defs=code.split("/*DEFINE ");
	let defs2=[];
	try{
		for(let i=1;i<defs.length;i++){
			try{
				let def=defs[i].split("*/");
				defs2.push(def[0]);
			}catch(err){}
		}
	}catch(err){}
	return(defs2);
}

function randomRange(min,max){
	return(Math.floor(Math.random()*(max-min+1)+min));
}

function createTCOPT(){
	let elem=document.createElement("div");
	elem.innerHTML=`
		<img src="assets/gui/mode1.png" id="mode1"/>
		<img src="assets/gui/mode2.png" id="mode2"/>
		<img src="assets/gui/mode3.png" id="mode3"/>
	`;
	elem.style.background="white";
	elem.addEventListener("click",function(){
		dodgeDetach=true;
	});
	return(elem);
}

function click(event){
	pointer.x=(event.clientX/renderer.domElement.clientWidth)*2-1;
	pointer.y=-(event.clientY/renderer.domElement.clientHeight)*2+1;
	ray.setFromCamera(pointer,camera);
	let intersects=ray.intersectObject(sc[sce]);
	if(intersects.length>0){
		if(!textureMode){
			if(intersects[0].object.userData.type!=undefined&&intersects[0].object.userData.doNotCrawl!=true){
				tcons.attach(intersects[0].object);
				tca=intersects[0].object;updtca();
			}else{
				if(intersects[0].object.parent.userData.type=="camera"){
					tcons.attach(intersects[0].object.parent);
					tca=intersects[0].object.parent;updtca();
				}
			}
		}
	}else{
		if(!textureMode){
			if(dodgeDetach){
				dodgeDetach=false;
			}else{
				tcons.detach();
				tca=undefined;updtca();
			}
		}
	}
}

function textureEditClick(obj,uv,map,pnt){
	let ctx=map.image.getContext("2d");
	let pos=new THREE.Vector2(Math.round(uv.x*1024),Math.round((0.5-uv.y+0.5)*1024));
	
	if(map.userData.oldData!=undefined){
		ctx.putImageData(map.userData.oldData,0,0);
	}
	map.userData.oldData=ctx.getImageData(0,0,1024,1024);
	if(imgpsel!=undefined){
		ctx.drawImage(imgpsel,pos.x,pos.y);
	}
	
	document.getElementById("confirmTX").style.display="block";
	document.getElementById("confirmTX1").onclick=function(){
		document.getElementById("confirmTX").style.display="none";
		if(map.userData.oldData!=undefined){
			ctx.putImageData(map.userData.oldData,0,0);
			map.needsUpdate=true;
			obj.material.needsUpdate=true;
		}
	};
	document.getElementById("confirmTX2").onclick=function(){
		document.getElementById("confirmTX").style.display="none";
		map.userData.oldData=ctx.getImageData(0,0,1024,1024);
	};
	
	map.needsUpdate=true;
	obj.material.needsUpdate=true;
}

function updateTree(){
	treeroot.innerHTML="";
	treePart(treeroot,sc[sce]);
}

function treePart(elem,obj){
	for(let i=0;i<obj.children.length;i++){
		let object=obj.children[i];
		if(object.userData.doNotCrawl!=true){
			let part=document.createElement("p");
			let tag=String(object.userData.tag);
			let type=String(object.userData.type);
			let oc=function(){
				tcons.attach(object);
				tca=object;updtca();
			};
			
			let mrg="0 4px 0 4px";
			let part1=document.createElement("img");
			part1.style.display="inline-block";
			part1.style.margin=mrg;
			if(type=="undefined"){
				part1.src="assets/gui/unknownx25.png";
			}
			if(type=="object"){
				part1.src="assets/gui/object.png";
			}
			if(type=="light"){
				part1.src="assets/gui/light.png";
			}
			if(type=="empty"){
				part1.src="assets/gui/empty_ic.png";
			}
			if(type=="camera"){
				part1.src="assets/gui/camera_ic.png";
			}
			part1.addEventListener("click",oc);
			
			let part2=document.createElement("span");
			part2.style.display="inline-block";
			part2.innerText=tag;
			part2.style.fontSize="25px";
			part2.style.margin=mrg;
			part2.addEventListener("click",oc);
			
			let part3=document.createElement("img");
			part3.className="b30";
			part3.style.margin=mrg;
			part3.style.display="inline-block";
			part3.src="assets/gui/add_rel.png";
			part3.addEventListener("click",function(){
				beginAddObject(object);
			});
			
			let part4=document.createElement("img");
			part4.className="b30";
			part4.style.display="inline-block";
			part4.src="assets/gui/trash.png";
			part4.style.margin=mrg;
			part4.addEventListener("click",function(){
				deleteObject(object);
			});
			
			let part5;
			if(mobile){
				part5=document.createElement("img");
				part5.className="b30";
				part5.style.display="inline-block";
				part5.src="assets/gui/clone.png";
				part5.style.margin=mrg;
				part5.addEventListener("click",function(){
					cloneObject(object);
				});
			}
			
			let kids=document.createElement("div");
			kids.style.display="block";
			kids.style.paddingLeft="12px";
			if(object.children.length>0){
				treePart(kids,object);
			}
			
			part.appendChild(part1);
			part.appendChild(part2);
			part.appendChild(part3);
			part.appendChild(part4);
			if(mobile){
				part.appendChild(part5);
			}
			part.appendChild(kids);
			elem.appendChild(part);
		}
	}
}

function sceneadd(){
	sceneadding=true;
	beginAddObject(sc[sce]);
}

function updtca(){
	if(tca!=undefined){
			document.getElementById("sidebar").innerText=String(tca.userData.tag).toUpperCase();
			if(!mobile){
				if(tca.userData.type=="object"){
					document.getElementById("tab1").src="assets/gui/mattab.png";
				}else{
				if(tca.userData.type=="camera"){
					document.getElementById("tab1").src="assets/gui/camtab.png";
				}else{
				if(tca.userData.type=="light"){
					document.getElementById("tab1").src="assets/gui/lttab.png";
				}else{
					document.getElementById("tab1").src="assets/gui/notab.png";
				}}}
			}
	}else{
			document.getElementById("sidebar").innerText=String(sc[sce].userData.tag).toUpperCase();
			if(!mobile){
				document.getElementById("tab1").src="assets/gui/sctab.png";
			}
	}
	try{
		if(autoUpdateTab){
			if(mobile){
				loadTabMobile(ctab);
			}else{
				loadTab(ctab);
			}
		}
	}catch(err){}
}

function ppc(){
	let itr=1;
	while(true){
		try{

			let elem=document.getElementById("ppc"+String(itr));
			
			elem.addEventListener("click",function(){
				document.getElementById("pp"+this.id.split("ppc")[1]).style.display="none";
			});
		}catch(err){
			break;
		}
		itr++;
	}
}

function tabs(){
	let itr=1;
	while(true){
		try{
			let elem=document.getElementById("tab"+String(itr));
			elem.addEventListener("click",function(){
				loadTab(Number(this.id.split("tab")[1]));
			});
		}catch(err){
			break;
		}
		itr++;
	}
	itr=1;
	while(true){
		try{
			let elem=document.getElementById("tab"+String(itr)+"q");
			elem.addEventListener("click",function(){
				loadTabMobile(Number(this.id.split("tab")[1].split("q")[0]));
			});
		}catch(err){
			break;
		}
		itr++;
	}
}

function loadTab(tab){
	ctab=tab;
	let elem=document.getElementById("tab");
	elem.innerHTML="";
	autoUpdateTab=tab==1||tab==2;
	if(tab==1){
		elem.appendChild(memd());
	}
	if(tab==2){
		elem.appendChild(scripttab());
	}
}

function loadTabMobile(tab){
	ctab=tab;
	let elem=document.getElementById("tabmobdepl");
	elem.innerHTML="";
	let cancel=false;
	if(tab==1){
		elem.appendChild(memd());
	}
	if(tab==2){
		elem.appendChild(scripttab());
	}
	document.getElementById("pp2").style.display="block";
}

function reloadTab(){
	if(mobile){
		loadTabMobile(ctab);
	}else{
		loadTab(ctab);
	}
}

function beginAddObject(parent){
	addTarget=parent;
	document.getElementById("pp1").style.display="block";
}

function finishAddObject(id){
	document.getElementById("pp1").style.display="none";
	if(id==1){
		addObject(createObjectFromJson("object","plane"));
	}
	if(id==2){
		addObject(createObjectFromJson("object","box"));
	}
	if(id==3){
		addObject(createObjectFromJson("object","circle"));
	}
	if(id==4){
		addObject(createObjectFromJson("object","sphere"));
	}
	if(id==5){
		addObject(createObjectFromJson("object","pyramid"));
	}
	if(id==6){
		addObject(createObjectFromJson("object","torus"));
	}
	if(id==7){
		addObject(createObjectFromJson("object","bean"));
	}
	if(id==8){
		addObject(createObjectFromJson("object","cylinder"));
	}
	if(id==9){
		addObject(createObjectFromJson("object","icosphere"));
	}
	if(id==10){
		//model import
	}
	if(id==11){
		addObject(createObjectFromJson("light","light"));
	}
	if(id==12){
		addObject(createObjectFromJson("light","hemi"));
	}
	if(id==13){
		addObject(createObjectFromJson("empty","empty"));
	}
	if(id==14){
		addObject(createObjectFromJson("camera","camera"));
	}
}

function addObject(obj,tar=addTarget){
	tar.add(obj);
	updateTree();
	tcons.attach(obj);
	tca=obj;updtca();
}

function analyseUA(ua){
	let mobile=false;
	mobile=(ua.includes("iPhone"))||mobile;
	mobile=(ua.includes("Android"))||mobile;
	mobile=(ua.includes("Windows Phone"))||mobile;
	mobile=(ua.includes("Nokia"))||mobile;
	mobile=(ua.includes("KFAPWI"))||mobile;
	return(mobile);
}

function mobilify(){
	document.getElementById("side").style.display="none";
	document.getElementById("side").innerHTML="";
	document.getElementById("sidemobile").style.display="block";
	document.getElementById("sceneadd").style.display="none";
	document.getElementById("root").style.paddingTop="60px";
	document.getElementById("sceneDropdown").style.top="-20px";
	document.getElementById("sceneDropdown").style.height="50px";
	document.getElementById("sceneDropdown").style.fontSize="26px";
	document.getElementById("panel").style.display="none";
}

function memd(){
	let elem=document.createElement("div");
	if(!mobile){
		elem.style.color="white";
	}
	////Material menu
	try{
	if(tca.userData.type=="light"){
		elem.innerHTML=`
			<div></div>
			<p>Color <input type="color" id="me_color"></p>
			<p>Power <input type="range" min="0" max="4" step="0.1" id="me_power" style="width:${mobile?"50%":"100px"};"></p>
		`;
		//get ready
		elem.children[1].children[0].value="#"+new THREE.Color(tca.color).getHexString();
		elem.children[2].children[0].value=tca.intensity;
		//events
		elem.children[1].children[0].addEventListener("change",function(){
			tca.color=new THREE.Color(this.value);
		});
		elem.children[2].children[0].addEventListener("change",function(){
			tca.intensity=this.value;
		});
	}
	if(tca.userData.type=="object"){
		//switch button
		let switchBtn=document.createElement("select");
		switchBtn.innerHTML+="<option value='basic'>Plain</option>";
		switchBtn.innerHTML+="<option value='standard'>Realistic</option>";
		switchBtn.addEventListener("change",function(){
			if(this.value=="basic"){
				tca.material=new THREE.MeshBasicMaterial({color:tca.material.color,
					transparent:tca.material.transparent,opacity:tca.material.opacity,
					map:tca.material.map});
			}
			if(this.value=="standard"){
				if(tca.material.type!="MeshStandardMaterial"){
					tca.material=new THREE.MeshStandardMaterial({color:tca.material.color,
						transparent:tca.material.transparent,opacity:tca.material.opacity,
						map:tca.material.map});
					tca.material.castShadow=true;
					tca.material.receiveShadow=true;
				}
			}
			if(mobile){
				document.getElementById("pp2").style.display="none";
			}else{
				updtca();
			}
		});
		
		//side
		let sidesBtn=document.createElement("select");
		sidesBtn.innerHTML+="<option value='front'>Front side</option>";
		sidesBtn.innerHTML+="<option value='back'>Inverted</option>";
		sidesBtn.innerHTML+="<option value='double'>Both sides</option>";
		sidesBtn.addEventListener("change",function(){
			if(this.value=="front"){
				tca.material.side=THREE.FrontSide;
			}
			if(this.value=="back"){
				tca.material.side=THREE.BackSide;
			}
			if(this.value=="double"){
				tca.material.side=THREE.DoubleSide;
			}
		});
		if(tca.material.side==THREE.FrontSide){
			sidesBtn.value="front";
		}
		if(tca.material.side==THREE.BackSide){
			sidesBtn.value="back";
		}
		if(tca.material.side==THREE.DoubleSide){
			sidesBtn.value="double";
		}
		
		//Basic
		if(tca.material.type=="MeshBasicMaterial"){
			switchBtn.value="basic";
			elem.innerHTML=`
				<div></div>
				<p><img class="tex_btn" id="me_colormap" src="assets/gui/notexture.png">
				Color <input type="color" id="me_color"></p>
				<p>Opacity <input type="range" min="0" max="1" step="0.01" id="me_opacity" style="width:${mobile?"50%":"100px"};"></p>
			`;
			//get ready
			if(tca.material.map!=null){
				elem.children[1].children[0].src=astl[tca.material.map.userData.src];
			}
			elem.children[1].children[1].value="#"+tca.material.color.getHexString();
			elem.children[2].children[0].value=tca.material.opacity;
			//events
			elem.children[1].children[0].addEventListener("click",function(){
				editTexture(tca.material,"map");
			});
			elem.children[1].children[1].addEventListener("change",function(){
				tca.material.color=new THREE.Color(this.value);
			});
			elem.children[2].children[0].addEventListener("change",function(){
				tca.material.opacity=this.value;
				tca.material.transparent=this.value<1;
			});
		}
		//Standard
		if(tca.material.type=="MeshStandardMaterial"){
			switchBtn.value="standard";
			elem.innerHTML=`
				<div></div>
				<p><img class="tex_btn" id="me_colormap" src="assets/gui/notexture.png">
				Color <input type="color" id="me_color"></p>
				
				<p><img class="tex_btn" id="me_metalnessmap" src="assets/gui/notexture.png">
				Metalness <input type="range" min="0" max="1" step="0.01" id="me_metalness" style="width:${mobile?"50%":"100px"};"></p>
				
				<p><img class="tex_btn" id="me_roughnessmap" src="assets/gui/notexture.png">
				Roughness <input type="range" min="0" max="1" step="0.01" id="me_roughness" style="width:${mobile?"50%":"100px"};"></p>
				
				<p><img class="tex_btn" id="me_bumpmap" src="assets/gui/notexture.png">
				Bump</p>
				
				<p><img class="tex_btn" id="me_bumpmap" src="assets/gui/notexture.png">
				Normal</p>
				
				<p>Opacity <input type="range" min="0" max="1" step="0.01" id="me_opacity" style="width:${mobile?"50%":"100px"};"></p>
			`;
			
			//get ready
			
			if(tca.material.map!=null){
				elem.children[1].children[0].src=astl[tca.material.map.userData.src];
			}
			elem.children[1].children[1].value="#"+tca.material.color.getHexString();
			if(tca.material.metalnessMap!=null){
				elem.children[2].children[0].src=astl[tca.material.metalnessMap.userData.src];
			}
			elem.children[2].children[1].value=tca.material.metalness;
			if(tca.material.roughnessMap!=null){
				elem.children[3].children[0].src=astl[tca.material.roughnessMap.userData.src];
			}
			elem.children[3].children[1].value=tca.material.roughness;
			elem.children[6].children[0].value=tca.material.opacity;
			
			//Texture-only
			
			if(tca.material.bumpMap!=null){
				elem.children[4].children[0].src=astl[tca.material.bumpMap.userData.src];
			}
			if(tca.material.normalMap!=null){
				elem.children[5].children[0].src=astl[tca.material.normalMap.userData.src];
			}
			
			//events
			
			elem.children[1].children[0].addEventListener("click",function(){
				editTexture(tca.material,"map");
			});
			elem.children[1].children[1].addEventListener("change",function(){
				tca.material.color=new THREE.Color(this.value);
			});
			elem.children[2].children[0].addEventListener("click",function(){
				editTexture(tca.material,"metalnessMap");
			});
			elem.children[2].children[1].addEventListener("change",function(){
				tca.material.metalness=this.value;
			});
			elem.children[3].children[0].addEventListener("click",function(){
				editTexture(tca.material,"roughnessMap");
			});
			elem.children[3].children[1].addEventListener("change",function(){
				tca.material.roughness=this.value;
			});
			elem.children[6].children[0].addEventListener("change",function(){
				tca.material.opacity=this.value;
				tca.material.transparent=this.value<1;
			});
			
			//Texture-only
			
			elem.children[4].children[0].addEventListener("click",function(){
				editTexture(tca.material,"bumpMap");
			});
			elem.children[5].children[0].addEventListener("click",function(){
				editTexture(tca.material,"normalMap");
			});
			
		}
		
		elem.appendChild(sidesBtn);
		elem.appendChild(switchBtn);
	}
	}catch(e){}
	////Scene menu
	if(tca==undefined){
		elem.innerHTML=`
			<div></div>
			<p><img class="tex_btn" id="me_bgmap" src="assets/gui/notexture.png">
			Background
		`;
		
		elem.children[1].children[0].addEventListener("click",function(){
			editTexture(sc[sce].userData,"background",function(){
				updateSceneMeta();
			});
		});
		
		if(notNull(sc[sce].userData.background)){
			elem.children[1].children[0].src=astl[sc[sce].userData.background.userData.src];
		}
	}
	
	return(elem);
}

function notNull(v){
	return((v!=null)&&(v!=undefined));
}

function updateSceneMeta(scx=scene){
	if(notNull(sc[sce].userData.background)){
		scx.background=sc[sce].userData.background;
		scx.background.mapping=THREE.EquirectangularReflectionMapping;
	}else{
		scx.background=null;
	}
}

function switchSceneEd(scenenum){
	tcons.detach();
	tca=undefined;updtca();
	sc[sce].removeFromParent();
	sce=scenenum;
	scene.add(sc[sce]);
	updateTree();
	if(!mobile){
		document.getElementById("sidebar").innerText=String(sc[sce].userData.tag).toUpperCase();
	}
	reloadTab();
	updateSceneMeta();
}


function updateSceneDropdown(){
	let dropdown=document.getElementById("sceneDropdown");
	dropdown.innerHTML="";
	for(let i=0;i<sc.length;i++){
		dropdown.innerHTML+="<option value='"+String(i)+"' "+(i==0?"selected":"")+">"+String(sc[i].userData.tag)+"</option>";
	}
	dropdown.innerHTML+="<option value='new'>Create new</option>";
	dropdown.innerHTML+="<option value='rename'>Rename</option>";
	dropdown.innerHTML+="<option value='delete'>Delete</option>";
}

function createScene(){
	sc.push(new THREE.Object3D());
	sc[sc.length-1].userData.tag="Scene"+String(sc.length);
	hemi=new THREE.HemisphereLight(0xffffff,0x333333,0.5);
	hemi.position.set(0,10,0);
	hemi.userData.type="light";
	hemi.userData.tag="Sun";
	hemi.userData.scripts=[];
	hemi.userData.geo="hemi";
	sc[sc.length-1].add(hemi);
	dir=new THREE.PointLight(0xffffff,1,20);
	dir.userData.type="light";
	dir.userData.tag="Light";
	dir.userData.scripts=[];
	dir.userData.geo="light";
	dir.castShadow=true;
	setupShadow(dir);
	sc[sc.length-1].add(dir);
	updateSceneDropdown();
}

function deleteObject(object){
	tcons.detach();
	tca=undefined;updtca();
	object.removeFromParent();
	updateTree();
}

function cloneObject(object){
	let o=object.clone();
	o.traverse(function(ox){
		if(ox.material!=undefined){
			forkMaterialOf(ox);
		}
	});
	sc[sce].add(o);
	updateTree();
}

function forkMaterialOf(n){
	n.material=n.material.clone();
}

function scripttab(){
	function createScriptBaseElem(title){
		let elem=document.createElement("div");
		let elem2=document.createElement("p");
		elem2.innerText=title;
		elem.appendChild(elem2);
		elem.className="script_i";
		return(elem);
	}
	function createScriptElem(script,index){
		let elem=createScriptBaseElem(script);
		elem.appendChild(document.createElement("br"));
		
		let deleteicon=document.createElement("img");
		let floating=document.createElement("Button");
		
		deleteicon.src="assets/gui/trash.png";
		deleteicon.addEventListener("click",function(){
			tca.userData.scripts.splice(index,1);
			if(mobile){loadTabMobile(2);}else{loadTab(2);}
		})
		
		if(mobile){
			deleteicon.src="assets/gui/trash2x.png";
		}
		
		elem.appendChild(deleteicon);
		
		let blkw="W: If you enable code on this, you will lose access to block editing. (implies for this script only)";
		
		let jsicon=document.createElement("img");
		jsicon.src="assets/gui/js.png";
		jsicon.addEventListener("click",function(){
			if(scripts[script].blockly_available){
				if(confirm(blkw)){
					scripts[script].blockly_available=false;
					scripts[script].blockly="";
					if(scripts[script].javascript_available){
						openScriptEditor(script);
					}else{
						alert("E: This script is not editable.");
					}
				}
			}else{
				if(scripts[script].javascript_available){
					openScriptEditor(script);
				}else{
					alert("E: This script is not editable.");
				}
			}
		});
		
		elem.appendChild(jsicon);
		
		let cloneicon=document.createElement("img");
		cloneicon.src="assets/gui/clonescript.png";
		cloneicon.addEventListener("click",function(){
			let cop=String(Math.round(Math.random()*1000));
			scripts[script+"-"+cop]={};
			scripts[script+"-"+cop].blockly=scripts[script].blockly;
			scripts[script+"-"+cop].blockly_available=scripts[script].blockly_available;
			scripts[script+"-"+cop].javascript=scripts[script].javascript;
			scripts[script+"-"+cop].javascript_available=scripts[script].javascript_available;
			scripts[script+"-"+cop].definitions=scripts[script].definitions;
			tca.userData.scripts[index]=script+"-"+cop;
			reloadTab();
			alert("I: This script is now independent.");
		});
		
		elem.appendChild(cloneicon);
		
		let reicon=document.createElement("img");
		reicon.src="assets/gui/rename.png";
		reicon.addEventListener("click",function(){
			let name=prompt("Type a new name:",script);
			if(name!=""&&name!=null){
				renameScript(script,name);
				reloadTab();
			}
		})
		
		elem.appendChild(reicon);
		
		if(mobile){
			elem.style.display="inline-block";
		}
		
		elem.children[0].addEventListener("click",function(){
			if(scripts[script].blockly_available){
				openBlockEditor(script);
			}else{
				if(scripts[script].javascript_available){
					openScriptEditor(script);
				}else{
					alert("E: This script is not editable.");
				}
			}
		});
		
		return(elem);
	}
	function createNewScriptElem(){
		let elem=createScriptBaseElem("Add new");
		elem.addEventListener("click",function(){
			openNewScriptPopup();
			/*let snm=window.prompt("Insert a name for the script:");
			let n=snm;
			if(n!=""&&n!=null&&n!=undefined){
				if(scripts[snm]==undefined){
					scripts[snm]={blockly:"",javascript:"",blockly_available:true,javascript_available:true};
					if(tca.userData.scripts==undefined){
						tca.userData.scripts=[];
					}
					tca.userData.scripts.push(snm);
					if(mobile){loadTabMobile(2);}else{loadTab(2);}
				}else{
					window.alert("I: Script already exists, so we will add the existing.");
					if(tca.userData.scripts==undefined){
						tca.userData.scripts=[];
					}
					tca.userData.scripts.push(snm);
					if(mobile){loadTabMobile(2);}else{loadTab(2);}
				}
			}*/
		});
		return(elem);
	}
	function createExistingScriptElem(){
		let elem=createScriptBaseElem("Add existing");
		elem.addEventListener("click",function(){
			let snm=window.prompt("Insert the script's name:");
			let n=snm;
			if(n!=""&&n!=null&&n!=undefined){
				if(scripts[snm]==undefined){
					alert("E: Could not find script. Check the spelling and try again.");
				}else{
					if(tca.userData.scripts==undefined){
						tca.userData.scripts=[];
					}
					tca.userData.scripts.push(snm);
					if(mobile){loadTabMobile(2);}else{loadTab(2);}
				}
			}
		});
		return(elem);
	}
	let elem=document.createElement("div");
	if(!mobile){
		elem.style.color="white";
	}
	elem.innerHTML="<h1>Scripts</h1>";
	try{
		for(let i=0;i<tca.userData.scripts.length;i++){
			elem.appendChild(createScriptElem(tca.userData.scripts[i],i));
			if(!mobile){elem.appendChild(document.createElement("br"));}
		}
		elem.appendChild(createNewScriptElem());
		elem.appendChild(document.createElement("br"));
	}catch(e){
		elem.innerHTML="";
	}
	return(elem);
}

function renameScript(o,n){
	scripts[n]=scripts[o];
	scripts[o]=undefined;
	for(let i=0;i<sc.length;i++){
		sc[i].traverse(function(ob){
			if(ob.userData.scripts!=undefined){
				for(let x=0;x<ob.userData.scripts.length;x++){
					if(ob.userData.scripts[x]==o){
						ob.userData.scripts[x]=n;
					}
				}
			}
		});
	}
}

function openBlockEditor(script){
	try{
		clearBlocks();
		loadBlocks(scripts[script].blockly);
	}catch(e){}
	openScript=script;
	openBlocks();
}

function finishBlockEditing(){
	closeBlocks();
	try{
		scripts[openScript].blockly=saveBlocks(openScript);
		scripts[openScript].javascript=codifyBlocks();
		scripts[openScript].definitions=findDefinitions(scripts[openScript].javascript);
	}catch(e){}
	openScript="";
}

function openBlocks(){
	bdiv.style.marginTop="0";
	blockEditorOpen=true;
}

function closeBlocks(){
	bdiv.style.marginTop="10000px";
	blockEditorOpen=false;
}

function loadBlocks(txt){
	try{
		let xml;
		if((txt!="")&&(txt!=undefined)){
			xml=Blockly.Xml.textToDom(txt);
			Blockly.Xml.domToWorkspace(xml,blk);
		}else{
			clearBlocks();
		}
	}catch(err){
		clearBlocks();
	}
}

function saveBlocks(){
	let xml=Blockly.Xml.workspaceToDom(blk);
	return(Blockly.Xml.domToText(xml));
}

function clearBlocks(){
	blk.clear();
}

function codifyBlocks(){
	let code="";
	try{
		code=Blockly.JavaScript.workspaceToCode(blk);
	}catch(e){}
	return(code);
}

function openScriptEditor(script){
	document.getElementById("codeeditor_in").innerHTML="";
	let dum=new Yace("#codeeditor_in",{
		value:scripts[script].javascript,
		lineNumbers:true
	});
	dum.textarea.spellcheck=false;
	document.getElementById("codeeditor").style.display="block";
	openScript=script;
	document.getElementById("codeeditor_close").onclick=function(){
		document.getElementById("codeeditor").style.display="none";
		scripts[openScript].javascript=dum.value;
	};
}

function addSinImgPallete(){
	addCloseImgPallete();
	let elem=document.getElementById("imgpallete2");
	let child=document.createElement("img");
	child.src="assets/gui/imgpsin.png";
	child.style.height="100px";
	child.style.width="100px";
	child.style.display="inline";
	child.addEventListener("click",function(){
		addToImgPallete(prompt());
	});
	elem.appendChild(child);
}

function addCloseImgPallete(){
	let elem=document.getElementById("imgpallete2");
	let child=document.createElement("img");
	child.src="assets/gui/imgpclose.png";
	child.style.height="100px";
	child.style.width="100px";
	child.style.display="inline";
	child.addEventListener("click",function(){
		document.getElementById("imgpallete1").style.display="block";
		document.getElementById("imgpallete2").style.display="none";
	});
	elem.appendChild(child);
}

function addToImgPallete(url){
	let elem=document.getElementById("imgpallete2");
	let child=document.createElement("img");
	child.src=url;
	child.style.height="100px";
	child.style.width="100px";
	child.style.display="inline";
	child.addEventListener("click",function(){
		onImagePalleteSelected(this);
	});
	elem.appendChild(child);
}

function onImagePalleteSelected(img){
	document.getElementById("imgpallete1").style.display="block";
	document.getElementById("imgpallete2").style.display="none";
	imgpsel=img;
}

function httpRequest(url,onLoad,rtp="text"){
	let req=new XMLHttpRequest();
	req.responseType=rtp;
	req.addEventListener("load",onLoad);
	req.open("GET",url);
	req.send();
}

function readProject(json){
	tcons.detach();
	tca=undefined;updtca();
	sc[sce].removeFromParent();
	sc=[];
	scripts=json.scripts;
	for(let i=0;i<json.scenes.length;i++){
		sc.push(objectifyJson(json.scenes[i],true));
	}
	sce=0;
	scene.add(sc[sce]);
	if(!mobile){
		document.getElementById("sidebar").innerText=String(sc[sce].userData.tag).toUpperCase();
	}
	updateTree();
	updateSceneDropdown();
	updateSceneMeta();
}

function objectifyJson(json,isScene=false){
	let obj;
	if(!isScene){
		let cprop={color:0xffffff,intensity:1};
		if(json.color!=undefined){
			cprop.color=new THREE.Color(json.color);
			cprop.intensity=json.intensity;
		}
		obj=createObjectFromJson(json.type,json.geo,cprop);
		if(json.material!=undefined){
			obj.material=materialifyJson(json.material);
		}
		transformvalueifyJson(json.transform,obj);
		obj.userData.tag=json.tag;
		if(json.color!=undefined){
			obj.color=new THREE.Color(json.color);
			obj.intensity=json.intensity;
		}
	}else{
		obj=new THREE.Object3D();
		obj.userData.tag=json.tag;
		obj.userData.background=mapifyJson(json.background);
	}	
	obj.userData.scripts=json.scripts;
	for(let i=0;i<json.children.length;i++){
		obj.add(objectifyJson(json.children[i]));
	}
	return(obj);
}

function materialifyJson(json){
	let mat;
	if(json.type=="MeshBasicMaterial"){
		mat=new THREE.MeshBasicMaterial({
			color:new THREE.Color(json.color),
			opacity:json.opacity,
			transparent:json.transparent,
			side:json.side
		});
		mat.map=mapifyJson(json.map,mat);
	}
	if(json.type=="MeshStandardMaterial"){
		mat=new THREE.MeshStandardMaterial({
			color:new THREE.Color(json.color),
			opacity:json.opacity,
			transparent:json.transparent,
			metalness:json.metalness,
			roughness:json.roughness,
			side:json.side
		});
		mat.castShadow=true;
		mat.receiveShadow=true;
		mat.map=mapifyJson(json.map,mat);
		mat.metalnessMap=mapifyJson(json.metalnessMap,mat);
		mat.roughnessMap=mapifyJson(json.roughnessMap,mat);
		mat.bumpMap=mapifyJson(json.bumpMap,mat);
		mat.normalMap=mapifyJson(json.normalMap,mat);
	}
	return(mat);
}

function mapifyJson(json,mat){
	if((json!=null)&&(json!=undefined)){
		let tex=new THREE.TextureLoader().load(astl[json]);
		tex.userData.src=json;
		return(tex);
	}else{
		return(null);
	}
}

function transformvalueifyJson(json,obj){
	obj.position.set(json[0],json[1],json[2]);
	obj.rotation.set(json[3],json[4],json[5]);
	obj.scale.set(json[6],json[7],json[8]);
}

function writeProject(){
	let project={
		scenes:[],
		scripts:scripts
	};
	for(let i=0;i<sc.length;i++){
		project.scenes.push(jsonifyObject(sc[i]));
	}
	return(project);
}

function jsonifyObject(obj){
	let json={
		type:obj.userData.type,
		tag:obj.userData.tag,
		scripts:obj.userData.scripts,
		geo:obj.userData.geo,
		transform:jsonifyTransformValues(obj),
		material:jsonifyMaterial(obj),
		children:[]
	};
	if(notNull(obj.intensity)){json.intensity=Number(obj.intensity);}
	if(notNull(obj.color)){json.color=obj.color.getHex();}
	if(notNull(obj.userData.background)){json.background=obj.userData.background.userData.src}
	for(let i=0;i<obj.children.length;i++){
		if(obj.children[i].userData.doNotCrawl!=true){
			json.children.push(jsonifyObject(obj.children[i]));
		}
	}
	return(json);
}

function jsonifyMap(map){
	if(map!=null){
		return(map.userData.src);
	}else{
		return(null);
	}
}

function jsonifyTransformValues(obj){
	return([
		obj.position.x,
		obj.position.y,
		obj.position.z,
		obj.rotation.x,
		obj.rotation.y,
		obj.rotation.z,
		obj.scale.x,
		obj.scale.y,
		obj.scale.z
	]);
}

function jsonifyMaterial(obj){
	let json={material:{}};
	if(obj.material!=undefined&&Object.keys(obj.material).length!=0){
		if(obj.material.type=="MeshBasicMaterial"){
			json.material={
				type:obj.material.type,
				color:obj.material.color.getHex(),
				map:jsonifyMap(obj.material.map),
				opacity:obj.material.opacity,
				transparent:obj.material.transparent,
				side:obj.material.side
			};
		}
		if(obj.material.type=="MeshStandardMaterial"){
			json.material={
				type:obj.material.type,
				color:obj.material.color.getHex(),
				map:jsonifyMap(obj.material.map),
				metalnessMap:jsonifyMap(obj.material.metalnessMap),
				roughnessMap:jsonifyMap(obj.material.roughnessMap),
				bumpMap:jsonifyMap(obj.material.bumpMap),
				normalMap:jsonifyMap(obj.material.normalMap),
				metalness:obj.material.metalness,
				roughness:obj.material.roughness,
				opacity:obj.material.opacity,
				transparent:obj.material.transparent,
				side:obj.material.side
			};
		}
	}
	return(json.material);
}

function createObjectFromJson(type="empty",geo="empty",cprop={color:0xffffff,intensity:1}){
	let mesh;
	if(type=="object"&&geo=="plane"){
		mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.rotation.x=(-90)*rad;
		mesh.userData.tag="Plane";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="plane";
	}
	if(type=="object"&&geo=="box"){
		mesh=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Box";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="box";
	}
	if(type=="object"&&geo=="circle"){
		mesh=new THREE.Mesh(new THREE.CircleGeometry(1,32,0,Math.PI*2),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.rotation.x=(-90)*rad;
		mesh.userData.tag="Circle";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="circle";
	}
	if(type=="object"&&geo=="sphere"){
		mesh=new THREE.Mesh(new THREE.SphereGeometry(1,32,20),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Sphere";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="sphere";
	}
	if(type=="object"&&geo=="pyramid"){
		mesh=new THREE.Mesh(new THREE.ConeGeometry(1,1,3),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Pyramid";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="pyramid";
	}
	if(type=="object"&&geo=="torus"){
		mesh=new THREE.Mesh(new THREE.TorusGeometry(1,0.4,20,32),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.rotation.x=-90*rad;
		mesh.userData.tag="Torus";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="torus";
	}
	if(type=="object"&&geo=="bean"){
		mesh=new THREE.Mesh(new THREE.CapsuleGeometry(1,1,8,16),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Bean";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="bean";
	}
	if(type=="object"&&geo=="cylinder"){
		mesh=new THREE.Mesh(new THREE.CylinderGeometry(1,1,2,20),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Cylinder";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="cylinder";
	}
	if(type=="object"&&geo=="icosphere"){
		mesh=new THREE.Mesh(new THREE.IcosahedronGeometry(1,4),dmat.clone());
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Icosphere";
		mesh.userData.type="object";
		mesh.userData.scripts=[];
		mesh.userData.geo="icosphere";
	}
	if(type=="light"&&geo=="light"){
		mesh=new THREE.PointLight(cprop.color,cprop.intensity,20);
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Light";
		mesh.userData.type="light";
		mesh.userData.scripts=[];
		mesh.userData.geo="light";
		mesh.castShadow=true;
		setupShadow(mesh);
	}
	if(type=="light"&&geo=="hemi"){
		mesh=new THREE.HemisphereLight(cprop.color,0x333333,cprop.intensity);
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Sun";
		mesh.userData.type="light";
		mesh.userData.scripts=[];
		mesh.userData.geo="hemi";
	}
	if(type=="empty"&&geo=="empty"){
		mesh=new THREE.Object3D();
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Empty";
		mesh.userData.type="empty";
		mesh.userData.scripts=[];
		mesh.userData.geo="empty";
	}
	if(type=="camera"&&geo=="camera"){
		mesh=new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,10000);
		if(sceneadding&&oo){mesh.position.copy(controls.target);sceneadding=false;}
		mesh.userData.tag="Camera";
		mesh.userData.type="camera";
		mesh.userData.scripts=[];
		mesh.userData.geo="camera";
		let helper=new THREE.Line(
			new THREE.BufferGeometry().setFromPoints(cameraPoints),
			new THREE.LineBasicMaterial({color:0xff0000})
		);
		helper.userData.doNotCrawl=true;
		mesh.add(helper);
	}
	return(mesh);
}

function download(data,fn){
	let blob,url,dum;
	blob=new Blob([data],{type:"application/octet-stream"});
	url=window.URL.createObjectURL(blob);
	dum=document.createElement("a");
	dum.href=url;
	dum.download=fn;
	document.body.appendChild(dum);
	dum.style.display="none";
	dum.click();
}

function downloadBlob(blob,fn){
	let url,dum;
	url=window.URL.createObjectURL(blob);
	dum=document.createElement("a");
	dum.href=url;
	dum.download=fn;
	document.body.appendChild(dum);
	dum.style.display="none";
	dum.click();
}
function exportProj(){
	let zip=new JSZip();
	let root=zip.folder("Release");
	
	let as=0;
	let ast=[];
	let ovp=writeProject();
	let data=root.folder("data");
	for(let script in scripts){
		ast.push(script+".js");
		data.file(script+".js",scripts[script].javascript);
	}
	
	for(let i=0;i<sc.length;i++){
		ast.push(sc[i].userData.tag+".sc");
		data.file(sc[i].userData.tag+".sc",JSON.stringify(ovp.scenes[i]));
	}
	
	for(let a in astl){
		ast.push(a);
	}
	
	
	function finish(){
		root.generateAsync({type:"blob"}).then(function(data){
			downloadBlob(data,"Release.zip");
		},function(e){});
	}
	function step(){
		as+=1;
		if(as==Object.keys(astl).length){
			finish();
		}
	}
	
	
	ast.push("sky.jpeg");
	
	root.file("index.html","<!DOCTYPE html><html><head><title>Game</title></head><body></body><script>let meta={assets:"+JSON.stringify(ast)+",mainScene:'"+(sc[0].userData.tag)+"'};</script><script src='lib/peer.js'></script><script src='lib/howler.js'></script><script type='module' src='lib/libdgm.js'></script></html>");
	
	let lib=root.folder("lib");
	httpRequest("threejs/build/three.module.js",function(){
		lib.file("three.js",this.responseText);
		
		httpRequest("howler/howler.js",function(){
			lib.file("howler.js",this.responseText);
			
			httpRequest("peerjs/peer.js",function(){
				lib.file("peer.js",this.responseText);
				
				httpRequest("player/libdgm.js",function(){
					lib.file("libdgm.js",this.responseText);
					
					httpRequest("threejs/additional/Capsule.js",function(){
						lib.file("Capsule.js",this.responseText);
						
						httpRequest("threejs/additional/Octree.js",function(){
							lib.file("Octree.js",this.responseText);
							httpRequest("assets/skybox/sky.jpeg",function(){
								data.file("sky.jpeg",this.response);
								//assets
								for(let ast in astl){
									httpRequest(astl[ast],function(){
										data.file(ast,this.response);
										step();
									},"blob");
								}
								if(Object.keys(astl).length==0){
									finish();
								}
							},"blob");
						});
					});
				});
			});
		});
	});
}
function openNewScriptPopup(){
	let ss=document.getElementById("scriptsel");
	let ss1=document.getElementById("scriptsel1");
	let ss2=document.getElementById("scriptsel2");
	let ss3=document.getElementById("scriptsel3");
	ss.style.display="block";
	document.getElementById("scriptsel_close").onclick=function(){
		ss.style.display="none";
	};
	ss1.innerHTML="";
	ss1.appendChild(newScriptDiagItem("Empty",function(){
		let name=autoScriptName();
		scripts[name]={
			blockly:"",
			javascript:"",
			blockly_available:true,
			javascript_available:true
		};
		return(name);
	}));
	ss2.innerHTML="";
	for(let script in scripts){
		let name=script;
		ss2.appendChild(newScriptDiagItem(name,function(){
			return(name);
		}));
	}
	ss3.innerHTML="";
	for(let script in components){
		let name=script;
		ss3.appendChild(newScriptDiagItem(name,function(){
			scripts[name]={
				blockly:"",
				javascript:components[name],
				blockly_available:false,
				javascript_available:false
			};
			return(name);
		}));
	}
}

function newScriptDiagItem(text,create){
	let elem=document.createElement("p");
	elem.innerText=text;
	elem.className="scriptsel_i";
	elem.onclick=function(){
		try{
			tca.userData.scripts.push(create());
			reloadTab();
			if(tca.userData.scripts[tca.userData.scripts.length-1].blockly_available){
				openBlockEditor(tca.userData.scripts[tca.userData.scripts.length-1]);
			}
		}catch(err){}
		document.getElementById("scriptsel").style.display="none";
	}
	return(elem);
}

function autoScriptName(base="Script"){
	let iname=1;
	while(scripts[base+String(iname)]!=undefined){iname+=1;}
	return(base+String(iname));
}

function m_move(e){
	if(!mobile){
		touch.p.set((e.clientX/renderer.domElement.clientWidth)*2-1,-(e.clientY/renderer.domElement.clientHeight)*2+1);
	}
}

function m_up(e){
	touch.m=false;
}

function m_down(e){
	touch.m=true;
	if(mobile){
		touch.p.set((e.clientX/renderer.domElement.clientWidth)*2-1,-(e.clientY/renderer.domElement.clientHeight)*2+1);
	}
}

function m_upd(){
	let allow=true;
	if(mobile){
		allow=touch.m;
	}
	if(allow){
		if(dcamera!=undefined){
			touch.r.setFromCamera(touch.p,dcamera);
			let intersects=touch.r.intersectObject(dfbgs);
			if(intersects.length>0){
				touch.o=intersects[0].object;
			}else{
				touch.o=null;
			}
		}
	}else{
		touch.o=null;
	}
}

function switchScene(irikdjfekfjewj){
	if(debugging){
		debugging=false;
		stopDebugger();
		document.getElementById("startDebug").style.opacity="1";
		document.getElementById("stopDebug").style.opacity="0.5";
		window.alert("Scene changed, stopped debugging.");
	}
}

function editTexture(mat,mapid,onfinish=function(){}){
	let e=document.getElementById("tsel");
	let ex=document.getElementById("tselx");
	let en=document.getElementById("tseln");
	let ec=document.getElementById("tselc");
	
	ec.innerHTML="";
	
	let eln=document.createElement("img");
	eln.className="tsel_i";
	eln.src="assets/gui/notexture_big.png";
	eln.onclick=function(){
		mat[mapid]=null;
		mat.needsUpdate=true;
		onfinish();
		e.style.display="none";
		reloadTab();
	};
	ec.appendChild(eln);
	
	for(let ast in astl){
		if(isImage(ast)){
			let el=document.createElement("img");
			el.className="tsel_i";
			el.src=astl[ast];
			el.onclick=function(){
				mat[mapid]=new THREE.TextureLoader().load(astl[ast],function(){
					mat[mapid].userData.src=ast;
					mat.needsUpdate=true;
					onfinish();
					e.style.display="none";
					reloadTab();
				});
			}
			ec.appendChild(el);
		}
	}
	
	ex.onclick=function(){
		e.style.display="none";
	}
	en.onclick=function(){
		selectImg(mat,mapid,onfinish);
	}
	
	e.style.display="block";
}

function selectImg(mat,mapid,onfinish){
	let fsel=document.getElementById("fsel");
	let fselt=document.getElementById("fselt");
	let fselc=document.getElementById("fselc");
	fselt.onchange=function(event){
		let promise=event.target.files[0].arrayBuffer();
		promise.then(function(ab){
			let blob=new Blob([ab],{type:"application/octet-stream"});
			let fn=event.target.files[0].name;
			if(astl[fn]!=undefined){
				alert("W: This texture is already in the project. The name will be changed a bit.");
				fn+=" ("+String(Math.round(Math.random()*1000))+")";
			}
			astl[fn]=window.URL.createObjectURL(blob);
			editTexture(mat,mapid,onfinish);
			fsel.style.display="none";
			updateFM();
		});
	};
	fselc.onclick=function(){
		fsel.style.display="none";
	};
	fsel.style.display="block";
}

function updateFM(){
	let fm=document.getElementById("fmn");
	
	function createFir(lbl,img){
		let fir=document.createElement("div");
		fir.className="fir";
		let fii=document.createElement("img");
		fii.src=img;
		fii.className="fii";
		let fil=document.createElement("p");
		fil.innerText=lbl;
		fil.className="fil";
		fir.appendChild(fii);
		fir.appendChild(fil);
		return(fir);
	}
	
	if(!debugging){
		fm.innerHTML="";
		for(let ast in astl){
			let src="assets/mimetypes/unknown.png";
			if(isImage(ast)){
				src="assets/mimetypes/image.png";
				if(astl[ast]!=undefined){
					src=astl[ast];
				}
			}
			if(isAudio(ast)){
				src="assets/mimetypes/audio.png";
			}
			fm.appendChild(createFir(ast,src));
		}
		document.getElementById("fmu").onclick=function(){
			uploadFile();
		};
	}
	document.getElementById("fmx").onclick=function(){
		document.getElementById("fm").style.display="none";
		document.getElementById("fmc").style.display="block";
	};
	document.getElementById("fmc").onclick=function(){
		document.getElementById("fm").style.display="block";
		document.getElementById("fmc").style.display="none";
	};
}

function uploadFile(then=function(){}){
	let fsel=document.getElementById("fsel");
	let fselt=document.getElementById("fselt");
	let fselc=document.getElementById("fselc");
	fselt.onchange=function(event){
		let promise=event.target.files[0].arrayBuffer();
		promise.then(function(ab){
			let blob=new Blob([ab],{type:"application/octet-stream"});
			astl[event.target.files[0].name]=window.URL.createObjectURL(blob);
			fsel.style.display="none";
			updateFM();
		});
	};
	fselc.onclick=function(){
		fsel.style.display="none";
	};
	fsel.style.display="block";
	then();
}

function consolelog(text){
	objDiv.innerHTML="<p style='color:white;margin-left:20px;'>"+text+"</p>"+objDiv.innerHTML;
}

function chkExt(fn,ext){
	return(exts[ext].includes(fn.split(".")[fn.split(".").length-1]));
}

function isImage(fn){
	return(chkExt(fn,"image"));
}

function isAudio(fn){
	return(chkExt(fn,"audio"));
}

function playSound(a){
	if(!Object.keys(audios).includes(a)){
		audios[a]=new Howl({src:[astl[a]],format:["mp3","ogg"]});
	}
	audios[a].play();
}

function setupShadow(dir){
	dir.shadow.camera.far=500;
	dir.shadow.camera.near=0.01;
	dir.shadow.mapSize.width=512;
	dir.shadow.mapSize.height=512;
	dir.shadow.bias=-0.005;
}

//Bottom

document.addEventListener("DOMContentLoaded",init);

