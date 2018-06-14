// 本地数据
var local_database = [{
        title: "一行白鹭上青天",
        content: "春花秋月何时了，往事知多少，小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改，问君能有几多愁，恰似一江春水向东流。",
        imgSrc: "/images/post/crab.png",
        reading: "112",
        collection: "96",
        date: "Sep 18 2016",
        avatar: "/images/avatar/1.png",
        postId:0,
    },
    {
        title: "静夜思",
        content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        imgSrc: "/images/post/bl.png",
        reading: "112",
        collection: "96",
        date: "NOV 23 2016",
        avatar: "/images/avatar/2.png",
        postId: 1,
    },
    {
        title: "雨霖铃",
        content: "寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别， 更那堪， 冷落清秋节！ 今宵酒醒何处？ 杨柳岸， 晓风残月。 此去经年， 应是良辰好景虚设。 便纵有千种风情， 更与何人说？ ",
        imgSrc: "/images/post/vr.png",
        reading: "5",
        collection: "6",
        date: "NOV 23 2018",
        avatar: "/images/avatar/3.png",
        postId: 2,
    },
    {
        title: "明月几时有",
        content: "辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。 明月几时有？ 把酒问青天。 不知天上宫阙， 今夕是何年。 我欲乘风归去， 又恐琼楼玉宇， 高处不胜寒。 起舞弄清影， 何似在人间？转朱阁， 低绮户， 照无眠。 不应有恨， 何事长向别时圆？ 人有悲欢离合， 月有阴晴圆缺， 此事古难全。 但愿人长久， 千里共婵娟 ",
        imgSrc: "/images/post/sls.jpg",
        reading: "5",
        collection: "6",
        date: "NOV 12 2018",
        avatar: "/images/avatar/3.png",
        postId: 3,
    },
    {
        title: "陋室铭",
        content: "山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？",
        imgSrc: "/images/post/cat.png",
        reading: "5",
        collection: "6",
        date: "NOV 11 2018",
        avatar: "/images/avatar/3.png",
        postId: 4,
    },
]

// 对脚本文件定义出口,使得其他脚本文件可以访问 本脚本文件。使用postList属性变量名访问，可以使用其他属性名进行定义。
module.exports = {
    postList: local_database
}