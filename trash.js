
	/*
	
	spawnBox = (function() {
		var box_geometry = new THREE.BoxGeometry( 4, 4, 8 ),
			handleCollision = function( collided_with, linearVelocity, angularVelocity ) {
			
			},
			createBox = function() {
				var box, material;
				
				material = Physijs.createMaterial(
					new THREE.MeshLambertMaterial({ map: loader.load( 'images/container.jpg' ) }),
					.6, // medium friction
					.3 // low restitution
				);
				material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
				material.map.repeat.set( .5, .5 );
				
				//material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) });
				
				box = new Physijs.BoxMesh(
					box_geometry,
					material
				);
				box.collisions = 0;
				
				box.position.set(contlocation,25,0);	
				
				box.castShadow = true;
				box.addEventListener( 'collision', handleCollision );
				box.addEventListener( 'ready', spawnBox );
				scene.add( box );
			};
		
		
		return function() {
			if(contnum < 6 ){
				setTimeout( createBox, 1000 );
				contnum += 1;
				contlocation += 5;
			}
			//createBox();
		};
		
	})();
	*/
	/*
	spawnBox = (function() {
		var box_geometry = new THREE.BoxGeometry( 4, 4, 4 ),
			handleCollision = function( collided_with, linearVelocity, angularVelocity ) {
				switch ( ++this.collisions ) {
					
					case 1:
						this.material.color.setHex(0xcc8855);
						break;
					
					case 2:
						this.material.color.setHex(0xbb9955);
						break;
					
					case 3:
						this.material.color.setHex(0xaaaa55);
						break;
					
					case 4:
						this.material.color.setHex(0x99bb55);
						break;
					
					case 5:
						this.material.color.setHex(0x88cc55);
						break;
					
					case 6:
						this.material.color.setHex(0x77dd55);
						break;
				}
			},
			createBox = function() {
				var box, material;
				
				material = Physijs.createMaterial(
					new THREE.MeshLambertMaterial({ map: loader.load( 'images/plywood.jpg' ) }),
					.6, // medium friction
					.3 // low restitution
				);
				material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
				material.map.repeat.set( .5, .5 );
				
				//material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) });
				
				box = new Physijs.BoxMesh(
					box_geometry,
					material
				);
				box.collisions = 0;
				
				box.position.set(
					Math.random() * 15 - 7.5,
					25,
					Math.random() * 15 - 7.5
				);
				
				box.rotation.set(
					Math.random() * Math.PI,
					Math.random() * Math.PI,
					Math.random() * Math.PI
				);
				
				box.castShadow = true;
				box.addEventListener( 'collision', handleCollision );
				box.addEventListener( 'ready', spawnBox );
				scene.add( box );
			};
		
		return function() {
			setTimeout( createBox, 1000 );
		};
	})();
	*/
	
	
	/*	
	function addContainer(contenedor, posicion){
		var ball_material = Physijs.createMaterial(new THREE.MeshLambertMaterial({ map: loader.load( 'images/container.jpg' ) }),
					.6, // medium friction
					.3 // low restitution
				);
				
		var cont_geometry = new THREE.BoxGeometry(4,4,8);
			 
		contenedor = new Physijs.BoxMesh(cont_geometry,ball_material);
		contenedor.castShadow = true;
		scene.add( contenedor );
		contenedor.setDamping(0,0.9);
		contenedor.position.set(posicion);	
		// You also need to cancel the object's velocity
		contenedor.setLinearVelocity(new THREE.Vector3(0, 0, 0));
		contenedor.setAngularVelocity(new THREE.Vector3(0, 0, 0));
		contenedor.addEventListener( 'collision', onCollision);
	}
	
	function addBall(){
		var ball_material = Physijs.createMaterial(new THREE.MeshLambertMaterial({ map: loader.load( 'images/container.jpg' ) }),
					.6, // medium friction
					.3 // low restitution
				);
		//var ball_geometry = new THREE.SphereGeometry( 2,16,16);
		var ball_geometry = new THREE.BoxGeometry(4,4,8);
			 
		//ball = new Physijs.SphereMesh(ball_geometry,ball_material,20);
		ball = new Physijs.BoxMesh(ball_geometry,ball_material);
		ball.castShadow = true;
		//releaseBall();
		scene.add( ball );
		ball.setDamping(0,0.9);
		//ball.position.y = 50;
		ball.position.set(0,25,0);	
		// You also need to cancel the object's velocity
		ball.setLinearVelocity(new THREE.Vector3(0, 0, 0));
		ball.setAngularVelocity(new THREE.Vector3(0, 0, 0));
		ball.addEventListener( 'collision', onCollision);
	}
	
	function releaseBall(){
		var range =10+Math.random()*30;
		ball.position.y = 16;
		ball.position.x = ((2*Math.floor(Math.random()*2))-1)*range;
		ball.position.z = ((2*Math.floor(Math.random()*2))-1)*range;
		ball.__dirtyPosition = true;//force new position
		 
		// You also need to cancel the object's velocity
		ball.setLinearVelocity(new THREE.Vector3(0, 0, 0));
		ball.setAngularVelocity(new THREE.Vector3(0, 0, 0));
	}
	
	render = function() {
		requestAnimationFrame( render );
		renderer.render( scene, camera );
		//render_stats.update();
	};
	*/
	
	
	var grupo = new THREE.Group();
	
	grupo.add(objeto);