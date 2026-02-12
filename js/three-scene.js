// Three.js 3D Background Scene
// Creates an interactive 3D environment with floating geometric shapes

let scene, camera, renderer, shapes = [];
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let pointLight1, pointLight2; // Store light references for theme updates

// Color palettes for different themes
const colorPalettes = {
    dark: {
        shapes: [
            0xb44cff, // Primary purple
            0x6b4a8f, // Dark purple
            0xff006e, // Accent pink
            0x39ff14, // Accent green
            0xff6b35  // Accent orange
        ],
        light1: 0xb44cff,
        light2: 0x9966ff
    },
    light: {
        shapes: [
            0x8b2fa3, // Darker purple
            0x6b1f7f, // Even darker purple
            0xd91e63, // Darker pink
            0x2ecc71, // Darker green
            0xe74c3c  // Darker orange
        ],
        light1: 0x8b2fa3,
        light2: 0x6b1f7f
    }
};

function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
}

function initThreeScene() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return; // Guard: exit if canvas doesn't exist

    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating shapes
    createShapes();

    // Mouse move listener for parallax effect
    document.addEventListener('mousemove', onMouseMove);

    // Window resize listener
    window.addEventListener('resize', onWindowResize);

    // Start animation loop
    animate();
}

function createShapes() {
    const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.TorusGeometry(0.5, 0.2, 16, 100),
        new THREE.OctahedronGeometry(0.6),
        new THREE.TetrahedronGeometry(0.7)
    ];

    const theme = getCurrentTheme();
    const colors = colorPalettes[theme].shapes;

    // Create 15 random shapes
    for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.3,
            wireframe: Math.random() > 0.5,
            transparent: true,
            opacity: 0.6
        });

        const mesh = new THREE.Mesh(geometry, material);

        // Random position
        mesh.position.x = (Math.random() - 0.5) * 20;
        mesh.position.y = (Math.random() - 0.5) * 20;
        mesh.position.z = (Math.random() - 0.5) * 10;

        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        // Random scale
        const scale = 0.5 + Math.random() * 0.5;
        mesh.scale.set(scale, scale, scale);

        // Store velocity for animation
        mesh.userData.velocity = {
            x: (Math.random() - 0.5) * 0.002,
            y: (Math.random() - 0.5) * 0.002,
            rotation: (Math.random() - 0.5) * 0.01
        };

        scene.add(mesh);
        shapes.push(mesh);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point lights and store references
    pointLight1 = new THREE.PointLight(colorPalettes[getCurrentTheme()].light1, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    pointLight2 = new THREE.PointLight(colorPalettes[getCurrentTheme()].light2, 1, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
}

// Function to update all shape colors based on theme
function updateThreeSceneColors() {
    const theme = getCurrentTheme();
    const palette = colorPalettes[theme];
    
    // Update shape materials
    shapes.forEach(shape => {
        const shapeColors = palette.shapes;
        // Randomize but keep consistent colors - just update to new palette
        const newColor = shapeColors[Math.floor(Math.random() * shapeColors.length)];
        shape.material.color.setHex(newColor);
        shape.material.emissive.setHex(newColor);
    });
    
    // Update light colors
    if (pointLight1) {
        pointLight1.color.setHex(palette.light1);
    }
    if (pointLight2) {
        pointLight2.color.setHex(palette.light2);
    }
}

function onMouseMove(event) {
    // Normalize mouse position to -1 to 1
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Set target rotation based on mouse position
    targetRotation.x = mouse.y * 0.3;
    targetRotation.y = mouse.x * 0.3;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Animate each shape
    shapes.forEach(shape => {
        // Continuous rotation
        shape.rotation.x += shape.userData.velocity.rotation;
        shape.rotation.y += shape.userData.velocity.rotation;

        // Floating motion
        shape.position.x += shape.userData.velocity.x;
        shape.position.y += shape.userData.velocity.y;

        // Bounce off boundaries
        if (Math.abs(shape.position.x) > 10) {
            shape.userData.velocity.x *= -1;
        }
        if (Math.abs(shape.position.y) > 10) {
            shape.userData.velocity.y *= -1;
        }
    });

    // Smooth camera movement based on mouse (parallax effect)
    camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.05;
    camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.05;

    renderer.render(scene, camera);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeScene);
} else {
    initThreeScene();
}
