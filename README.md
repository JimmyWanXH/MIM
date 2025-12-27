# 上海曼桠姆智能科技有限公司官网

这是一个使用纯HTML、CSS和JavaScript构建的公司官网项目。

## 功能特性

- 🏠 **首页**：包含轮播图和核心设备展示（2-3个主要设备，背景为大图片）
- 📖 **关于我们**：公司介绍、使命愿景、核心价值观
- 🛠️ **产品服务**：展示公司的产品和服务
- 🔧 **设备详情**：点击"了解更多"可跳转到详细的设备介绍页面
- 📞 **联系我们**：联系方式 and 在线咨询表单

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)

## 项目结构

```
web2/
├── images/              # 图片文件夹
│   ├── banner1.jpg     # 轮播图1
│   ├── banner2.jpg     # 轮播图2
│   ├── banner3.jpg     # 轮播图3
│   ├── device1.jpg     # 设备1图片
│   ├── device2.jpg     # 设备2图片
│   └── device3.jpg     # 设备3图片
├── css/
│   └── style.css       # 全局样式文件
├── js/
│   ├── navigation.js   # 公共导航组件（所有页面复用）
│   ├── carousel.js     # 轮播图功能
│   └── device-detail.js # 设备详情页功能
├── index.html          # 首页
├── about.html          # 关于我们
├── products.html       # 产品服务
├── device-detail.html  # 设备详情页
└── contact.html        # 联系我们
```

## 导航组件复用

**navigation.js** 是公共的导航组件文件，所有页面都通过以下方式加载：

```html
<script src="js/navigation.js"></script>
```

导航组件会自动：
- 在所有页面顶部插入导航栏
- 根据当前页面自动高亮对应的导航项
- 支持移动端响应式菜单

## 图片使用说明

### 轮播图
请将以下图片放在 `images/` 文件夹下：
- `banner1.jpg` - 第一张轮播图
- `banner2.jpg` - 第二张轮播图
- `banner3.jpg` - 第三张轮播图

建议尺寸：1920 x 500 像素

### 设备图片
请将以下图片放在 `images/` 文件夹下：
- `device1.jpg` - 智能监控系统
- `device2.jpg` - 智能数据分析平台
- `device3.jpg` - AI智能机器人

建议尺寸：800 x 600 像素或更大

详细说明请查看：`images/README.md`

## 使用方法

1. 将准备好的图片放入 `images/` 文件夹
2. 直接在浏览器中打开 `index.html` 即可查看网站
3. 或者使用本地服务器运行（推荐）

### 使用本地服务器（推荐）

**使用Python:**
```bash
cd web2
python -m http.server 8000
```
然后访问 http://localhost:8000

**使用Node.js (http-server):**
```bash
cd web2
npx http-server
```

## 主要功能说明

### 首页设备展示
- 首页展示3个核心设备
- 每个设备卡片有背景大图片
- 显示设备名称、主要特性
- "了解更多"按钮可跳转到设备详情页

### 设备详情页
- 通过URL参数 `?id=1`、`?id=2`、`?id=3` 区分不同设备
- 显示设备的详细介绍、技术规格等信息

## 浏览器兼容性

支持所有现代浏览器：
- Chrome
- Firefox
- Safari
- Edge

## 注意事项

1. 所有图片必须严格按照命名规范命名
2. 如需后端数据存储，需要自行对接服务器API

