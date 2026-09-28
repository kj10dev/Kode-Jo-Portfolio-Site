import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Floating icosahedron wireframe — the centrepiece
function CentralMesh() {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.12
      meshRef.current.rotation.y = t * 0.18
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.15
    }
    if (glowRef.current) {
      glowRef.current.rotation.x = -t * 0.08
      glowRef.current.rotation.y = -t * 0.12
    }
  })

  return (
    <group>
      {/* Outer glow shell */}
      <mesh ref={glowRef} scale={1.15}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#F2B33D"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      {/* Main mesh */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#A66C24"
          wireframe={false}
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#A67C6D"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  )
}

// Particle field
function Particles({ count = 1800 }) {
  const pointsRef = useRef()

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const gold = new THREE.Color('#F2B33D')
    const bronze = new THREE.Color('#A66C24')
    const rose = new THREE.Color('#A67C6D')
    const white = new THREE.Color('#ffffff')

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const radius = 3 + Math.random() * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const mix = Math.random()
      const col = mix < 0.4 ? gold : mix < 0.7 ? bronze : mix < 0.85 ? rose : white
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }
    return { positions, colors }
  }, [count])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.025
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

// Orbital rings
function OrbitalRings() {
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ring1.current) ring1.current.rotation.z = t * 0.15
    if (ring2.current) ring2.current.rotation.x = t * 0.1
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.08
      ring3.current.rotation.z = t * 0.05
    }
  })

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.008, 4, 80]} />
        <meshBasicMaterial color="#F2B33D" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.8, 0.005, 4, 80]} />
        <meshBasicMaterial color="#A66C24" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[3.5, 0.004, 4, 100]} />
        <meshBasicMaterial color="#A67C6D" transparent opacity={0.22} />
      </mesh>
    </>
  )
}

// Mouse-reactive camera rig
function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  const onMouseMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }, [])

  // Attach mouse listener
  useMemo(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [onMouseMove])

  useFrame(() => {
    target.current.x += (mouse.current.x * 0.6 - target.current.x) * 0.05
    target.current.y += (mouse.current.y * 0.4 - target.current.y) * 0.05
    camera.position.x = target.current.x
    camera.position.y = target.current.y
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#F2B33D" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#A66C24" intensity={1.5} />
      <CameraRig />
      <Particles count={1800} />
      <OrbitalRings />
      <CentralMesh />
    </Canvas>
  )
}
