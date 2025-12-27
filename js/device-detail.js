// 设备详情页面功能
const deviceData = {
  1: {
    name: '智能监控系统',
    image: 'images/device1.jpg',
    description: `
      <p>智能监控系统是我们公司自主研发的核心产品，采用最先进的人工智能技术和物联网技术，为用户提供全方位的安全监控解决方案。</p>
      <p>系统具备24小时实时监控能力，通过高清摄像头和AI智能识别算法，能够准确识别异常行为，并及时发出预警。支持云端数据存储，确保监控数据的安全性和可追溯性。</p>
      <p>该系统广泛应用于企业、工厂、学校、社区等场所，有效提升了安全防护水平，得到了用户的一致好评。</p>
    `,
    specs: [
      { label: '监控范围', value: '360度全方位' },
      { label: '识别精度', value: '99.8%' },
      { label: '响应时间', value: '< 1秒' },
      { label: '存储容量', value: '云端无限扩展' },
      { label: '支持分辨率', value: '4K超高清' },
      { label: '工作环境', value: '-20°C ~ 60°C' }
    ],
    features: [
      '24小时实时监控',
      'AI智能识别技术',
      '高清视频采集',
      '云端数据存储',
      '移动端远程查看',
      '智能报警推送'
    ]
  },
  2: {
    name: '智能数据分析平台',
    image: 'images/device2.jpg',
    description: `
      <p>智能数据分析平台是一款强大的企业级数据分析和可视化工具，帮助企业在海量数据中发现价值，做出更明智的决策。</p>
      <p>平台采用分布式计算架构，支持PB级别的数据处理，能够实时分析业务数据，生成可视化报表和图表。内置机器学习算法，可以进行智能预测和趋势分析。</p>
      <p>该平台已服务于金融、零售、制造等多个行业，帮助客户提升了运营效率和市场竞争力。</p>
    `,
    specs: [
      { label: '数据处理能力', value: 'PB级别' },
      { label: '分析速度', value: '实时分析' },
      { label: '支持数据源', value: '多种格式' },
      { label: '可视化组件', value: '50+种图表' },
      { label: '并发用户', value: '1000+' },
      { label: '数据安全', value: '银行级加密' }
    ],
    features: [
      '大数据处理能力',
      '实时数据分析',
      '可视化报表展示',
      '智能预测分析',
      '自定义仪表盘',
      'API接口集成'
    ]
  },
  3: {
    name: 'AI智能机器人',
    image: 'images/device3.jpg',
    description: `
      <p>AI智能机器人是我们最新推出的智能化产品，集成了语音识别、自然语言处理、计算机视觉等多项前沿技术，能够在多种场景下提供智能化服务。</p>
      <p>机器人具备自主导航能力，能够精准定位和路径规划。支持语音交互，可以理解用户的语音指令并做出相应回应。搭载多种传感器，能够感知周围环境并做出智能决策。</p>
      <p>广泛应用于接待、导览、配送、巡检等场景，为客户提供了高效便捷的智能化服务体验。</p>
    `,
    specs: [
      { label: '移动速度', value: '1.5米/秒' },
      { label: '续航时间', value: '8-12小时' },
      { label: '识别距离', value: '5米' },
      { label: '负载能力', value: '30公斤' },
      { label: '工作温度', value: '0°C ~ 45°C' },
      { label: '语音识别', value: '多语言支持' }
    ],
    features: [
      '自主导航系统',
      '语音交互功能',
      '智能任务执行',
      '多场景应用',
      '云端大脑支持',
      '模块化设计'
    ]
  }
};

function loadDeviceDetail() {
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const deviceId = urlParams.get('id');
  
  const device = deviceData[deviceId];
  const contentDiv = document.getElementById('deviceContent');
  
  if (!device) {
    contentDiv.innerHTML = `
      <div style="text-align: center; padding: 4rem;">
        <h1>设备不存在</h1>
        <p>抱歉，找不到您要查看的设备信息。</p>
      </div>
    `;
    return;
  }
  
  // 生成规格列表HTML
  const specsHTML = device.specs.map(spec => `
    <div class="spec-item">
      <div class="spec-label">${spec.label}</div>
      <div class="spec-value">${spec.value}</div>
    </div>
  `).join('');
  
  // 生成内容HTML
  contentDiv.innerHTML = `
    <div class="device-detail-header">
      <h1>${device.name}</h1>
    </div>
    <div class="device-detail-image" style="background-image: url('${device.image}');"></div>
    <div class="device-detail-content">
      <div class="device-description">
        <h2>产品介绍</h2>
        ${device.description}
        <h2 style="margin-top: 2rem;">主要功能</h2>
        <ul style="color: #666; line-height: 2;">
          ${device.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      <div class="device-specs">
        <h2>技术规格</h2>
        ${specsHTML}
      </div>
    </div>
  `;
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadDeviceDetail);
} else {
  loadDeviceDetail();
}

