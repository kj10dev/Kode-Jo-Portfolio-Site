// Three.js 3D Background Scene
// Creates an interactive 3D environment with floating geometric shapes

let scene, camera, renderer, shapes = [];
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let pointLight1, pointLight2; // Store light references for theme updates

// Color palettes for different themes (neutral grey palette)
const colorPalettes = {
    dark: {
        shapes: [
            0xff00ff, // electric magenta
            0x00f5ff, // neon cyan
            0x8a2eff, // vibrant purple
            0xff6b00, // hot orange
            0x39ff14  // neon green
        ],
        light1: 0xffffff,   // pure white highlight
        light2: 0xffd700,   // gold glow
        settings: {
            emissiveIntensity: 1.2,
            opacity: 0.85,
            shininess: 120,
            lightIntensity: 2.2
        }
    },

    light: {
        shapes: [
            0x7f00ff, // deep violet
            0x00d9ff, // electric sky
            0xff1493, // neon pink
            0xffae00, // vibrant amber
            0x00ff9f  // aqua green
        ],
        light1: 0xffffff,
        light2: 0xf0f0f0,
        settings: {
            emissiveIntensity: 1.6,
            opacity: 1,
            shininess: 150,
            lightIntensity: 2.8
        }
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

        // Use MeshPhongMaterial and apply theme-specific visual weight
        const themeSettings = colorPalettes[theme].settings || {};
        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: themeSettings.emissiveIntensity ?? 0.3,
            wireframe: Math.random() > 0.6,
            transparent: true,
            opacity: themeSettings.opacity ?? 0.6,
            shininess: themeSettings.shininess ?? 30
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    // Add point lights and store references (intensity varies by theme)
    const palette = colorPalettes[getCurrentTheme()];
    pointLight1 = new THREE.PointLight(palette.light1, palette.settings.lightIntensity, 120);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    pointLight2 = new THREE.PointLight(palette.light2, palette.settings.lightIntensity, 120);
    pointLight2.position.set(-6, -4, 6);
    scene.add(pointLight2);
}

// Function to update all shape colors based on theme
function updateThreeSceneColors() {
    const theme = getCurrentTheme();
    const palette = colorPalettes[theme];

    // Update shape materials
    shapes.forEach(shape => {
        const shapeColors = palette.shapes;
        // Pick a new color from the palette for visual refresh
        const newColor = shapeColors[Math.floor(Math.random() * shapeColors.length)];
        shape.material.color.setHex(newColor);
        shape.material.emissive.setHex(newColor);
        // Apply theme-weighted material properties
        const s = palette.settings || {};
        shape.material.emissiveIntensity = s.emissiveIntensity ?? shape.material.emissiveIntensity;
        shape.material.opacity = s.opacity ?? shape.material.opacity;
        shape.material.shininess = s.shininess ?? shape.material.shininess;
    });

    // Update light colors
    if (pointLight1) {
        pointLight1.color.setHex(palette.light1);
        pointLight1.intensity = palette.settings.lightIntensity;
    }
    if (pointLight2) {
        pointLight2.color.setHex(palette.light2);
        pointLight2.intensity = palette.settings.lightIntensity;
    }
}

// Watch for theme attribute changes and update scene colors automatically
const themeObserver = new MutationObserver((mutations) => {
    mutations.forEach(m => {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
            updateThreeSceneColors();
        }
    });
});
if (typeof document !== 'undefined' && document.documentElement) {
    themeObserver.observe(document.documentElement, { attributes: true });
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
