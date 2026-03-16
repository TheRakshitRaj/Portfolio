import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import ProjectCard from './ProjectCard';

function CarouselItem({ index, count, radius, project, activeIndex, setActiveIndex }) {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    // Calculate position in the circle
    const angle = (index / count) * Math.PI * 2;

    // We want the active item to be at angle 0 (front)
    // So we apply a rotation based on the current activeIndex
    // But for a simple carousel, we can just animate the rotation of the group container.
    // Let's stick to a simpler approach: Static positions, rotating container vs individual items.

    // Alternate approach: Linear 3D Slide
    // Let's do a coverflow-style linear arrangement
    const offset = index - activeIndex;
    // Position
    const x = offset * 4.5; // Spread
    const z = -Math.abs(offset) * 2; // Depth
    const rotY = offset * -0.3; // Rotate in towards center

    // Fade out distant items
    const opacity = Math.max(0, 1 - Math.abs(offset) * 0.3);
    const visible = Math.abs(offset) < 3; // Only show close ones

    useFrame((state, delta) => {
        if (ref.current) {
            // Smooth lerp to target position
            ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, delta * 5);
            ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, z, delta * 5);
            ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotY, delta * 5);
        }
    });

    if (!visible) return null;

    return (
        <group ref={ref}>
            <Html
                transform
                occlude
                position={[0, 0, 0]}
                style={{
                    width: '380px', // Match card css roughly
                    height: 'auto',
                    opacity: opacity,
                    transition: 'opacity 0.5s',
                    pointerEvents: Math.abs(offset) > 0.5 ? 'none' : 'auto', // Only interact with center
                    transform: `scale(${1 - Math.abs(offset) * 0.1})`
                }}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <div
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: hovered ? 'pointer' : 'default' }}
                >
                    <ProjectCard {...project} />
                </div>
            </Html>
        </group>
    );
}

const ThreeProjectGallery = ({ projects }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <group position={[0, -1, 0]}> {/* Lower slightly to center cards */}
                    {projects.map((project, index) => (
                        <CarouselItem
                            key={index}
                            index={index}
                            count={projects.length}
                            project={project}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </group>
            </Canvas>

            {/* Navigation Controls */}
            <div className="three-gallery-controls">
                <button onClick={handlePrev} className="nav-btn prev">←</button>
                <button onClick={handleNext} className="nav-btn next">→</button>
            </div>

            <style>{`
                .three-gallery-controls {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 20px;
                    z-index: 10;
                }
                .nav-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(5px);
                }
                .nav-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default ThreeProjectGallery;
