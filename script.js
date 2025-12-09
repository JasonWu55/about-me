// --- Three.js 背景特效 (Matrix 粒子風) ---
const initThreeJS = () => {
    if (typeof THREE === 'undefined') return;

    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 建立粒子
    const geometry = new THREE.BufferGeometry();
    const count = 1500;
    const posArray = new Float32Array(count * 3);

    for(let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 60; // 隨機散佈
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x00ff00, // 駭客綠
        transparent: true,
        opacity: 0.8
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 20;

    // 滑鼠視差
    let mouseX = 0; 
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - window.innerWidth / 2;
        mouseY = e.clientY - window.innerHeight / 2;
    });

    const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.002; // 自動旋轉
        
        // 跟隨滑鼠
        camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.1;
        camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.1;

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// --- 頁面互動 ---

// 進入系統
function enterSystem() {
    const overlay = document.getElementById('intro-overlay');
    const nav = document.getElementById('navbar');
    const content = document.getElementById('main-content');

    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        nav.style.display = 'block';
        content.style.display = 'block';
        
        // 延遲讓 CSS transition 生效
        setTimeout(() => {
            content.style.opacity = '1';
            triggerSkillsAnim();
        }, 50);
    }, 800);
}

// 技能條動畫
function triggerSkillsAnim() {
    const skills = document.querySelectorAll('.progress-fill');
    skills.forEach(skill => {
        const width = skill.getAttribute('data-progress');
        skill.style.width = width + '%';
    });
}

// 監聽 DOM 載入
document.addEventListener('DOMContentLoaded', initThreeJS);

// 將函式綁定到 window 以便 HTML onclick 呼叫
window.enterSystem = enterSystem;