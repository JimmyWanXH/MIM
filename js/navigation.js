// 公共导航组件 - 所有页面都可复用
function loadNavigation() {
  const navigationHTML = `
    <nav class="navigation">
      <div class="nav-container">
        <div class="nav-logo">
          <a href="index.html">
            <img src="images/logo.png" alt="上海曼桠姆智能科技" class="logo-image">
            <span class="logo-text">上海曼桠姆智能科技</span>
          </a>
        </div>
        <ul class="nav-menu">
          <li><a href="index.html" class="nav-link">首页</a></li>
          <li><a href="about.html" class="nav-link">关于我们</a></li>
          <li><a href="products.html" class="nav-link">产品服务</a></li>
          <li><a href="contact.html" class="nav-link">联系我们</a></li>
        </ul>
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
      </div>
    </nav>
  `;
  
  // 插入导航到页面
  document.body.insertAdjacentHTML('afterbegin', navigationHTML);
  
  // 设置当前页面的导航高亮
  setActiveNav();
  
  // 移动端菜单切换
  setupMobileMenu();
}

function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('mobile-active');
    });
  }
  
  // 点击菜单项后关闭移动菜单
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('mobile-active');
    });
  });
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
}

