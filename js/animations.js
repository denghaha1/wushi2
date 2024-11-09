// 滚动动画
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初始检查

    // 添加轮播图初始化代码
    $('.carousel').carousel({
        interval: 1500,  // 设置轮播间隔为1.5秒
        pause: false,    // 鼠标悬停时不暂停
        wrap: true,      // 循环播放
        keyboard: true   // 允许键盘控制
    });
}); 