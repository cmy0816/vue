-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 08 月 03 日 06:21
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `lechun`
--

-- --------------------------------------------------------

--
-- 表的结构 `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picSmall` varchar(200) COLLATE utf8_bin NOT NULL,
  `proTitle` varchar(200) COLLATE utf8_bin NOT NULL,
  `proSummary` varchar(200) COLLATE utf8_bin NOT NULL,
  `price` varchar(200) COLLATE utf8_bin NOT NULL,
  `productUnit` varchar(2000) COLLATE utf8_bin NOT NULL,
  `suggest` varchar(2000) COLLATE utf8_bin NOT NULL,
  `limitBuyCount` varchar(2000) COLLATE utf8_bin NOT NULL,
  `background` varchar(2000) COLLATE utf8_bin NOT NULL,
  `name` varchar(2000) COLLATE utf8_bin NOT NULL,
  `title` varchar(2000) COLLATE utf8_bin NOT NULL,
  `tag` varchar(2000) COLLATE utf8_bin NOT NULL,
  `src` varchar(200) COLLATE utf8_bin NOT NULL,
  `details` varchar(200) COLLATE utf8_bin NOT NULL,
  `nutrition` varchar(200) COLLATE utf8_bin NOT NULL,
  `betching` varchar(200) COLLATE utf8_bin NOT NULL,
  `root` enum('1','2','3') COLLATE utf8_bin NOT NULL,
  `stock` varchar(10) COLLATE utf8_bin NOT NULL DEFAULT '500',
  `state` enum('1','0') COLLATE utf8_bin NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `data`
--

INSERT INTO `data` (`id`, `picSmall`, `proTitle`, `proSummary`, `price`, `productUnit`, `suggest`, `limitBuyCount`, `background`, `name`, `title`, `tag`, `src`, `details`, `nutrition`, `betching`, `root`, `stock`, `state`) VALUES
(1, 'http://resource2.lechun.cc/proImgStorage/3211542581055767615_O.jpg', '纤体享瘦的 维他命炸弹', 'HPP超高压技术 · 锁住水果新鲜滋味', '1790', '盒', 'false', '1', 'http://resource1.lechun.cc/proImgStorage/3197221388467742340_O.jpg', '黄桃百香果三三三倍酸奶', '低脂肪鲜果铺底', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource1.lechun.cc/proImgStorage/3197221434890864099_O.jpg', '挑选优质水果，进行脱皮切丁，并采用HPP超高压技术对水果进行杀菌处理，超高压使得有害微生物无法生存，相比热加工可以大大减少风味的损失并保护水果的色泽，最大程度的保留了水果的原始口感和其营养成分。 并搭配着零脂肪的基料，总体热量每100克要小于80千卡呢～', 'http://resource2.lechun.cc/proImgStorage/3197219378760263977_O.jpg', '脱脂生牛乳（＞80%）、黄桃百香果果酱（添加量≥19%）、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(2, 'http://resource2.lechun.cc/proImgStorage/3197559187037236019_O.jpg', '紫色的花青素', '紫薯黑米 ·  健康粗粮的营养补给', '1790', '盒', 'false', '1', 'http://resource.lechun.cc/proImgStorage/3191408215534529521_O.jpg', '紫薯黑米三三三倍酸奶', '紫粉色的 饱腹粗粮', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource1.lechun.cc/proImgStorage/3191573042574337165_O.jpg', '作为国内第一家紫薯黑米风味的希腊酸奶，紫薯搭配着黑米，口感很丰富，每一口都非常紧实。新鲜的紫薯碾压成泥，加上经过了多道工序精心烘焙的紫薯粉，使其颜色、风味和营养价值都得到了最大的保留。紫色的花青素混合上醇厚的酸奶，创造出了时尚浪漫的紫粉色，给你满满的幸福感', 'http://resource1.lechun.cc/proImgStorage/3191408495227845245_O.jpg', '生牛乳（＞80%）、紫薯黑米椰子果味酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(3, 'http://resource2.lechun.cc/proImgStorage/3211542581055767615_O.jpg', '纤体享瘦的 维他命炸弹', 'HPP超高压技术 · 锁住水果新鲜滋味', '1790', '盒', 'false', '1', 'http://resource1.lechun.cc/proImgStorage/3197221388467742340_O.jpg', '黄桃百香果三三三倍酸奶', '低脂肪鲜果铺底', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource1.lechun.cc/proImgStorage/3197221434890864099_O.jpg', '挑选优质水果，进行脱皮切丁，并采用HPP超高压技术对水果进行杀菌处理，超高压使得有害微生物无法生存，相比热加工可以大大减少风味的损失并保护水果的色泽，最大程度的保留了水果的原始口感和其营养成分。 并搭配着零脂肪的基料，总体热量每100克要小于80千卡呢～', 'http://resource2.lechun.cc/proImgStorage/3197219378760263977_O.jpg', '脱脂生牛乳（＞80%）、黄桃百香果果酱（添加量≥19%）、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(4, 'http://resource2.lechun.cc/proImgStorage/3197559187037236019_O.jpg', '紫色的花青素', '紫薯黑米 ·  健康粗粮的营养补给', '1790', '盒', 'false', '1', 'http://resource.lechun.cc/proImgStorage/3191408215534529521_O.jpg', '紫薯黑米三三三倍酸奶', '紫粉色的 饱腹粗粮', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource1.lechun.cc/proImgStorage/3191573042574337165_O.jpg', '作为国内第一家紫薯黑米风味的希腊酸奶，紫薯搭配着黑米，口感很丰富，每一口都非常紧实。新鲜的紫薯碾压成泥，加上经过了多道工序精心烘焙的紫薯粉，使其颜色、风味和营养价值都得到了最大的保留。紫色的花青素混合上醇厚的酸奶，创造出了时尚浪漫的紫粉色，给你满满的幸福感', 'http://resource1.lechun.cc/proImgStorage/3191408495227845245_O.jpg', '生牛乳（＞80%）、紫薯黑米椰子果味酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(5, 'http://resource.lechun.cc/proImgStorage/3192666236740573904_O.jpg', '美丽要趁枣', '红枣枸杞 · 宁夏枸杞搭配吃得到的若羌红枣', '1590', '盒', 'false', '1', 'http://resource.lechun.cc/proImgStorage/3178714124791574845_O.jpg', '红枣枸杞三三三倍酸奶', '美丽要趁枣真实大枣肉', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2-6 ℃冷藏保存"}', 'http://resource.lechun.cc/proImgStorage/3178714186403588394_O.jpg', '红枣酸奶，是经典中的经典酸奶风味，乐纯一直在坚持寻找天然可以达成理想风味的原料。因此分别精选了原产地食材，以新疆楼兰红枣及宁夏枸杞作为原料添加，让每一口都可以吃到真实的红枣颗粒。红枣的甜糯，酸奶的醇厚，加上枸杞暖冬的感觉。一杯红枣枸杞酸奶让生活又健康又营养', 'http://resource1.lechun.cc/proImgStorage/3179163149079116681_O.jpg', '生牛乳（＞80%）、红枣枸杞果酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(6, 'http://resource.lechun.cc/proImgStorage/3165351918121642215_O.jpg', '百搭经典款', '原味 · 配什么都好吃的热卖Top1 ', '1500', '盒', 'false', '1', 'http://resource2.lechun.cc/proImgStorage/3146316697035152266_O.jpg', '原味三三三倍酸奶', '每一口都像在舔盖儿', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2-6 ℃冷藏保存"}', 'http://resource.lechun.cc/proImgStorage/3190127499062577832_O.jpg', '只用高品质生牛乳，加上三种乳酸菌，做成这一款经典的原味酸奶。搭配独立蜂蜜包，可以根据你的喜好自由添加。配蜂蜜，配麦片，配核桃，配牛油果……配什么都好吃。', 'http://resource.lechun.cc/proImgStorage/3164588308473869564_O.jpg', '生牛乳、 白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌 ', '1', '500', '1'),
(7, 'http://resource.lechun.cc/proImgStorage/3192666236740573904_O.jpg', '美丽要趁枣', '红枣枸杞 · 宁夏枸杞搭配吃得到的若羌红枣', '1590', '盒', 'false', '1', 'http://resource.lechun.cc/proImgStorage/3178714124791574845_O.jpg', '红枣枸杞三三三倍酸奶', '美丽要趁枣真实大枣肉', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2-6 ℃冷藏保存"}', 'http://resource.lechun.cc/proImgStorage/3178714186403588394_O.jpg', '红枣酸奶，是经典中的经典酸奶风味，乐纯一直在坚持寻找天然可以达成理想风味的原料。因此分别精选了原产地食材，以新疆楼兰红枣及宁夏枸杞作为原料添加，让每一口都可以吃到真实的红枣颗粒。红枣的甜糯，酸奶的醇厚，加上枸杞暖冬的感觉。一杯红枣枸杞酸奶让生活又健康又营养', 'http://resource1.lechun.cc/proImgStorage/3179163149079116681_O.jpg', '生牛乳（＞80%）、红枣枸杞果酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(8, 'http://resource.lechun.cc/proImgStorage/3165351918121642215_O.jpg', '百搭经典款', '原味 · 配什么都好吃的热卖Top1 ', '1500', '盒', 'false', '1', 'http://resource2.lechun.cc/proImgStorage/3146316697035152266_O.jpg', '原味三三三倍酸奶', '每一口都像在舔盖儿', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2-6 ℃冷藏保存"}', 'http://resource.lechun.cc/proImgStorage/3190127499062577832_O.jpg', '只用高品质生牛乳，加上三种乳酸菌，做成这一款经典的原味酸奶。搭配独立蜂蜜包，可以根据你的喜好自由添加。配蜂蜜，配麦片，配核桃，配牛油果……配什么都好吃。', 'http://resource.lechun.cc/proImgStorage/3164588308473869564_O.jpg', '生牛乳、 白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌 ', '1', '500', '1'),
(9, 'http://resource2.lechun.cc/proImgStorage/3165352257186294240_O.jpg', '专治不开心', '跳跳糖 · 蹦蹦跳跳，一口回到小时候', '1590', '盒', 'false', '1', 'http://resource.lechun.cc/proImgStorage/3150826757416979346_O.jpg', '跳跳原味三三三倍酸奶', '一盒活蹦乱跳的酸奶', '{"净含量":"135g/盒 跳跳糖4g","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource1.lechun.cc/proImgStorage/3150826716902037025_O.jpg', ' 还记得你最后一次吃跳跳糖是什么时候？即将为你带来全新创意吃法的，限量版跳跳糖酸奶，和100亿活菌一起，在你的嘴里霹雳啪啦的爆炸，每一口都能带你穿越回童年。在这之前，你应该从来没有想过，酸奶居然还能这样吃。', 'http://resource.lechun.cc/proImgStorage/3172939374809320403_O.jpg', '生牛乳、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(10, 'http://resource.lechun.cc/proImgStorage/3165352493340651846_O.jpg', '胜过飞去宇治', '抹茶 · 日本工艺抹茶粉，每口都像吃冰淇淋', '1590', '盒', 'false', '1', 'http://resource1.lechun.cc/proImgStorage/3146316171937165718_O.jpg', '抹茶三三三倍酸奶', '恬静清新', '{"净含量":"135g/盒 跳跳糖4g","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource1.lechun.cc/proImgStorage/3190127260909653438_O.jpg', '精选抹茶粉与三三三倍的滤乳清酸奶融合，抹茶的甘甜清香和元气酸奶的香浓醇厚相碰撞，就有了和抹茶冰淇淋一样好吃，而且还能越吃越轻的抹茶味乐纯。', 'http://resource1.lechun.cc/proImgStorage/3164588582080043560_O.jpg', '生牛乳、白砂糖、抹茶粉（添加量≥1%）、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(11, 'http://resource2.lechun.cc/proImgStorage/3193599046637776953_O.jpg', '没有先例可循的热卖爆款', '椰子玫瑰 · 云南重瓣玫瑰 + 天然椰子粉', '1590', '盒', 'false', '1', 'http://resource2.lechun.cc/proImgStorage/3146316591523293636_O.jpg', '椰子玫瑰三三三倍酸奶', '口味升级粉嫩少女心 ', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource.lechun.cc/proImgStorage/3190127160033574940_O.jpg', 'http://resource.lechun.cc/proImgStorage/3190127160033574940_O.jpg', 'http://resource.lechun.cc/proImgStorage/3180538107935527282_O.jpg', '生牛乳（＞80%）、椰子玫瑰果酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌。', '1', '500', '1'),
(12, 'http://resource.lechun.cc/proImgStorage/3165351216405808280_O.jpg', '米其林三星的味觉享受', '榛子香草 · 灵感来自美国甜点车轮泡芙', '1590', '盒', 'false', '1', 'http://resource2.lechun.cc/proImgStorage/3146316822057967073_O.jpg', '榛子香草三三三倍酸奶', '经典甜品', '{"净含量":"135g/盒","保质期":"21天","储存条件":"请于2－6°C冷藏保存"}', 'http://resource2.lechun.cc/proImgStorage/3190126289129192969_O.jpg', '取材于风靡全美的美国芝加哥华尔道夫酒店的Paris-Brest（车轮泡芙），我们用香浓的榛子酱和天然的香草粉做出了这一款令你停不下来的健康酸奶。', 'http://resource2.lechun.cc/proImgStorage/3164588647108734850_O.jpg', '生牛乳（>80%）、 榛子香草苹果果味酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌												', '1', '500', '1'),
(13, 'http://resource1.lechun.cc/proImgStorage/3165352409752943917_O.jpg', '一口远离焦虑', '', '1790', '盒', 'false', '0', 'http://resource1.lechun.cc/proImgStorage/3146316274268581089_O.jpg', '茉莉花茶三三三倍酸奶', '让你一口就远离城市喧嚣', '{"净含量":"135g/盒","保质期":"21天","储存条件":"2-6度低温存储"}', 'http://resource.lechun.cc/proImgStorage/3190126197957247625_O.jpg', '这款可以吃的花茶，选用了上等的茉莉花茶调制而成，它特有的芳香和茶味，应该能解救，正被困在来自环境、情绪、身体和精神等各种压力之中的你。用这个气定神闲的花茶酸奶犒劳一下自己。毕竟生活不止眼前的苟且，还有诗和远方。', 'http://resource1.lechun.cc/proImgStorage/3164589150066629346_O.jpg', '生牛乳、茉莉花茶柠檬果味酱（添加量≥10%）、白砂糖、保加利亚乳杆菌、嗜热链球菌、乳双歧杆菌', '1', '500', '1'),
(14, 'http://resource1.lechun.cc/proImgStorage/3165352154689540922_O.jpg', '酸奶的营养好伴侣', '小补给 · 天然食材膳食纤维，给你均衡营养', '1980', '盒', 'false', '0', 'http://resource1.lechun.cc/proImgStorage/3146316431631725649_O.jpg', '小补给复合谷物零食包', '一盒5包吃不停', '{"净含量":"135g/盒","保质期":"21天","储存条件":"2-6度低温存储"}', 'http://resource2.lechun.cc/proImgStorage/3146316417009179426_O.jpg', '椰片、坚果、燕麦、果干等天然原料，富含不饱和脂肪酸、膳食纤维和维生素C，让久坐办公室的你也能持续集中注意力，腰肢变细，小腹变平，哪怕加班熬夜，皮肤也能水水的。今天，你需要一点儿「小补给」。', 'http://resource2.lechun.cc/proImgStorage/3137984595335093154_O.jpg', '全麦脆粒（粳米、黑麦、淀粉、麦芽糊精、麦精、白砂糖、椰蓉（片）、植物油、全麦粉、磷脂、食用盐、甘油、柠檬酸、迷迭香提取物、维生素C）、原味核桃仁、蔓越橘干、甜味椰片、南瓜子仁', '1', '500', '1'),
(15, 'http://resource2.lechun.cc/proImgStorage/3210466056759430444_O.jpg', '等待三年的全新品类', '南瓜百香果 · 把超过100种香气一口吃掉', '1280', '盒', 'false', '0', 'http://resource2.lechun.cc/proImgStorage/3209317782382007198_O.jpg', '南瓜百香果蔬舒果昔', '创造性地加入新鲜红椒', '{"净含量":"135g/盒","保质期":"21天","储存条件":"2-6度低温存储"}', 'http://resource2.lechun.cc/proImgStorage/3209317782382007198_O.jpg', '当有100种芬芳的百香果，搭配粉糯甘甜的南瓜，创造性地加入香蕉、苹果和红椒，给你视觉、味觉双重的明艳热辣。精选5种优质蔬果，100%蔬果原浆，生牛乳与新鲜椰浆共同发酵，给你前所未有的细腻口感。  省去在家自制的繁琐步骤，将你从厨房解救出来，从今天起蔬舒果昔就是你的口袋Smoothie，给足100亿乳酸菌和蔬果摄入，为你增持轻盈感！', 'http://resource1.lechun.cc/proImgStorage/3209269110248909313_O.jpg', '生牛乳（≥80%）、白砂糖、南瓜浆（5%）、椰子浆、百香果浆（1.5%）、香蕉浆（1.5%）、苹果汁（1.5%）、红椒浆（0.5%）、鼠李糖乳杆菌、嗜热链球菌、保加利亚乳杆菌', '1', '500', '1'),
(16, 'http://resource.lechun.cc/proImgStorage/3210466154419584522_O.jpg', '解决饥渴的蔬舒果昔', '羽衣甘蓝芒果 · 一口喝到 蔬果世界的滋味', '1280', '盒', 'false', '0', 'http://resource2.lechun.cc/proImgStorage/3209317895497389276_O.jpg', '羽衣甘蓝芒果蔬舒果昔', '轻食新贵遇上热带风情', '{"净含量":"135g/盒","保质期":"21天","储存条件":"2-6度低温存储"}', 'http://resource2.lechun.cc/proImgStorage/3209731956543133413_O.jpg', '当轻食新贵羽衣甘蓝，遇上甜软多汁的芒果，再加入番茄、木瓜和胡萝卜，整体风味温柔，清新自然。精选5种优质蔬果，100%蔬果原浆，生牛乳与新鲜椰浆共同发酵，给你前所未有的细腻口感。', 'http://resource1.lechun.cc/proImgStorage/3209269468225661225_O.jpg', '生牛乳（≥80%）、白砂糖、芒果（6.5%）、椰子浆、羽衣甘蓝（2%）、发酵果蔬汁（1.5%）（胡萝卜（0.37%）、芒果（0.37%）、番茄（0.37%）、木瓜（0.37%）、白砂糖、食用葡萄糖、植物乳杆菌、副干酪乳杆菌、嗜酸乳杆菌）、鼠李糖乳杆菌、嗜热链球菌、保加利亚乳杆菌', '1', '500', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
