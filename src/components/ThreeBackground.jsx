import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ currentSlide = 0 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let animationFrameId;
    let renderer, scene, camera;
    let particlesMesh, coreMesh, innerCore, ringMesh, ringMesh2;

    try {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050509, 0.025);

      // 2. Camera
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 25;

      // 3. Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);

      // 4. Ambient & Point Lighting
      const ambientLight = new THREE.AmbientLight(0x0d1527, 2.5);
      scene.add(ambientLight);

      const cyanPointLight = new THREE.PointLight(0x00f0ff, 4, 60);
      cyanPointLight.position.set(10, 10, 15);
      scene.add(cyanPointLight);

      const violetPointLight = new THREE.PointLight(0xa855f7, 3.5, 60);
      violetPointLight.position.set(-10, -10, 10);
      scene.add(violetPointLight);

      // 5. Particle Cosmos (1,500 Star Nodes)
      const particleCount = 1500;
      const posArray = new Float32Array(particleCount * 3);
      const colorArray = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 80;
        posArray[i + 1] = (Math.random() - 0.5) * 60;
        posArray[i + 2] = (Math.random() - 0.5) * 60;

        // Dual cyan / purple particles
        const isCyan = Math.random() > 0.45;
        colorArray[i] = isCyan ? 0.2 : 0.65;
        colorArray[i + 1] = isCyan ? 0.75 : 0.35;
        colorArray[i + 2] = isCyan ? 1.0 : 0.95;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });

      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // 6. Central 3D AI Neural Core (Wireframe Icosahedron)
      const coreGeo = new THREE.IcosahedronGeometry(4.5, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      coreMesh = new THREE.Mesh(coreGeo, coreMat);
      scene.add(coreMesh);

      // Inner glowing nucleus
      const innerGeo = new THREE.OctahedronGeometry(2.2, 0);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      innerCore = new THREE.Mesh(innerGeo, innerMat);
      scene.add(innerCore);

      // Orbiting 3D Data Rings
      const ringGeo = new THREE.TorusGeometry(7.5, 0.04, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.3,
      });
      ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      scene.add(ringMesh);

      const ringGeo2 = new THREE.TorusGeometry(9.0, 0.03, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0x818cf8,
        transparent: true,
        opacity: 0.22,
      });
      ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
      ringMesh2.rotation.y = Math.PI / 4;
      scene.add(ringMesh2);

      // 7. Mouse Interaction Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Resize Handler
      const handleResize = () => {
        if (!camera || !renderer) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // 8. Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Parallax easing
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Smooth camera slide response based on currentSlide
        const slideAngle = (currentSlide * Math.PI) / 8;
        const targetCamX = Math.sin(slideAngle) * 6 + targetX * 3;
        const targetCamY = -targetY * 3;
        const targetCamZ = 24 + Math.cos(slideAngle) * 3;

        camera.position.x += (targetCamX - camera.position.x) * 0.05;
        camera.position.y += (targetCamY - camera.position.y) * 0.05;
        camera.position.z += (targetCamZ - camera.position.z) * 0.05;
        camera.lookAt(0, 0, 0);

        // Slow rotations
        if (particlesMesh) {
          particlesMesh.rotation.y = elapsedTime * 0.03;
          particlesMesh.rotation.x = elapsedTime * 0.015;
        }

        if (coreMesh) {
          coreMesh.rotation.x = elapsedTime * 0.15;
          coreMesh.rotation.y = elapsedTime * 0.2;
          const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
          coreMesh.scale.set(scale, scale, scale);
        }

        if (innerCore) {
          innerCore.rotation.x = -elapsedTime * 0.25;
          innerCore.rotation.z = elapsedTime * 0.3;
        }

        if (ringMesh) {
          ringMesh.rotation.z = elapsedTime * 0.12;
        }
        if (ringMesh2) {
          ringMesh2.rotation.x = -elapsedTime * 0.09;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (currentMount && renderer.domElement) {
          currentMount.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (e) {
      console.warn('Three.js initialization skipped or WebGL unavailable:', e);
    }
  }, [currentSlide]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
}
