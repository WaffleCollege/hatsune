'use strict'
// Please don't delete the 'use strict' line above
const WEATHER_FORECAST =
"https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"

//Q1
// 1. fetchを使って情報を取得
fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json')
  .then(response => response.json()) // 2. 情報をJSON形式に変換
  .then(data => {
    // 3. 変換された情報をコンソールに出力
    console.log(data);
    
    // 4. "東京地方"の天気予報が格納された配列を探し出す
    const tokyoForecast = data[0]['timeSeries'][0]['areas'].find(area => area['area']['name'] === '東京地方');
    
    // 5. 東京の明日の天気を表示
    if (tokyoForecast) {
      const tomorrowWeather = tokyoForecast['weather'][1]; // 今日の天気は0、明日の天気は1
      console.log('東京の明日の天気:', tomorrowWeather);
    } else {
      console.log('東京の天気情報が見つかりませんでした。');
    }
  })
  .catch(error => console.error('データの取得中にエラーが発生しました:', error));

//Q2
function getTodaysForecast(regionCode) {
    // 正しい地域コードかどうかを確認
    if (!/^\d{6}$/.test(regionCode)) {
      console.log("正しい地域コードを入力してください。");
      return; // 間違った地域コードが入力された場合、関数を終了
    }
  
    // 地域コードを使ってAPIから天気情報を取得
    fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${regionCode}.json`)
      .then(response => response.json())
      .then(data => {
        // 東京地方の天気情報を見つける
        const tokyoForecast = data[0]['timeSeries'][0]['areas'].find(area => area['area']['name'] === '東京地方');
  
        // 今日の天気を取得
        const todayWeather = tokyoForecast['weather'][0];
        
        // 今日の天気をコンソールに表示
        console.log('東京の今日の天気:', todayWeather);
      })
      .catch(error => console.error('データの取得中にエラーが発生しました:', error));
  }
  
  // 例として、地域コード130000（東京地方）を使用して関数を呼び出す
  getTodaysForecast('130000');

//Q4
function getTodaysForecast(regionCode) {
    if (!/^\d{6}$/.test(regionCode)) {
      console.log("正しい地域コードを入力してください。");
      return;
    }
  
    fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${regionCode}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Fetch failed');
        }
        return response.json();
      })
      .then(data => {
        const tokyoForecast = data[0]['timeSeries'][0]['areas'].find(area => area['area']['name'] === '東京地方');
        const todayWeather = tokyoForecast['weather'][0];
  
        // HTMLに天気情報を表示
        document.getElementById('weather').textContent = todayWeather;
      })
      .catch(error => {
        console.error('データの取得中にエラーが発生しました:', error);
        // HTMLにエラーメッセージを表示
        document.getElementById('weather').textContent = '情報を取得できませんでした';
      });
  }
  
  // ページ読み込み時に天気情報を取得し表示する
  document.addEventListener('DOMContentLoaded', function () {
    getTodaysForecast('130000');
  });
  
