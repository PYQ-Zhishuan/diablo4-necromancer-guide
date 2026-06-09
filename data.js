const guideData = {
  versionNote: "资料基准：2026-06-09，按暗黑4第13赛季/赛季服/有资料片整理。若赛季中期补丁调整暗金掉落或技能数值，应优先更新 data.js。",
  sources: [
    {
      label: "Blizzard 官方赛季页",
      url: "https://diablo4.blizzard.com/en-us/season",
      note: "用于核对当前赛季系统和官方活动口径。"
    },
    {
      label: "Wowhead 死灵法师构筑索引",
      url: "https://www.wowhead.com/diablo-4/guide/classes/necromancer/builds",
      note: "用于交叉确认主流死灵终局构筑。"
    },
    {
      label: "Wowhead 目标刷装/Boss 掉落",
      url: "https://www.wowhead.com/diablo-4/guide/target-farming-uniques-bosses",
      note: "用于核对暗金与 Boss 目标刷取逻辑。"
    },
    {
      label: "Mobalytics 死灵流派榜",
      url: "https://mobalytics.gg/diablo-4/necromancer-builds-tier-list",
      note: "用于参考当前赛季流派强度和定位。"
    },
    {
      label: "Mobalytics Boss Loot Table",
      url: "https://mobalytics.gg/blog/diablo-4/diablo-4-boss-loot-tables/",
      note: "用于维护 Boss 掉落表和目标刷取入口。"
    }
  ],
  purposes: ["全部", "刷图", "Boss", "深坑", "过渡"],
  difficulties: ["全部", "低", "中", "高"],
  upgradeRoute: [
    {
      title: "补核心件",
      goal: "先让流派能正常运转。",
      actions: [
        "确定一个主流流派，不要同时追多套毕业装。",
        "优先刷必备暗金、关键威能和核心技能等级。",
        "非毕业词条也可先用，只要机制已经启动。"
      ]
    },
    {
      title: "换祖先高装等",
      goal: "把伤害底盘和生存拉起来。",
      actions: [
        "武器优先高装等，其次看主属性、暴击、易伤、压制或持续伤。",
        "防具先补护甲、生命、抗性，再追技能等级和冷却。",
        "首饰先保证关键威能和冷却/幸运一击/爆发词条。"
      ]
    },
    {
      title: "精造命中",
      goal: "把最重要的词条放大。",
      actions: [
        "优先精造武器、项链、手套和流派绑定暗金。",
        "命中核心技能等级、冷却、暴击/压制/持续伤后再继续深追。",
        "资源、移速和生存词条不足时先补舒适度。"
      ]
    },
    {
      title: "追毕业配置",
      goal: "按内容目标微调。",
      actions: [
        "Boss 配置追爆发窗口和单体乘区。",
        "深坑配置追生存、控制免疫、稳定输出。",
        "速刷配置追移速、聚怪、范围清屏和资源循环。"
      ]
    }
  ],
  builds: [
    {
      id: "blood-wave",
      name: "血浪 / 血系终局",
      rating: "S",
      purposes: ["刷图", "Boss", "深坑"],
      difficulty: "高",
      coreSkills: ["血浪", "血雾", "衰老", "收割/分解过渡", "亡骸卷须"],
      summary: "以血浪作为爆发和清场核心，依赖关键暗金与冷却循环。成型后范围伤害、Boss 爆发和高层推进都很强，但装备门槛较高。",
      gameplay: [
        "用衰老和亡骸卷须控场、聚怪、触发减冷却。",
        "围绕血浪爆发窗口输出，尽量让血浪命中密集目标或 Boss。",
        "血雾承担免控和保命，危险词缀或精英爆发前预留。",
        "通过血球、冷却缩减和幸运一击维持下一轮爆发。"
      ],
      gear: [
        { slot: "头盔", items: ["继承者之盔 / Harlequin Crest / 冷却传奇头"], note: "优先冷却、生命、护甲和技能等级。" },
        { slot: "胸甲", items: ["伪装帷幕 / Shroud of False Death", "防御传奇胸"], note: "高层优先生存；低层可偏输出。" },
        { slot: "手套", items: ["暴击/血系技能传奇手"], note: "追暴击、攻速、幸运一击或核心技能。" },
        { slot: "裤子", items: ["凯希米的遗产 / Kessime's Legacy", "血月马裤 / Blood Moon Breeches"], note: "血浪流优先 Kessime；压制血系可用血月。" },
        { slot: "武器", items: ["高装等双手镰刀/剑", "单手+盾过渡"], note: "优先武器装等、主属性、暴伤/压制/易伤。" },
        { slot: "首饰", items: ["放逐领主护符 / Banished Lord's Talisman", "星辰戒 / Ring of Starless Skies", "关键血系威能"], note: "爆发和资源压力大时首饰收益很高。" }
      ],
      affixes: [
        "武器：高装等、智力、暴击伤害、压制伤害、易伤伤害。",
        "手套/项链：血系技能等级、冷却缩减、暴击率、幸运一击。",
        "防具：最大生命、护甲、抗性、伤害减免、血雾或防御技能等级。",
        "首饰：冷却、暴击率、资源消耗降低、终极技能或血系相关加成。"
      ],
      upgrades: [
        "精造优先：血浪相关暗金 > 武器输出词条 > 项链冷却/技能等级 > 防具生命。",
        "宝石：武器按压制/暴击目标选择，防具先补生命，首饰补抗性缺口。",
        "威能：优先血浪增伤、血球/冷却循环、终极技能和防御减伤。"
      ],
      farming: [
        { type: "目标刷取", source: "折磨 Boss 掉落表", note: "Kessime's Legacy、Blood Moon Breeches、Banished Lord's Talisman、Starless Skies 按当前 Boss 表定点刷。" },
        { type: "顺手刷取", source: "地狱狂潮、低语、梦魇地下城", note: "刷祖先底材、威能、低保暗金和精造材料。" },
        { type: "高阶材料", source: "深坑、地狱潮、世界 Boss", note: "用于精造和重置命中。" }
      ],
      notes: "如果核心暗金没齐，先用血涌或召唤过渡更平滑。"
    },
    {
      id: "blood-surge",
      name: "血涌速刷",
      rating: "A",
      purposes: ["刷图", "过渡"],
      difficulty: "低",
      coreSkills: ["血涌", "亵渎", "衰老", "亡骸卷须", "血雾"],
      summary: "最适合折磨阶段快速起号和清图的血系流派。装备不必一次毕业，拿到几件血涌暗金后就能稳定推进。",
      gameplay: [
        "进怪堆后用亡骸卷须聚怪，血涌连续清屏。",
        "衰老降低威胁并帮助冷却循环。",
        "血雾用于穿越危险地面和解控。",
        "Boss 战依赖压制、血球和技能等级补足单体。"
      ],
      gear: [
        { slot: "手套", items: ["残酷之拥 / Cruor's Embrace"], note: "血涌质变件，优先目标刷。" },
        { slot: "项链", items: ["亡语者吊坠 / Deathspeaker's Pendant", "放逐领主护符"], note: "召唤联动或压制爆发路线二选一。" },
        { slot: "裤子", items: ["血月马裤 / Blood Moon Breeches"], note: "压制和诅咒收益明显。" },
        { slot: "胸甲", items: ["残割胸甲 / Mutilator Plate", "生命防御胸"], note: "没有暗金时用高生命传奇胸。" },
        { slot: "武器", items: ["高装等双手武器"], note: "刷图先看装等和压制，后期再追完美词条。" },
        { slot: "戒指", items: ["无星夜空之戒 / Ring of Starless Skies", "血系/资源威能戒"], note: "资源压力大时无星收益高。" }
      ],
      affixes: [
        "武器：高装等、智力、压制伤害、易伤、生命。",
        "手套：血涌等级、暴击率、攻速、幸运一击。",
        "防具：生命、护甲、抗性、伤害减免。",
        "首饰：资源消耗降低、冷却、暴击率、压制伤害。"
      ],
      upgrades: [
        "先刷 Cruor's Embrace 和 Deathspeaker's Pendant，再补 Blood Moon Breeches。",
        "精造优先血涌等级、压制伤害、资源消耗降低。",
        "高层卡生存时，先把防具生命和抗性补满。"
      ],
      farming: [
        { type: "目标刷取", source: "Varshan、Lord Zir、折磨 Boss 表", note: "血涌暗金常见于死灵目标掉落池，按最新 Boss 表定点刷。" },
        { type: "顺手刷取", source: "地狱狂潮鲜血少女、低语箱", note: "效率高，适合补暗金和祖先黄装底材。" },
        { type: "过渡材料", source: "梦魇地下城、深坑低层", note: "刷雕文经验、精造材料和威能底材。" }
      ],
      notes: "血涌很适合从折磨早期过渡到血浪、骨灵或召唤毕业流。"
    },
    {
      id: "bone-spirit",
      name: "骨灵爆发",
      rating: "S",
      purposes: ["Boss", "深坑"],
      difficulty: "高",
      coreSkills: ["骨灵", "骨矛/骨刺过渡", "亡骸卷须", "衰老", "血雾"],
      summary: "以骨灵单次爆发作为核心，适合 Boss 和高层精英处理。需要暴击、精魂、冷却和定位配合，操作与装备要求都高。",
      gameplay: [
        "先聚怪和上易伤，再用骨灵吃满增伤窗口。",
        "控制精魂，不要在爆发前把资源泄空。",
        "用血雾和位移规避危险，等待下一轮骨灵。",
        "Boss 战要围绕易伤、暴击和护符爆发叠层打窗口。"
      ],
      gear: [
        { slot: "胸甲", items: ["血匠胸甲 / Blood Artisan's Cuirass"], note: "骨灵联动核心之一。" },
        { slot: "头盔", items: ["死亡面容 / Deathless Visage", "继承者之盔"], note: "骨系技能或全技能收益高。" },
        { slot: "项链", items: ["放逐领主护符 / Banished Lord's Talisman"], note: "爆发路线关键首饰。" },
        { slot: "盾牌", items: ["无盖之墙 / Lidless Wall"], note: "需要生存和风暴联动时可用。" },
        { slot: "武器", items: ["高装等双手剑/镰刀"], note: "优先暴击伤害、智力和易伤。" },
        { slot: "戒指", items: ["无星夜空之戒", "暴击/资源传奇戒"], note: "资源循环稳定后再追极限输出。" }
      ],
      affixes: [
        "武器：高装等、智力、暴击伤害、易伤伤害、核心/骨系伤害。",
        "手套：骨灵等级、暴击率、攻速、幸运一击。",
        "项链：冷却、精魂上限、被动技能等级、暴击率。",
        "防具：生命、护甲、抗性、伤害减免。"
      ],
      upgrades: [
        "精造优先骨灵等级、暴击率/暴击伤害、精魂和冷却。",
        "先做单体爆发，再补速刷手感。",
        "如果爆发不稳定，降低层数刷材料，不要硬追深坑。"
      ],
      farming: [
        { type: "目标刷取", source: "Grigoire、Lord Zir、Duriel/Andariel、折磨 Boss 表", note: "Blood Artisan's Cuirass、Deathless Visage、Banished Lord's Talisman、Lidless Wall 按表刷。" },
        { type: "顺手刷取", source: "深坑、梦魇地下城", note: "刷精造材料和雕文经验，顺便找高装等武器。" },
        { type: "补底材", source: "地狱狂潮、低语", note: "快速补手套、项链、戒指传奇底材。" }
      ],
      notes: "不建议装备很散时硬转；先用血涌或召唤刷到关键件更舒服。"
    },
    {
      id: "minion",
      name: "召唤 / 仆从",
      rating: "A",
      purposes: ["刷图", "Boss", "过渡"],
      difficulty: "中",
      coreSkills: ["骷髅战士", "骷髅法师", "魔像", "亡者大军", "衰老"],
      summary: "依靠骷髅、魔像和仆从乘区稳定输出。手感比爆发流轻松，适合长时间刷装和折磨阶段成型。",
      gameplay: [
        "保持仆从存活和增益，优先用诅咒覆盖精英与 Boss。",
        "亡骸卷须聚怪后让仆从集中输出。",
        "亡者大军或魔像主动技能用于爆发窗口。",
        "高层要优先处理生存和仆从抗压。"
      ],
      gear: [
        { slot: "戒指", items: ["孟德恩之戒 / Ring of Mendeln"], note: "仆从爆发和单体输出核心。" },
        { slot: "武器", items: ["摩塔克鲁斯 / The Mortacrux", "高装等传奇武器"], note: "召唤联动或高装等输出路线。" },
        { slot: "项链", items: ["仆从被动等级项链", "Great Feast / Reanimation 威能"], note: "项链是重要乘区槽位。" },
        { slot: "手套", items: ["仆从攻速/暴击传奇手"], note: "优先攻速、暴击、幸运一击。" },
        { slot: "胸甲", items: ["伪装帷幕", "生命防御胸"], note: "仆从流也需要本体生存。" },
        { slot: "戒指2", items: ["无星夜空之戒", "资源/仆从威能戒"], note: "按资源压力和威能位置调整。" }
      ],
      affixes: [
        "武器：高装等、智力、仆从伤害、暴击伤害、易伤。",
        "手套/戒指：暴击率、攻速、幸运一击、仆从攻速。",
        "项链：仆从被动等级、冷却、移速或资源。",
        "防具：生命、护甲、抗性、伤害减免。"
      ],
      upgrades: [
        "先拿 Ring of Mendeln，再补仆从威能和项链被动等级。",
        "精造优先仆从核心暗金、项链被动、武器高价值输出词条。",
        "速刷时可牺牲部分防御换移速；高层则反过来。"
      ],
      farming: [
        { type: "目标刷取", source: "Beast in the Ice、Varshan、折磨 Boss 表", note: "Ring of Mendeln、Mortacrux 和仆从相关暗金按当前 Boss 表定点刷。" },
        { type: "顺手刷取", source: "地狱狂潮、低语、军团事件", note: "召唤流清杂稳定，适合批量刷底材。" },
        { type: "高阶优化", source: "深坑", note: "用稳定层数刷精造材料，逐步提高输出阈值。" }
      ],
      notes: "如果你不想频繁换技能和卡爆发窗口，召唤是最稳的长期刷装选择。"
    },
    {
      id: "shadow-blight",
      name: "暗影 / 枯萎",
      rating: "A",
      purposes: ["刷图", "深坑"],
      difficulty: "中",
      coreSkills: ["枯萎", "邪爆", "血雾", "亡骸卷须", "衰老"],
      summary: "通过暗影持续伤、枯萎和尸体技能堆叠范围伤害。清图稳定，适合喜欢持续压制和地面伤害的玩家。",
      gameplay: [
        "用枯萎和诅咒建立暗影伤害区域。",
        "亡骸卷须聚怪后叠加邪爆和持续伤害。",
        "血雾可兼顾位移、免控和暗影联动。",
        "Boss 战要保持持续伤覆盖和易伤窗口。"
      ],
      gear: [
        { slot: "项链", items: ["乌木穿刺 / Ebonpiercer"], note: "枯萎流核心暗金。" },
        { slot: "武器", items: ["黑河 / Black River", "高装等传奇武器"], note: "尸体消耗和暗影伤联动。" },
        { slot: "手套", items: ["下方咆哮 / Howl from Below"], note: "尸爆手感和范围收益。" },
        { slot: "戒指", items: ["艾克斯法尔的腐蚀玺戒 / X'Fal's Corroded Signet"], note: "持续伤触发爆发。" },
        { slot: "靴子", items: ["空墓护胫 / Greaves of the Empty Tomb"], note: "暗影路径和机动性。" },
        { slot: "胸甲", items: ["防御传奇胸", "伪装帷幕"], note: "深坑优先生存。" }
      ],
      affixes: [
        "武器：持续伤害、智力、暗影伤、易伤、幸运一击。",
        "手套/戒指：暴击率、幸运一击、攻速、持续伤。",
        "项链：暗影被动等级、冷却、资源、移速。",
        "防具：生命、护甲、抗性、伤害减免。"
      ],
      upgrades: [
        "先刷 Ebonpiercer 或 Black River，至少拿到一个核心联动件。",
        "精造优先暗影被动等级、持续伤、幸运一击和冷却。",
        "速刷缺机动时优先靴子；深坑缺生存时优先胸裤。"
      ],
      farming: [
        { type: "目标刷取", source: "Lord Zir、Varshan、Duriel/Andariel、折磨 Boss 表", note: "Black River、Howl from Below、X'Fal、Ebonpiercer 按表刷。" },
        { type: "顺手刷取", source: "梦魇地下城、地狱狂潮", note: "刷暗影威能、雕文和高装等武器。" },
        { type: "材料", source: "深坑", note: "持续伤流适合稳定刷可控层数精造。" }
      ],
      notes: "暗影流不一定是最高爆发，但清图节奏稳定，装备替代空间也大。"
    },
    {
      id: "sever",
      name: "割裂 / 痛割过渡",
      rating: "B",
      purposes: ["刷图", "过渡"],
      difficulty: "低",
      coreSkills: ["割裂", "枯萎", "邪爆", "衰老", "亡骸卷须"],
      summary: "暗影系过渡流，装备要求低，适合在还没有枯萎或血系核心暗金前刷底材。毕业上限低于主流 S/A 流派。",
      gameplay: [
        "用割裂穿过怪群制造暗影伤害。",
        "亡骸卷须把怪拉到路径和尸爆范围内。",
        "衰老保持减伤与冷却循环。",
        "拿到核心暗金后可平滑转暗影枯萎或血系。"
      ],
      gear: [
        { slot: "靴子", items: ["空墓护胫 / Greaves of the Empty Tomb"], note: "割裂暗影路径联动。" },
        { slot: "手套", items: ["下方咆哮 / Howl from Below", "传奇输出手"], note: "提高尸爆清图和过渡手感。" },
        { slot: "戒指", items: ["X'Fal's Corroded Signet", "暗影威能戒"], note: "持续伤触发额外爆发。" },
        { slot: "武器", items: ["高装等单手/双手武器"], note: "过渡期先看装等和智力。" },
        { slot: "胸裤", items: ["高生命传奇防具"], note: "低成本补生存。" },
        { slot: "项链", items: ["暗影被动传奇项链"], note: "不用过早追毕业暗金。" }
      ],
      affixes: [
        "武器：高装等、智力、持续伤、暗影伤、易伤。",
        "手套：割裂等级、暴击率、幸运一击、攻速。",
        "防具：生命、护甲、抗性，优先把抗性缺口补齐。",
        "首饰：冷却、移速、资源、暗影被动等级。"
      ],
      upgrades: [
        "不要在 B 级过渡装上投入太多重置成本。",
        "精造到能舒服刷目标 Boss 即可，核心材料留给目标流派。",
        "拿到 Ebonpiercer、Black River 或血系核心件后考虑转型。"
      ],
      farming: [
        { type: "目标刷取", source: "Lord Zir、Varshan、折磨 Boss 表", note: "找 Greaves of the Empty Tomb、Howl from Below、X'Fal 等暗影件。" },
        { type: "顺手刷取", source: "地狱狂潮、低语、梦魇地下城", note: "刷威能、底材、雕文经验。" },
        { type: "转型储备", source: "所有折磨 Boss", note: "顺便囤血系、骨系和召唤核心暗金。" }
      ],
      notes: "这是实用过渡流，不建议作为最终毕业追求。"
    }
  ]
};
