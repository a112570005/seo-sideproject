// 六六的鞋子專賣店 - 產品資料庫
const products = [
  {
    id: 1,
    name: "經典極簡純白小白鞋",
    category: "casual",
    price: 2480,
    originalPrice: 3200,
    image: "assets/product_1.png",
    description: "這款經典小白鞋採用頂級全粒面牛皮製成，設計簡約流暢。配有高彈性透氣鞋墊與耐磨防滑橡膠大底，無論是休閒出遊還是日常通勤，都能為您提供極致的舒適體驗與百搭風格。六六鞋店熱銷排行榜冠軍之作！",
    details: [
      "鞋面材質：義大利進口頂級牛皮",
      "內裡材質：親膚超細纖維，吸濕排汗",
      "鞋墊：高密度專利回彈記憶海綿鞋墊",
      "鞋底：輕量化防滑耐磨橡膠大底",
      "產地：手工精心縫製",
      "清潔建議：建議使用專業皮革清潔劑擦拭"
    ],
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"]
  },
  {
    id: 2,
    name: "復古拼色科技慢跑鞋",
    category: "casual",
    price: 2880,
    originalPrice: 3600,
    image: "assets/product_2.png",
    description: "結合 90 年代經典復古輪廓與現代緩震科技，鞋面採用高級麂皮與高科技透氣網布拼接，色彩層次豐富。搭載雙密度 EVA 中底，提供出色的足弓支撐與吸震效果，是街頭穿搭與輕量運動的完美選擇。",
    details: [
      "鞋面材質：高級防潑水麂皮 + 科技耐磨透氣網布",
      "內裡材質：高包覆性加厚泡棉網布",
      "鞋墊：人體工學足弓支撐減壓鞋墊",
      "鞋底：雙密度高彈 EVA 避震中底 + 碳素橡膠抓地外底",
      "版型：此款版型正常，建議選購平時尺寸"
    ],
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"]
  },
  {
    id: 3,
    name: "極致輕量針織透氣懶人鞋",
    category: "casual",
    price: 1880,
    originalPrice: 2400,
    image: "assets/product_3.png",
    description: "採用一體成型 3D 飛織鞋面，如同第二層皮膚般貼合雙腳。超輕量中底讓您行走時幾乎感受不到重量，一腳蹬的一秒穿脫設計特別適合忙碌的都市生活，透氣不悶熱，是炎炎夏日的最佳良伴。",
    details: [
      "鞋面材質：3D 一體成型高彈力飛織科技網面",
      "內裡材質：無內裡設計，極致輕薄透氣",
      "鞋墊：竹炭纖維防霉防臭鞋墊",
      "鞋底：超輕量彈力發泡 EVA 大底",
      "重量：單隻鞋僅重約 150g",
      "特色：可裝入洗衣袋低速機洗"
    ],
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"]
  },
  {
    id: 4,
    name: "潮流厚底老爹鞋",
    category: "casual",
    price: 3280,
    originalPrice: 4200,
    image: "assets/product_4.png",
    description: "時髦街頭風格的核心！獨特的多層次波浪厚底設計，隱形增高 5 公分，修飾腿部線條效果極佳。鞋面以反光材質拼接科技面料，在夜晚散發獨特光芒。內部空間寬敞，厚腳背亦能舒適穿著。",
    details: [
      "鞋面材質：合成皮革 + 科技反光面料 + 雙層網眼布",
      "內裡材質：網布內裡，鞋領口加厚防磨腳",
      "鞋墊：減壓增高氣墊鞋墊",
      "鞋底：5cm 隱形增高防滑橡膠複合大底",
      "穿搭推薦：非常適合搭配工裝褲或運動寬褲"
    ],
    sizes: ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42"]
  },
  {
    id: 5,
    name: "頂級手工雕花牛津皮鞋",
    category: "formal",
    price: 4800,
    originalPrice: 6500,
    image: "assets/product_5.png",
    description: "紳士的極致展現。由資深鞋匠歷經 66 道工序手工打磨與縫製，精緻的布洛克（Brogue）雕花工藝展現無與倫比的高貴質感。選用進口植鞣小牛皮，越穿越貼合腳型，散發淡淡的經典皮革香氣。",
    details: [
      "鞋面材質：頂級進口義大利植鞣小牛皮（經拋光打蠟處理）",
      "內裡材質：全真皮豚皮內裡，親膚透氣",
      "鞋墊：全真皮吸震乳膠鞋墊",
      "鞋底：高級防滑耐磨橡膠複合半皮底",
      "工藝：手工麥凱（Blake）縫製法",
      "配件：附贈精美防塵袋與專屬鞋拔"
    ],
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"]
  },
  {
    id: 6,
    name: "優雅漆皮德比正式鞋",
    category: "formal",
    price: 4200,
    originalPrice: 5500,
    image: "assets/product_6.png",
    description: "閃耀正式場合的焦點。鏡面般的黑亮漆皮鞋面，質地細緻防水防污。德比鞋的開放式襟片設計，能提供極佳的腳背容納度與便利調整性，是婚禮、商務論壇及晚宴等正式場合的最佳拍檔。",
    details: [
      "鞋面材質：特級防裂鏡面防水漆皮",
      "內裡材質：透氣真皮豚皮",
      "鞋墊：足弓減壓真皮鞋墊",
      "鞋底：輕量防滑橡膠靜音大底",
      "保養：使用乾淨柔軟濕布擦拭即可，不需上鞋油"
    ],
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"]
  },
  {
    id: 7,
    name: "英倫復古馬銜扣樂福鞋",
    category: "formal",
    price: 3680,
    originalPrice: 4800,
    image: "assets/product_7.png",
    description: "將英倫學院風與現代時尚完美融合。精緻耀眼的金色馬銜扣點綴於亮澤的荔枝紋皮革鞋面，展現低調的奢華。踩腳兩穿設計，可作為時尚單鞋或休閒穆勒鞋穿著，隨心轉換您的穿搭風格。",
    details: [
      "鞋面材質：高級定製荔枝紋牛皮",
      "內裡材質：超軟真皮內裡",
      "鞋墊：加厚乳膠軟墊，軟綿舒適",
      "鞋底：防滑超耐磨美耐底",
      "特色：後跟可踩折軟皮設計，一鞋兩穿"
    ],
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"]
  },
  {
    id: 8,
    name: "奢華金屬跟亮面高跟鞋",
    category: "formal",
    price: 3980,
    originalPrice: 5200,
    image: "assets/product_8.png",
    description: "優雅女性的自信之源。這款尖頭高跟鞋採用流線型鞋身設計，將足部線條延伸至極致。8 公分特製輕量化電鍍金屬鞋跟，美觀且結構極其穩固。內置減壓足弓墊，打破高跟鞋難以久站的魔咒。",
    details: [
      "鞋面材質：細緻珠光羊皮 / 時尚絨面面料",
      "內裡材質：細膩親膚真皮",
      "鞋墊：3D 立體足弓支撐減壓厚鞋墊",
      "鞋底：靜音防滑耐磨大底",
      "跟高：8cm 幾何藝術金屬細跟"
    ],
    sizes: ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39", "EU 40"]
  },
  {
    id: 9,
    name: "極簡 925 純銀水波紋腳鏈",
    category: "jewelry",
    price: 980,
    originalPrice: 1500,
    image: "assets/product_9.png",
    description: "專為襯托鞋款美感而設計的細節飾品。選用抗過敏 925 標準純銀製作，經典的水波紋鏈條在陽光下折射出如水面波光粼粼的耀眼光芒。配有延長鏈，可自由調節鬆緊，完美裝飾腳踝。",
    details: [
      "材質：國際標準 925 標準純銀（不含鎳，防過敏）",
      "尺寸：長度約 21cm + 5cm 延長鏈",
      "重量：約 2.8g",
      "包裝：附品牌專屬防潮首飾袋及拭銀布",
      "保養：避免配戴洗澡，不配戴時請密封保存"
    ],
    sizes: ["F (單一尺寸，具備調節鏈)"]
  },
  {
    id: 10,
    name: "潮流繽紛鞋扣配件組 (6入)",
    category: "jewelry",
    price: 390,
    originalPrice: 600,
    image: "assets/product_10.png",
    description: "為您的鞋款注入俏皮的個人風格！一組六款設計獨特的立體鞋扣，包含可愛食物、潮流球鞋、和平標誌等元素。採用安全無毒的環保 PVC 軟膠材質，扣合穩固不易掉落，適用於洞洞鞋、運動鞋帶扣等。",
    details: [
      "材質：環保優質 PVC 軟膠 + 塑料扣腳",
      "數量：一組 6 枚不同圖樣",
      "尺寸：每枚約 2-3cm",
      "適用：各品牌洞洞鞋或特製織帶鞋面",
      "注意：本產品非玩具，請避免幼童吞食"
    ],
    sizes: ["F (單一尺寸)"]
  },
  {
    id: 11,
    name: "復古黃銅隨身鞋拔鑰匙圈",
    category: "jewelry",
    price: 580,
    originalPrice: 900,
    image: "assets/product_11.png",
    description: "實用與美學的精緻融合。精選實心黃銅打造，隨著使用時間推移，會產生迷人的氧化包漿，展現復古韻味。小巧曲線符合人體工學，隨身攜帶，讓您在任何地方脫鞋、穿鞋都能保持從容優雅。",
    details: [
      "材質：100% 實心優質黃銅 + 瘋馬皮掛件",
      "尺寸：總長約 10.5cm（鞋拔主體約 7.5cm）",
      "重量：約 45g",
      "特點：兼具鑰匙圈功能，隨身便攜",
      "包裝：復古牛皮紙盒包裝，送禮首選"
    ],
    sizes: ["F (單一尺寸)"]
  },
  {
    id: 12,
    name: "專業強效奈米防潑水防污噴霧",
    category: "accessories",
    price: 450,
    originalPrice: 650,
    image: "assets/product_12.png",
    description: "愛鞋人士的必備防護罩！採用新一代奈米成膜技術，噴灑後在鞋面上形成隱形的超疏水分子網。能有效防雨、防泥、防油污，且完全不影響原鞋材的透氣性。一瓶可噴灑約 10-15 雙鞋，防護時效長達 30 天。",
    details: [
      "容量：250ml",
      "成分：奈米防水氟素、溶劑、推進氣體",
      "適用鞋材：麂皮、磨砂皮、棉布、網布、真皮等",
      "使用方法：距離鞋面 20cm 處均勻噴灑，靜置 15-20 分鐘完全乾燥即可",
      "產地：台灣研發製造"
    ],
    sizes: ["250ml (單一規格)"]
  },
  {
    id: 13,
    name: "高級打蠟圓形棉質鞋帶組 (三色)",
    category: "accessories",
    price: 290,
    originalPrice: 400,
    image: "assets/product_13.png",
    description: "為您的皮鞋或靴子換上嶄新表情。選用 100% 天然純棉編織，表面經環保打蠟拋光處理，不易起毛球、不易鬆脫，更具有防潑水效果。一組內含經典黑、深咖啡、典雅燕麥三色，滿足您不同鞋款的穿搭需求。",
    details: [
      "材質：100% 精梳純棉（外層打蠟塗層）",
      "長度：80cm（適合 4-5 穿線孔皮鞋）",
      "規格：直徑 3mm 圓形打蠟鞋帶",
      "包裝：環保紙卡包裝，一組 3 雙入（三色各一）",
      "金屬頭：加裝精緻復古銅製金屬鞋帶頭，質感升級"
    ],
    sizes: ["80cm (皮鞋適用)", "120cm (休閒鞋適用)"]
  },
  {
    id: 14,
    name: "3D 人體工學高彈記憶鞋墊",
    category: "accessories",
    price: 350,
    originalPrice: 500,
    image: "assets/product_14.png",
    description: "讓任何一雙鞋都變成雲端慢跑鞋！採用三維人體工學曲線設計，後跟杯加強避震氣墊，足弓部分隆起提供完美支撐。前掌大面積分佈按摩微粒，吸汗透氣的面料可預防腳臭，特別適合長時間站立或行走的上班族。",
    details: [
      "材質：高回彈記憶海綿 + 減壓矽膠氣墊 + 萊卡透氣排汗布",
      "厚度：前掌厚約 0.4cm，後跟厚約 1.2cm",
      "裁剪指引：背面印有尺寸裁剪線，可依個人舊鞋墊形狀自由修剪",
      "特點：舒緩足底筋膜壓力，極致減震"
    ],
    sizes: ["S碼 (適合 EU 35-40)", "L碼 (適合 EU 41-46)"]
  },
  {
    id: 15,
    name: "品牌限定簡約厚磅帆布袋",
    category: "others",
    price: 390,
    originalPrice: 600,
    image: "assets/product_15.png",
    description: "「六六的鞋子專賣店」限量版帆布購物袋。採用 12 盎司厚磅天然棉質帆布製成，質地厚實耐重。大容量空間可輕鬆放入鞋盒、筆記型電腦或日常雜物。內設拉鍊小暗袋，可放置鑰匙或手機，極具實用性。",
    details: [
      "材質：12 盎司 100% 天然純棉厚帆布",
      "尺寸：高 38cm × 寬 35cm × 底寬 8cm，提帶高 25cm",
      "設計：正面手繪鞋款印花，背面品牌草寫 Logo",
      "收納：內部配有一個拉鍊小口袋與一個水壺插袋",
      "洗滌：建議局部手洗以保持印花完好"
    ],
    sizes: ["F (單一尺寸)"]
  },
  {
    id: 16,
    name: "天然紅雪松木彈簧鞋撐 (一雙)",
    category: "others",
    price: 880,
    originalPrice: 1200,
    image: "assets/product_16.png",
    description: "皮鞋長壽的秘密武器。選用北美天然紅雪松木（Red Cedar）製作，不經漆料處理，保留木材天然氣孔。能完美吸收鞋內汗水與濕氣，並散發天然的森林芬多精香氣，有效防霉除臭。雙向彈簧設計能撐托鞋身防皺。",
    details: [
      "材質：100% 北美天然紅雪松木 + 不鏽鋼雙向回彈彈簧",
      "功能：定型防皺、吸收濕氣、天然除臭、防霉防蟲",
      "使用時機：脫下鞋後立即放入鞋撐效果最佳",
      "包裝：精美牛皮紙盒裝，一組一雙入"
    ],
    sizes: ["EU 35-36", "EU 37-38", "EU 39-40", "EU 41-42", "EU 43-44", "EU 45-46"]
  }
];

// Helper to get products by category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

// Helper to get product by ID
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

// Export for common use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, getProductsByCategory, getProductById };
}
