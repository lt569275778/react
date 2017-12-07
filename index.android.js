/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './components/App.js'

//将我们的react_native_douban组件，渲染到屏幕上
//参数1：我们项目的名称，不要该
//参数2：项目启动之后，要呈现在屏幕上面的第一个组件(根组件)
AppRegistry.registerComponent('react_native_douban', () => App);
