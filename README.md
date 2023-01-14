# weather-source-cwb
自氣象資料開放平台抓取所有鄉鎮近一週天氣預報
## 如何使用
請先前往 [氣象資料開放平台](https://opendata.cwb.gov.tw/index) 取得 API 授權碼
```bash
export TOKEN="CWB-OOOOO-XXXXX-OOOO-XXXX-OOOOOOOOOOO"; node index.js
```
## 資料授權
需註明資料來源為 [交通部中央氣象局](https://www.cwb.gov.tw/)。

> 根據 [使用規範](https://opendata.cwb.gov.tw/about/rules)，氣象資料依 [政府資料開放授權條款（Open Government Data License）](https://data.gov.tw/license) 進行公眾釋出，在使用時必須標註來源為 [交通部中央氣象局](https://www.cwb.gov.tw/)。