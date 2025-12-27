// 轮播图功能
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');
  
  let currentIndex = 0;
  let carouselInterval;

  function showSlide(index) {
    // 移除所有活动状态
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // 设置当前活动状态
    if (slides[index]) {
      slides[index].classList.add('active');
    }
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }
    
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000);
  }

  function stopCarousel() {
    clearInterval(carouselInterval);
  }

  // 绑定事件
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopCarousel();
      nextSlide();
      startCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopCarousel();
      prevSlide();
      startCarousel();
    });
  }

  // 指示器点击事件
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      stopCarousel();
      showSlide(index);
      startCarousel();
    });
  });

  // 鼠标悬停时暂停自动播放
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
  }

  // 初始化显示第一张
  if (slides.length > 0) {
    showSlide(0);
    startCarousel();
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}

