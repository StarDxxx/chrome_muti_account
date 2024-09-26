import React from 'react';
import './index.css';
import 'virtual:windi.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import type {ThemeConfig} from 'antd';
import {ConfigProvider, message} from 'antd';
import {HashRouter as Router} from 'react-router-dom';
import 'dayjs/locale/zh-cn';
// import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import './i18n';

const rootContainer = document.getElementById('app');

message.config({
  top: 1000,
  duration: 2,
});

const customTheme: ThemeConfig = {
  // token: {
  //   colorPrimary: '#4096ff',
  // },
  token: {
    motion: false,
  },
  components: {
    Layout: {
      bodyBg: 'rgba(240, 242, 245, 0.25)',
      headerBg: 'transparent',
      siderBg: 'transparent',
      lightSiderBg: 'transparent',
      headerHeight: 48,
    },
    Menu: {
      itemBg: 'transparent',
    },
  },
};

const root = createRoot(rootContainer!);
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={customTheme}
    >
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
);
