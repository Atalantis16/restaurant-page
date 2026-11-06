/*
 * 站点内容数据（后台 admin.html 编辑此文件并提交上线）
 * 图片放在 assets/ 目录，这里填写相对路径；替换图片时在后台直接选择本地文件。
 */
var SITE_DATA = {
  brand: {
    badge: "粤菜 · 老字号 · 现点现做",
    name: "【店铺名称】",
    slogan: "【一句话招牌，例如：三十年匠心，一口地道老广味】",
    heroImage: "assets/hero.jpg"
  },
  promos: [
    {
      badge: "限时优惠",
      title: "【活动一标题，例如：到店消费满 200 减 30】",
      desc: "【活动说明，例如：全场菜品通用，节假日可用，不与其他优惠同享】",
      valid: "有效期：【2026.11.01 — 2026.11.30】"
    },
    {
      badge: "会员专享",
      title: "【活动二标题，例如：新客扫码即送招牌甜品一份】",
      desc: "【活动说明，例如：每桌限领一份，数量有限送完即止】",
      valid: "有效期：【长期有效】"
    }
  ],
  dishes: [
    { name: "蜜汁叉烧",   desc: "外焦里嫩 甜香入味", price: "48", unit: "例", image: "assets/dish-char-siu.jpg" },
    { name: "腊味煲仔饭", desc: "金黄锅巴 腊味飘香", price: "32", unit: "煲", image: "assets/dish-claypot-rice.jpg" },
    { name: "清蒸石斑鱼", desc: "鲜嫩清甜 原汁原味", price: "时价", unit: "",   image: "assets/dish-steamed-fish.jpg" },
    { name: "杨枝甘露",   desc: "芒果西柚 香浓顺滑", price: "22", unit: "碗", image: "assets/dish-mango-pomelo.jpg" }
  ],
  store: {
    address: "【中山市 XX 区 XX 路 XX 号】",
    phone: "13800000000",
    hours: "【10:00 — 22:00】"
  },
  footer: "© 【店铺名称】 · 本页内容仅供宣传展示，活动以店内实际为准"
};
