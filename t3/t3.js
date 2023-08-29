'use strict';

const target = document.querySelector('#target');
const browser = document.createElement('p');
const os = document.createElement('p');
const monitor = document.createElement('p');
const space = document.createElement('p');
const date = document.createElement('p');
const time = document.createElement('p');

browser.textContent = `Browser: ${navigator.appName}, ${navigator.appVersion}`;
os.textContent = `OS: ${navigator.platform}`;
monitor.textContent = `Screen: ${screen.width} x ${screen.height}`;
space.textContent = `Available screen space: ${screen.availWidth} x ${screen.availHeight}`;
date.textContent = `Date: ${new Date().toLocaleDateString('fi-FI')}`;
time.textContent = `Time: ${new Date().toLocaleTimeString('fi-FI', {
  minute: '2-digit',
  hour: '2-digit',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})}`;

target.appendChild(browser);
target.appendChild(os);
target.appendChild(monitor);
target.appendChild(space);
target.appendChild(date);
target.appendChild(time);
