 import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

    let scene, camera, renderer;

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load('couch.glb', function(gltf) {
            scene.add(gltf.scene);
            animate();
        });

        camera.position.z = 5;
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    init();
   