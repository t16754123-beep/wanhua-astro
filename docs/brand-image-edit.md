# 厂房图片品牌替换

工具：内置 image_gen，text-localization 模式。

最终图片：`public/upLoad/news/month_1506/wanhua-factory.jpg`。旧厂房图片 URL 也同步使用新版图片内容，首页使用新文件名避免缓存。

最终提示词：

> Edit this exact existing company building photo. Text-localization edit only. Preserve the entire photo composition, building, sky, parked cars, flag poles, texture, lighting, perspective and the right roof sign with red Chinese product text. In the large white rooftop sign on the LEFT, replace every old brand text 'SIRUI', '思蕊', and 'SIRUIFLOOR' with the new brand 'WANHUA 万华' in blue at the left and 'WANHUA FLOOR' in black on the right. The Chinese text must be exactly '万华', never 思蕊. In the dark green VERTICAL center sign, replace old company Chinese text 江苏思蕊 with exactly '常州市万华机房设备有限公司' in red arranged vertically, fitting the sign. Remove any other occurrence of SIRUI / 思蕊 in the photograph. Keep the photo photorealistic and close to original, no redesign or added elements. Output landscape ratio matching original 600x284.

修改仅为网站图片品牌替换，图片不作为企业实际厂房的证明。原图保留在用户指定参考网站及本地参考资料中；发布目录不保留旧品牌 Logo 和包含旧站页面的无效图片。
