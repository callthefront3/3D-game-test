// ---------------------------
// THREE.js 기본 씬
// ---------------------------

// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xA72703);

// 카메라 생성
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// 렌더러 생성
const renderer = new THREE.WebGLRenderer({ });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio * 0.3);
document.body.appendChild(renderer.domElement);

// 환경광 추가
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// 방향성 조명 추가
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// 큐브 생성
const geometry = new THREE.BoxGeometry();
const phongMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: 100,
});
const cube = new THREE.Mesh(geometry, phongMaterial);
scene.add(cube);

// ---------------------------
// cute pink heart particle
// ---------------------------

// 하트 텍스처 생성
function createHeartTexture() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '0xffffff';
    ctx.beginPath();
    ctx.moveTo(size/2, size/4);
    ctx.bezierCurveTo(size/2, 0, 0, 0, 0, size/4);
    ctx.bezierCurveTo(0, size/2, size/2, size*0.75, size/2, size);
    ctx.bezierCurveTo(size/2, size*0.75, size, size/2, size, size/4);
    ctx.bezierCurveTo(size, 0, size/2, 0, size/2, size/4);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    // 🔹 필터링 방식 변경
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;

    return texture;
}

const heartTexture = createHeartTexture();

// 하트 입자 생성
const particleCount = 200;
const particleGeometry = new THREE.BufferGeometry();
const positions = [];

for (let i = 0; i < particleCount; i++) {
    positions.push(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
    );
}

particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.2,
    map: heartTexture,
    transparent: true,
    alphaTest: 0.01
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// ---------------------------
// 애니메이션 루프
// ---------------------------
function animate() {
    requestAnimationFrame(animate);

    // 큐브 회전
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;

    // 하트 입자 회전
    // particles.rotation.y += 0.002;
    // particles.rotation.x += 0.001;
    particles.rotation.y += 0.02;
    particles.rotation.x += 0.01;

    renderer.render(scene, camera);
}
animate();

// ---------------------------
// 창 크기 변경 처리
// ---------------------------
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
