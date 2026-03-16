import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Grid, Icosahedron, Box } from '@react-three/drei';
import * as THREE from 'three';

const TechCube = (props) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Precise, robotic rotation, faster on hover
            const speed = hovered ? 0.8 : 0.2;
            meshRef.current.rotation.x = t * speed + props.offset;
            meshRef.current.rotation.y = t * speed;

            // Subtle pulse
            const scale = props.scale * (1 + Math.sin(t * 2) * 0.05);
            meshRef.current.scale.setScalar(scale);
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <Box
                ref={meshRef}
                args={[1, 1, 1]}
                scale={props.scale}
                position={props.position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <meshStandardMaterial
                    color={hovered ? "#fff" : props.color}
                    wireframe
                    emissive={hovered ? "#00f3ff" : props.color}
                    emissiveIntensity={hovered ? 2 : 0.5}
                />
            </Box>
        </Float>
    );
};

const TechNode = (props) => {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
            <Icosahedron args={[1, 0]} scale={props.scale} position={props.position}>
                <meshStandardMaterial
                    color={props.color}
                    wireframe
                    transparent
                    opacity={0.6}
                />
            </Icosahedron>
        </Float>
    );
}

const Rig = () => {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 10), 0.05);
        camera.lookAt(0, 0, 0);
    });
}

const ThreeBackground = () => {
    return (
        <div className="three-bg-container">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <color attach="background" args={['#030308']} />

                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4338ca" />

                <Rig />

                {/* Digital Interface Grid */}
                <Grid
                    position={[0, -4, 0]}
                    args={[20, 20]}
                    cellSize={1}
                    cellThickness={0.5}
                    cellColor="#1c1c1e"
                    sectionSize={5}
                    sectionThickness={1}
                    sectionColor="#2997ff"
                    fadeDistance={15}
                    fadeStrength={1}
                />

                {/* Floating Tech Cubes (Data Blocks) */}
                <TechCube position={[-4, 2, -2]} scale={1.2} color="#00f3ff" offset={0} />
                <TechCube position={[4, -1, -3]} scale={1.5} color="#4338ca" offset={2} />
                <TechCube position={[-2, -3, -1]} scale={0.8} color="#2997ff" offset={4} />
                <TechCube position={[5, 3, -5]} scale={1} color="#00f3ff" offset={1} />

                {/* Cyber Nodes */}
                <TechNode position={[0, 0, -5]} scale={3} color="#1c1c1e" /> {/* Background structure */}
                <TechNode position={[3, 4, -2]} scale={0.5} color="#6366f1" />
                <TechNode position={[-5, -2, -4]} scale={0.6} color="#00f3ff" />

            </Canvas>
        </div>
    );
};

export default ThreeBackground;
