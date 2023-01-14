# weather-source-cwb
自氣象資料開放平台抓取所有鄉鎮近一週天氣預報，並處理成適合前端使用的資料格式。
## 如何使用
請先前往 [氣象資料開放平台](https://opendata.cwb.gov.tw/index) 取得 API 授權碼，並將其設定為環境變數
```bash
export TOKEN="CWB-OOOOO-XXXXX-OOOO-XXXX-OOOOOOOOOOO"; node index.mjs
```
## 直接使用 API
本專案每六小時會自動自中央氣象局抓取資料，您可使用本儲存庫資料，API 如下。
### 兩日天氣預報
TODO
### 一週天氣預報
TODO
### 可用路徑
基本上就是全台所有鄉鎮的天氣預報，路徑如下。
```bash
├── day
│   ├── 南投縣
│   │   ├── 中寮鄉.json
│   │   ├── 仁愛鄉.json
│   │   ├── 信義鄉.json
│   │   ├── 南投市.json
│   │   ├── 名間鄉.json
│   │   ├── 國姓鄉.json
│   │   ├── 埔里鎮.json
│   │   ├── 水里鄉.json
│   │   ├── 竹山鎮.json
│   │   ├── 草屯鎮.json
│   │   ├── 集集鎮.json
│   │   ├── 魚池鄉.json
│   │   └── 鹿谷鄉.json
│   ├── 嘉義市
│   │   ├── 東區.json
│   │   └── 西區.json
│   ├── 嘉義縣
│   │   ├── 中埔鄉.json
│   │   ├── 六腳鄉.json
│   │   ├── 大埔鄉.json
│   │   ├── 大林鎮.json
│   │   ├── 太保市.json
│   │   ├── 布袋鎮.json
│   │   ├── 新港鄉.json
│   │   ├── 朴子市.json
│   │   ├── 東石鄉.json
│   │   ├── 梅山鄉.json
│   │   ├── 民雄鄉.json
│   │   ├── 水上鄉.json
│   │   ├── 溪口鄉.json
│   │   ├── 番路鄉.json
│   │   ├── 竹崎鄉.json
│   │   ├── 義竹鄉.json
│   │   ├── 鹿草鄉.json
│   │   └── 阿里山鄉.json
│   ├── 基隆市
│   │   ├── 七堵區.json
│   │   ├── 中山區.json
│   │   ├── 中正區.json
│   │   ├── 仁愛區.json
│   │   ├── 信義區.json
│   │   ├── 安樂區.json
│   │   └── 暖暖區.json
│   ├── 宜蘭縣
│   │   ├── 三星鄉.json
│   │   ├── 五結鄉.json
│   │   ├── 冬山鄉.json
│   │   ├── 南澳鄉.json
│   │   ├── 員山鄉.json
│   │   ├── 壯圍鄉.json
│   │   ├── 大同鄉.json
│   │   ├── 宜蘭市.json
│   │   ├── 礁溪鄉.json
│   │   ├── 羅東鎮.json
│   │   ├── 蘇澳鎮.json
│   │   └── 頭城鎮.json
│   ├── 屏東縣
│   │   ├── 九如鄉.json
│   │   ├── 佳冬鄉.json
│   │   ├── 來義鄉.json
│   │   ├── 內埔鄉.json
│   │   ├── 南州鄉.json
│   │   ├── 屏東市.json
│   │   ├── 崁頂鄉.json
│   │   ├── 恆春鎮.json
│   │   ├── 新園鄉.json
│   │   ├── 新埤鄉.json
│   │   ├── 春日鄉.json
│   │   ├── 東港鎮.json
│   │   ├── 枋寮鄉.json
│   │   ├── 枋山鄉.json
│   │   ├── 林邊鄉.json
│   │   ├── 泰武鄉.json
│   │   ├── 滿州鄉.json
│   │   ├── 潮州鎮.json
│   │   ├── 牡丹鄉.json
│   │   ├── 獅子鄉.json
│   │   ├── 琉球鄉.json
│   │   ├── 瑪家鄉.json
│   │   ├── 竹田鄉.json
│   │   ├── 萬丹鄉.json
│   │   ├── 萬巒鄉.json
│   │   ├── 車城鄉.json
│   │   ├── 里港鄉.json
│   │   ├── 長治鄉.json
│   │   ├── 霧臺鄉.json
│   │   ├── 高樹鄉.json
│   │   ├── 鹽埔鄉.json
│   │   ├── 麟洛鄉.json
│   │   └── 三地門鄉.json
│   ├── 彰化縣
│   │   ├── 二林鎮.json
│   │   ├── 二水鄉.json
│   │   ├── 伸港鄉.json
│   │   ├── 北斗鎮.json
│   │   ├── 和美鎮.json
│   │   ├── 員林市.json
│   │   ├── 埔心鄉.json
│   │   ├── 埔鹽鄉.json
│   │   ├── 埤頭鄉.json
│   │   ├── 大城鄉.json
│   │   ├── 大村鄉.json
│   │   ├── 彰化市.json
│   │   ├── 永靖鄉.json
│   │   ├── 溪州鄉.json
│   │   ├── 溪湖鎮.json
│   │   ├── 田中鎮.json
│   │   ├── 田尾鄉.json
│   │   ├── 社頭鄉.json
│   │   ├── 福興鄉.json
│   │   ├── 秀水鄉.json
│   │   ├── 竹塘鄉.json
│   │   ├── 線西鄉.json
│   │   ├── 芬園鄉.json
│   │   ├── 花壇鄉.json
│   │   ├── 芳苑鄉.json
│   │   └── 鹿港鎮.json
│   ├── 新北市
│   │   ├── 三峽區.json
│   │   ├── 三芝區.json
│   │   ├── 三重區.json
│   │   ├── 中和區.json
│   │   ├── 五股區.json
│   │   ├── 八里區.json
│   │   ├── 土城區.json
│   │   ├── 坪林區.json
│   │   ├── 平溪區.json
│   │   ├── 新店區.json
│   │   ├── 新莊區.json
│   │   ├── 板橋區.json
│   │   ├── 林口區.json
│   │   ├── 樹林區.json
│   │   ├── 永和區.json
│   │   ├── 汐止區.json
│   │   ├── 泰山區.json
│   │   ├── 淡水區.json
│   │   ├── 深坑區.json
│   │   ├── 烏來區.json
│   │   ├── 瑞芳區.json
│   │   ├── 石碇區.json
│   │   ├── 石門區.json
│   │   ├── 萬里區.json
│   │   ├── 蘆洲區.json
│   │   ├── 貢寮區.json
│   │   ├── 金山區.json
│   │   ├── 雙溪區.json
│   │   └── 鶯歌區.json
│   ├── 新竹市
│   │   ├── 北區.json
│   │   ├── 東區.json
│   │   └── 香山區.json
│   ├── 新竹縣
│   │   ├── 五峰鄉.json
│   │   ├── 北埔鄉.json
│   │   ├── 寶山鄉.json
│   │   ├── 尖石鄉.json
│   │   ├── 峨眉鄉.json
│   │   ├── 新埔鎮.json
│   │   ├── 新豐鄉.json
│   │   ├── 橫山鄉.json
│   │   ├── 湖口鄉.json
│   │   ├── 竹北市.json
│   │   ├── 竹東鎮.json
│   │   ├── 芎林鄉.json
│   │   └── 關西鎮.json
│   ├── 桃園市
│   │   ├── 中壢區.json
│   │   ├── 八德區.json
│   │   ├── 大園區.json
│   │   ├── 大溪區.json
│   │   ├── 平鎮區.json
│   │   ├── 復興區.json
│   │   ├── 新屋區.json
│   │   ├── 桃園區.json
│   │   ├── 楊梅區.json
│   │   ├── 蘆竹區.json
│   │   ├── 觀音區.json
│   │   ├── 龍潭區.json
│   │   └── 龜山區.json
│   ├── 澎湖縣
│   │   ├── 七美鄉.json
│   │   ├── 望安鄉.json
│   │   ├── 湖西鄉.json
│   │   ├── 白沙鄉.json
│   │   ├── 西嶼鄉.json
│   │   └── 馬公市.json
│   ├── 臺中市
│   │   ├── 中區.json
│   │   ├── 北區.json
│   │   ├── 南區.json
│   │   ├── 東區.json
│   │   ├── 西區.json
│   │   ├── 北屯區.json
│   │   ├── 南屯區.json
│   │   ├── 后里區.json
│   │   ├── 和平區.json
│   │   ├── 外埔區.json
│   │   ├── 大安區.json
│   │   ├── 大甲區.json
│   │   ├── 大肚區.json
│   │   ├── 大里區.json
│   │   ├── 大雅區.json
│   │   ├── 太平區.json
│   │   ├── 新社區.json
│   │   ├── 東勢區.json
│   │   ├── 梧棲區.json
│   │   ├── 沙鹿區.json
│   │   ├── 清水區.json
│   │   ├── 潭子區.json
│   │   ├── 烏日區.json
│   │   ├── 石岡區.json
│   │   ├── 神岡區.json
│   │   ├── 西屯區.json
│   │   ├── 豐原區.json
│   │   ├── 霧峰區.json
│   │   └── 龍井區.json
│   ├── 臺北市
│   │   ├── 中山區.json
│   │   ├── 中正區.json
│   │   ├── 信義區.json
│   │   ├── 內湖區.json
│   │   ├── 北投區.json
│   │   ├── 南港區.json
│   │   ├── 士林區.json
│   │   ├── 大同區.json
│   │   ├── 大安區.json
│   │   ├── 文山區.json
│   │   ├── 松山區.json
│   │   └── 萬華區.json
│   ├── 臺南市
│   │   ├── 北區.json
│   │   ├── 南區.json
│   │   ├── 東區.json
│   │   ├── 七股區.json
│   │   ├── 下營區.json
│   │   ├── 中西區.json
│   │   ├── 仁德區.json
│   │   ├── 佳里區.json
│   │   ├── 六甲區.json
│   │   ├── 北門區.json
│   │   ├── 南化區.json
│   │   ├── 善化區.json
│   │   ├── 大內區.json
│   │   ├── 學甲區.json
│   │   ├── 安南區.json
│   │   ├── 安定區.json
│   │   ├── 安平區.json
│   │   ├── 官田區.json
│   │   ├── 將軍區.json
│   │   ├── 山上區.json
│   │   ├── 左鎮區.json
│   │   ├── 後壁區.json
│   │   ├── 新化區.json
│   │   ├── 新市區.json
│   │   ├── 新營區.json
│   │   ├── 東山區.json
│   │   ├── 柳營區.json
│   │   ├── 楠西區.json
│   │   ├── 歸仁區.json
│   │   ├── 永康區.json
│   │   ├── 玉井區.json
│   │   ├── 白河區.json
│   │   ├── 西港區.json
│   │   ├── 關廟區.json
│   │   ├── 鹽水區.json
│   │   ├── 麻豆區.json
│   │   └── 龍崎區.json
│   ├── 臺東縣
│   │   ├── 卑南鄉.json
│   │   ├── 大武鄉.json
│   │   ├── 延平鄉.json
│   │   ├── 成功鎮.json
│   │   ├── 東河鄉.json
│   │   ├── 池上鄉.json
│   │   ├── 海端鄉.json
│   │   ├── 綠島鄉.json
│   │   ├── 臺東市.json
│   │   ├── 蘭嶼鄉.json
│   │   ├── 達仁鄉.json
│   │   ├── 金峰鄉.json
│   │   ├── 長濱鄉.json
│   │   ├── 關山鎮.json
│   │   ├── 鹿野鄉.json
│   │   └── 太麻里鄉.json
│   ├── 花蓮縣
│   │   ├── 光復鄉.json
│   │   ├── 卓溪鄉.json
│   │   ├── 吉安鄉.json
│   │   ├── 壽豐鄉.json
│   │   ├── 富里鄉.json
│   │   ├── 新城鄉.json
│   │   ├── 玉里鎮.json
│   │   ├── 瑞穗鄉.json
│   │   ├── 秀林鄉.json
│   │   ├── 花蓮市.json
│   │   ├── 萬榮鄉.json
│   │   ├── 豐濱鄉.json
│   │   └── 鳳林鎮.json
│   ├── 苗栗縣
│   │   ├── 三灣鄉.json
│   │   ├── 三義鄉.json
│   │   ├── 公館鄉.json
│   │   ├── 卓蘭鎮.json
│   │   ├── 南庄鄉.json
│   │   ├── 大湖鄉.json
│   │   ├── 後龍鎮.json
│   │   ├── 泰安鄉.json
│   │   ├── 獅潭鄉.json
│   │   ├── 竹南鎮.json
│   │   ├── 苑裡鎮.json
│   │   ├── 苗栗市.json
│   │   ├── 西湖鄉.json
│   │   ├── 通霄鎮.json
│   │   ├── 造橋鄉.json
│   │   ├── 銅鑼鄉.json
│   │   ├── 頭份市.json
│   │   └── 頭屋鄉.json
│   ├── 連江縣
│   │   ├── 北竿鄉.json
│   │   ├── 南竿鄉.json
│   │   ├── 東引鄉.json
│   │   └── 莒光鄉.json
│   ├── 金門縣
│   │   ├── 烈嶼鄉.json
│   │   ├── 烏坵鄉.json
│   │   ├── 金城鎮.json
│   │   ├── 金寧鄉.json
│   │   ├── 金沙鎮.json
│   │   └── 金湖鎮.json
│   ├── 雲林縣
│   │   ├── 二崙鄉.json
│   │   ├── 元長鄉.json
│   │   ├── 北港鎮.json
│   │   ├── 口湖鄉.json
│   │   ├── 古坑鄉.json
│   │   ├── 四湖鄉.json
│   │   ├── 土庫鎮.json
│   │   ├── 大埤鄉.json
│   │   ├── 崙背鄉.json
│   │   ├── 斗六市.json
│   │   ├── 斗南鎮.json
│   │   ├── 東勢鄉.json
│   │   ├── 林內鄉.json
│   │   ├── 水林鄉.json
│   │   ├── 臺西鄉.json
│   │   ├── 莿桐鄉.json
│   │   ├── 虎尾鎮.json
│   │   ├── 褒忠鄉.json
│   │   ├── 西螺鎮.json
│   │   └── 麥寮鄉.json
│   ├── 高雄市
│   │   ├── 三民區.json
│   │   ├── 仁武區.json
│   │   ├── 內門區.json
│   │   ├── 六龜區.json
│   │   ├── 前金區.json
│   │   ├── 前鎮區.json
│   │   ├── 大寮區.json
│   │   ├── 大樹區.json
│   │   ├── 大社區.json
│   │   ├── 小港區.json
│   │   ├── 岡山區.json
│   │   ├── 左營區.json
│   │   ├── 彌陀區.json
│   │   ├── 新興區.json
│   │   ├── 旗山區.json
│   │   ├── 旗津區.json
│   │   ├── 杉林區.json
│   │   ├── 林園區.json
│   │   ├── 桃源區.json
│   │   ├── 梓官區.json
│   │   ├── 楠梓區.json
│   │   ├── 橋頭區.json
│   │   ├── 永安區.json
│   │   ├── 湖內區.json
│   │   ├── 燕巢區.json
│   │   ├── 田寮區.json
│   │   ├── 甲仙區.json
│   │   ├── 美濃區.json
│   │   ├── 苓雅區.json
│   │   ├── 茂林區.json
│   │   ├── 茄萣區.json
│   │   ├── 路竹區.json
│   │   ├── 阿蓮區.json
│   │   ├── 鳥松區.json
│   │   ├── 鳳山區.json
│   │   ├── 鹽埕區.json
│   │   ├── 鼓山區.json
│   │   └── 那瑪夏區.json
│   ├── 南投縣.json
│   ├── 嘉義市.json
│   ├── 嘉義縣.json
│   ├── 基隆市.json
│   ├── 宜蘭縣.json
│   ├── 屏東縣.json
│   ├── 彰化縣.json
│   ├── 新北市.json
│   ├── 新竹市.json
│   ├── 新竹縣.json
│   ├── 桃園市.json
│   ├── 澎湖縣.json
│   ├── 臺中市.json
│   ├── 臺北市.json
│   ├── 臺南市.json
│   ├── 臺東縣.json
│   ├── 花蓮縣.json
│   ├── 苗栗縣.json
│   ├── 連江縣.json
│   ├── 金門縣.json
│   ├── 雲林縣.json
│   └── 高雄市.json
└── week
    ├── 南投縣
    │   ├── 中寮鄉.json
    │   ├── 仁愛鄉.json
    │   ├── 信義鄉.json
    │   ├── 南投市.json
    │   ├── 名間鄉.json
    │   ├── 國姓鄉.json
    │   ├── 埔里鎮.json
    │   ├── 水里鄉.json
    │   ├── 竹山鎮.json
    │   ├── 草屯鎮.json
    │   ├── 集集鎮.json
    │   ├── 魚池鄉.json
    │   └── 鹿谷鄉.json
    ├── 嘉義市
    │   ├── 東區.json
    │   └── 西區.json
    ├── 嘉義縣
    │   ├── 中埔鄉.json
    │   ├── 六腳鄉.json
    │   ├── 大埔鄉.json
    │   ├── 大林鎮.json
    │   ├── 太保市.json
    │   ├── 布袋鎮.json
    │   ├── 新港鄉.json
    │   ├── 朴子市.json
    │   ├── 東石鄉.json
    │   ├── 梅山鄉.json
    │   ├── 民雄鄉.json
    │   ├── 水上鄉.json
    │   ├── 溪口鄉.json
    │   ├── 番路鄉.json
    │   ├── 竹崎鄉.json
    │   ├── 義竹鄉.json
    │   ├── 鹿草鄉.json
    │   └── 阿里山鄉.json
    ├── 基隆市
    │   ├── 七堵區.json
    │   ├── 中山區.json
    │   ├── 中正區.json
    │   ├── 仁愛區.json
    │   ├── 信義區.json
    │   ├── 安樂區.json
    │   └── 暖暖區.json
    ├── 宜蘭縣
    │   ├── 三星鄉.json
    │   ├── 五結鄉.json
    │   ├── 冬山鄉.json
    │   ├── 南澳鄉.json
    │   ├── 員山鄉.json
    │   ├── 壯圍鄉.json
    │   ├── 大同鄉.json
    │   ├── 宜蘭市.json
    │   ├── 礁溪鄉.json
    │   ├── 羅東鎮.json
    │   ├── 蘇澳鎮.json
    │   └── 頭城鎮.json
    ├── 屏東縣
    │   ├── 九如鄉.json
    │   ├── 佳冬鄉.json
    │   ├── 來義鄉.json
    │   ├── 內埔鄉.json
    │   ├── 南州鄉.json
    │   ├── 屏東市.json
    │   ├── 崁頂鄉.json
    │   ├── 恆春鎮.json
    │   ├── 新園鄉.json
    │   ├── 新埤鄉.json
    │   ├── 春日鄉.json
    │   ├── 東港鎮.json
    │   ├── 枋寮鄉.json
    │   ├── 枋山鄉.json
    │   ├── 林邊鄉.json
    │   ├── 泰武鄉.json
    │   ├── 滿州鄉.json
    │   ├── 潮州鎮.json
    │   ├── 牡丹鄉.json
    │   ├── 獅子鄉.json
    │   ├── 琉球鄉.json
    │   ├── 瑪家鄉.json
    │   ├── 竹田鄉.json
    │   ├── 萬丹鄉.json
    │   ├── 萬巒鄉.json
    │   ├── 車城鄉.json
    │   ├── 里港鄉.json
    │   ├── 長治鄉.json
    │   ├── 霧臺鄉.json
    │   ├── 高樹鄉.json
    │   ├── 鹽埔鄉.json
    │   ├── 麟洛鄉.json
    │   └── 三地門鄉.json
    ├── 彰化縣
    │   ├── 二林鎮.json
    │   ├── 二水鄉.json
    │   ├── 伸港鄉.json
    │   ├── 北斗鎮.json
    │   ├── 和美鎮.json
    │   ├── 員林市.json
    │   ├── 埔心鄉.json
    │   ├── 埔鹽鄉.json
    │   ├── 埤頭鄉.json
    │   ├── 大城鄉.json
    │   ├── 大村鄉.json
    │   ├── 彰化市.json
    │   ├── 永靖鄉.json
    │   ├── 溪州鄉.json
    │   ├── 溪湖鎮.json
    │   ├── 田中鎮.json
    │   ├── 田尾鄉.json
    │   ├── 社頭鄉.json
    │   ├── 福興鄉.json
    │   ├── 秀水鄉.json
    │   ├── 竹塘鄉.json
    │   ├── 線西鄉.json
    │   ├── 芬園鄉.json
    │   ├── 花壇鄉.json
    │   ├── 芳苑鄉.json
    │   └── 鹿港鎮.json
    ├── 新北市
    │   ├── 三峽區.json
    │   ├── 三芝區.json
    │   ├── 三重區.json
    │   ├── 中和區.json
    │   ├── 五股區.json
    │   ├── 八里區.json
    │   ├── 土城區.json
    │   ├── 坪林區.json
    │   ├── 平溪區.json
    │   ├── 新店區.json
    │   ├── 新莊區.json
    │   ├── 板橋區.json
    │   ├── 林口區.json
    │   ├── 樹林區.json
    │   ├── 永和區.json
    │   ├── 汐止區.json
    │   ├── 泰山區.json
    │   ├── 淡水區.json
    │   ├── 深坑區.json
    │   ├── 烏來區.json
    │   ├── 瑞芳區.json
    │   ├── 石碇區.json
    │   ├── 石門區.json
    │   ├── 萬里區.json
    │   ├── 蘆洲區.json
    │   ├── 貢寮區.json
    │   ├── 金山區.json
    │   ├── 雙溪區.json
    │   └── 鶯歌區.json
    ├── 新竹市
    │   ├── 北區.json
    │   ├── 東區.json
    │   └── 香山區.json
    ├── 新竹縣
    │   ├── 五峰鄉.json
    │   ├── 北埔鄉.json
    │   ├── 寶山鄉.json
    │   ├── 尖石鄉.json
    │   ├── 峨眉鄉.json
    │   ├── 新埔鎮.json
    │   ├── 新豐鄉.json
    │   ├── 橫山鄉.json
    │   ├── 湖口鄉.json
    │   ├── 竹北市.json
    │   ├── 竹東鎮.json
    │   ├── 芎林鄉.json
    │   └── 關西鎮.json
    ├── 桃園市
    │   ├── 中壢區.json
    │   ├── 八德區.json
    │   ├── 大園區.json
    │   ├── 大溪區.json
    │   ├── 平鎮區.json
    │   ├── 復興區.json
    │   ├── 新屋區.json
    │   ├── 桃園區.json
    │   ├── 楊梅區.json
    │   ├── 蘆竹區.json
    │   ├── 觀音區.json
    │   ├── 龍潭區.json
    │   └── 龜山區.json
    ├── 澎湖縣
    │   ├── 七美鄉.json
    │   ├── 望安鄉.json
    │   ├── 湖西鄉.json
    │   ├── 白沙鄉.json
    │   ├── 西嶼鄉.json
    │   └── 馬公市.json
    ├── 臺中市
    │   ├── 中區.json
    │   ├── 北區.json
    │   ├── 南區.json
    │   ├── 東區.json
    │   ├── 西區.json
    │   ├── 北屯區.json
    │   ├── 南屯區.json
    │   ├── 后里區.json
    │   ├── 和平區.json
    │   ├── 外埔區.json
    │   ├── 大安區.json
    │   ├── 大甲區.json
    │   ├── 大肚區.json
    │   ├── 大里區.json
    │   ├── 大雅區.json
    │   ├── 太平區.json
    │   ├── 新社區.json
    │   ├── 東勢區.json
    │   ├── 梧棲區.json
    │   ├── 沙鹿區.json
    │   ├── 清水區.json
    │   ├── 潭子區.json
    │   ├── 烏日區.json
    │   ├── 石岡區.json
    │   ├── 神岡區.json
    │   ├── 西屯區.json
    │   ├── 豐原區.json
    │   ├── 霧峰區.json
    │   └── 龍井區.json
    ├── 臺北市
    │   ├── 中山區.json
    │   ├── 中正區.json
    │   ├── 信義區.json
    │   ├── 內湖區.json
    │   ├── 北投區.json
    │   ├── 南港區.json
    │   ├── 士林區.json
    │   ├── 大同區.json
    │   ├── 大安區.json
    │   ├── 文山區.json
    │   ├── 松山區.json
    │   └── 萬華區.json
    ├── 臺南市
    │   ├── 北區.json
    │   ├── 南區.json
    │   ├── 東區.json
    │   ├── 七股區.json
    │   ├── 下營區.json
    │   ├── 中西區.json
    │   ├── 仁德區.json
    │   ├── 佳里區.json
    │   ├── 六甲區.json
    │   ├── 北門區.json
    │   ├── 南化區.json
    │   ├── 善化區.json
    │   ├── 大內區.json
    │   ├── 學甲區.json
    │   ├── 安南區.json
    │   ├── 安定區.json
    │   ├── 安平區.json
    │   ├── 官田區.json
    │   ├── 將軍區.json
    │   ├── 山上區.json
    │   ├── 左鎮區.json
    │   ├── 後壁區.json
    │   ├── 新化區.json
    │   ├── 新市區.json
    │   ├── 新營區.json
    │   ├── 東山區.json
    │   ├── 柳營區.json
    │   ├── 楠西區.json
    │   ├── 歸仁區.json
    │   ├── 永康區.json
    │   ├── 玉井區.json
    │   ├── 白河區.json
    │   ├── 西港區.json
    │   ├── 關廟區.json
    │   ├── 鹽水區.json
    │   ├── 麻豆區.json
    │   └── 龍崎區.json
    ├── 臺東縣
    │   ├── 卑南鄉.json
    │   ├── 大武鄉.json
    │   ├── 延平鄉.json
    │   ├── 成功鎮.json
    │   ├── 東河鄉.json
    │   ├── 池上鄉.json
    │   ├── 海端鄉.json
    │   ├── 綠島鄉.json
    │   ├── 臺東市.json
    │   ├── 蘭嶼鄉.json
    │   ├── 達仁鄉.json
    │   ├── 金峰鄉.json
    │   ├── 長濱鄉.json
    │   ├── 關山鎮.json
    │   ├── 鹿野鄉.json
    │   └── 太麻里鄉.json
    ├── 花蓮縣
    │   ├── 光復鄉.json
    │   ├── 卓溪鄉.json
    │   ├── 吉安鄉.json
    │   ├── 壽豐鄉.json
    │   ├── 富里鄉.json
    │   ├── 新城鄉.json
    │   ├── 玉里鎮.json
    │   ├── 瑞穗鄉.json
    │   ├── 秀林鄉.json
    │   ├── 花蓮市.json
    │   ├── 萬榮鄉.json
    │   ├── 豐濱鄉.json
    │   └── 鳳林鎮.json
    ├── 苗栗縣
    │   ├── 三灣鄉.json
    │   ├── 三義鄉.json
    │   ├── 公館鄉.json
    │   ├── 卓蘭鎮.json
    │   ├── 南庄鄉.json
    │   ├── 大湖鄉.json
    │   ├── 後龍鎮.json
    │   ├── 泰安鄉.json
    │   ├── 獅潭鄉.json
    │   ├── 竹南鎮.json
    │   ├── 苑裡鎮.json
    │   ├── 苗栗市.json
    │   ├── 西湖鄉.json
    │   ├── 通霄鎮.json
    │   ├── 造橋鄉.json
    │   ├── 銅鑼鄉.json
    │   ├── 頭份市.json
    │   └── 頭屋鄉.json
    ├── 連江縣
    │   ├── 北竿鄉.json
    │   ├── 南竿鄉.json
    │   ├── 東引鄉.json
    │   └── 莒光鄉.json
    ├── 金門縣
    │   ├── 烈嶼鄉.json
    │   ├── 烏坵鄉.json
    │   ├── 金城鎮.json
    │   ├── 金寧鄉.json
    │   ├── 金沙鎮.json
    │   └── 金湖鎮.json
    ├── 雲林縣
    │   ├── 二崙鄉.json
    │   ├── 元長鄉.json
    │   ├── 北港鎮.json
    │   ├── 口湖鄉.json
    │   ├── 古坑鄉.json
    │   ├── 四湖鄉.json
    │   ├── 土庫鎮.json
    │   ├── 大埤鄉.json
    │   ├── 崙背鄉.json
    │   ├── 斗六市.json
    │   ├── 斗南鎮.json
    │   ├── 東勢鄉.json
    │   ├── 林內鄉.json
    │   ├── 水林鄉.json
    │   ├── 臺西鄉.json
    │   ├── 莿桐鄉.json
    │   ├── 虎尾鎮.json
    │   ├── 褒忠鄉.json
    │   ├── 西螺鎮.json
    │   └── 麥寮鄉.json
    ├── 高雄市
    │   ├── 三民區.json
    │   ├── 仁武區.json
    │   ├── 內門區.json
    │   ├── 六龜區.json
    │   ├── 前金區.json
    │   ├── 前鎮區.json
    │   ├── 大寮區.json
    │   ├── 大樹區.json
    │   ├── 大社區.json
    │   ├── 小港區.json
    │   ├── 岡山區.json
    │   ├── 左營區.json
    │   ├── 彌陀區.json
    │   ├── 新興區.json
    │   ├── 旗山區.json
    │   ├── 旗津區.json
    │   ├── 杉林區.json
    │   ├── 林園區.json
    │   ├── 桃源區.json
    │   ├── 梓官區.json
    │   ├── 楠梓區.json
    │   ├── 橋頭區.json
    │   ├── 永安區.json
    │   ├── 湖內區.json
    │   ├── 燕巢區.json
    │   ├── 田寮區.json
    │   ├── 甲仙區.json
    │   ├── 美濃區.json
    │   ├── 苓雅區.json
    │   ├── 茂林區.json
    │   ├── 茄萣區.json
    │   ├── 路竹區.json
    │   ├── 阿蓮區.json
    │   ├── 鳥松區.json
    │   ├── 鳳山區.json
    │   ├── 鹽埕區.json
    │   ├── 鼓山區.json
    │   └── 那瑪夏區.json
    ├── 南投縣.json
    ├── 嘉義市.json
    ├── 嘉義縣.json
    ├── 基隆市.json
    ├── 宜蘭縣.json
    ├── 屏東縣.json
    ├── 彰化縣.json
    ├── 新北市.json
    ├── 新竹市.json
    ├── 新竹縣.json
    ├── 桃園市.json
    ├── 澎湖縣.json
    ├── 臺中市.json
    ├── 臺北市.json
    ├── 臺南市.json
    ├── 臺東縣.json
    ├── 花蓮縣.json
    ├── 苗栗縣.json
    ├── 連江縣.json
    ├── 金門縣.json
    ├── 雲林縣.json
    └── 高雄市.json
```
## 資料授權
需註明資料來源為 [交通部中央氣象局](https://www.cwb.gov.tw/)。

> 根據 [使用規範](https://opendata.cwb.gov.tw/about/rules)，氣象資料依 [政府資料開放授權條款（Open Government Data License）](https://data.gov.tw/license) 進行公眾釋出，在使用時必須標註來源為 [交通部中央氣象局](https://www.cwb.gov.tw/)。