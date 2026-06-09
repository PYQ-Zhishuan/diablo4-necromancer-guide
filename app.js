(function () {
  const state = {
    selectedBuildId: guideData.builds[0].id,
    purpose: "全部",
    difficulty: "全部",
    query: "",
    gearQuery: ""
  };

  const els = {
    summaryGrid: document.getElementById("summaryGrid"),
    purposeFilters: document.getElementById("purposeFilters"),
    difficultyFilters: document.getElementById("difficultyFilters"),
    searchInput: document.getElementById("searchInput"),
    resetFilters: document.getElementById("resetFilters"),
    buildList: document.getElementById("buildList"),
    buildDetail: document.getElementById("buildDetail"),
    upgradeRoute: document.getElementById("upgradeRoute"),
    gearSearchInput: document.getElementById("gearSearchInput"),
    gearTable: document.getElementById("gearTable"),
    sourceList: document.getElementById("sourceList")
  };

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function matchesQuery(build, query) {
    if (!query) return true;
    const haystack = [
      build.name,
      build.rating,
      build.difficulty,
      build.summary,
      build.coreSkills.join(" "),
      build.purposes.join(" "),
      build.gear.map((slot) => `${slot.slot} ${slot.items.join(" ")} ${slot.note}`).join(" "),
      build.affixes.join(" "),
      build.farming.map((farm) => `${farm.type} ${farm.source} ${farm.note}`).join(" ")
    ].join(" ");
    return normalize(haystack).includes(normalize(query));
  }

  function filteredBuilds() {
    return guideData.builds.filter((build) => {
      const purposeOk = state.purpose === "全部" || build.purposes.includes(state.purpose);
      const difficultyOk = state.difficulty === "全部" || build.difficulty === state.difficulty;
      return purposeOk && difficultyOk && matchesQuery(build, state.query);
    });
  }

  function renderSummary() {
    const uniqueItems = new Set();
    guideData.builds.forEach((build) => {
      build.gear.forEach((slot) => slot.items.forEach((item) => uniqueItems.add(item)));
    });

    const metrics = [
      { value: guideData.builds.length, label: "主流流派" },
      { value: uniqueItems.size, label: "装备/威能条目" },
      { value: guideData.purposes.length - 1, label: "用途筛选" },
      { value: "4", label: "折磨升级阶段" }
    ];

    els.summaryGrid.innerHTML = metrics.map((metric) => `
      <div class="metric">
        <strong>${metric.value}</strong>
        <span>${metric.label}</span>
      </div>
    `).join("");
  }

  function renderFilters() {
    els.purposeFilters.innerHTML = guideData.purposes.map((purpose) => `
      <button class="chip" type="button" aria-pressed="${purpose === state.purpose}" data-filter-type="purpose" data-value="${purpose}">
        ${purpose}
      </button>
    `).join("");

    els.difficultyFilters.innerHTML = guideData.difficulties.map((difficulty) => `
      <button class="chip" type="button" aria-pressed="${difficulty === state.difficulty}" data-filter-type="difficulty" data-value="${difficulty}">
        ${difficulty}
      </button>
    `).join("");
  }

  function renderBuildList() {
    const builds = filteredBuilds();
    if (!builds.some((build) => build.id === state.selectedBuildId) && builds[0]) {
      state.selectedBuildId = builds[0].id;
    }

    if (!builds.length) {
      els.buildList.innerHTML = `<p class="empty">没有匹配的流派。换个关键词或清除筛选。</p>`;
      els.buildDetail.innerHTML = `<p class="empty">没有可展示的流派详情。</p>`;
      return;
    }

    els.buildList.innerHTML = builds.map((build) => `
      <button class="build-tab" type="button" role="tab" aria-selected="${build.id === state.selectedBuildId}" data-build-id="${build.id}">
        <strong>${build.name}</strong>
        <span>${build.rating} 级 · ${build.difficulty}难度 · ${build.purposes.join(" / ")}</span>
      </button>
    `).join("");
  }

  function renderBuildDetail() {
    const build = guideData.builds.find((item) => item.id === state.selectedBuildId);
    if (!build) return;

    const slotHtml = build.gear.map((slot) => `
      <div class="slot">
        <b>${slot.slot}</b>
        <span>${slot.items.join(" / ")}<br><small>${slot.note}</small></span>
      </div>
    `).join("");

    const farmHtml = build.farming.map((farm) => `
      <div class="source-card">
        <strong>${farm.type}</strong>
        <p>${farm.source}</p>
        <small>${farm.note}</small>
      </div>
    `).join("");

    els.buildDetail.innerHTML = `
      <div class="detail-hero">
        <div class="detail-hero__top">
          <div>
            <p class="section-kicker">Necromancer Build</p>
            <h2>${build.name}</h2>
          </div>
          <span class="rating">${build.rating}</span>
        </div>
        <p>${build.summary}</p>
        <div class="tags">
          ${build.purposes.map((purpose) => `<span class="tag">${purpose}</span>`).join("")}
          <span class="tag">${build.difficulty}成型</span>
          ${build.coreSkills.map((skill) => `<span class="tag">${skill}</span>`).join("")}
        </div>
      </div>

      <div class="detail-grid">
        <section class="detail-card">
          <h3>打法循环</h3>
          <ul>${build.gameplay.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-card">
          <h3>词条优先级</h3>
          <ul>${build.affixes.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-card detail-card--wide">
          <h3>装备槽位</h3>
          <div class="slot-grid">${slotHtml}</div>
        </section>
        <section class="detail-card">
          <h3>强化路线</h3>
          <ul>${build.upgrades.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-card">
          <h3>备注</h3>
          <p>${build.notes}</p>
        </section>
        <section class="detail-card detail-card--wide">
          <h3>刷装地点</h3>
          <div class="source-grid">${farmHtml}</div>
        </section>
      </div>
    `;
  }

  function renderUpgradeRoute() {
    els.upgradeRoute.innerHTML = guideData.upgradeRoute.map((step, index) => `
      <article class="step">
        <span class="step__num">${index + 1}</span>
        <h3>${step.title}</h3>
        <p>${step.goal}</p>
        <ul>${step.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  function gearRows() {
    const map = new Map();

    guideData.builds.forEach((build) => {
      build.gear.forEach((slot) => {
        slot.items.forEach((item) => {
          if (!map.has(item)) {
            map.set(item, {
              item,
              builds: new Set(),
              uses: new Set(),
              sources: new Set()
            });
          }
          const row = map.get(item);
          row.builds.add(build.name);
          row.uses.add(slot.slot);
          build.farming.forEach((farm) => {
            if (farm.type === "目标刷取") row.sources.add(farm.source);
          });
        });
      });
    });

    return Array.from(map.values()).map((row) => ({
      item: row.item,
      builds: Array.from(row.builds).join("、"),
      uses: Array.from(row.uses).join("、"),
      sources: Array.from(row.sources).join("；")
    }));
  }

  function renderGearTable() {
    const query = normalize(state.gearQuery);
    const rows = gearRows().filter((row) => {
      if (!query) return true;
      return normalize(`${row.item} ${row.builds} ${row.uses} ${row.sources}`).includes(query);
    });

    els.gearTable.innerHTML = rows.length ? rows.map((row) => `
      <tr>
        <td>${row.item}</td>
        <td>${row.builds}</td>
        <td>${row.uses}</td>
        <td>${row.sources || "见流派详情中的顺手刷取与 Boss 表"}</td>
      </tr>
    `).join("") : `<tr><td colspan="4">没有匹配的装备。</td></tr>`;
  }

  function renderSources() {
    els.sourceList.innerHTML = [
      `<li>${guideData.versionNote}</li>`,
      ...guideData.sources.map((source) => `
        <li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>：${source.note}</li>
      `)
    ].join("");
  }

  function renderAll() {
    renderSummary();
    renderFilters();
    renderBuildList();
    renderBuildDetail();
    renderUpgradeRoute();
    renderGearTable();
    renderSources();
  }

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter-type]");
    if (filterButton) {
      state[filterButton.dataset.filterType] = filterButton.dataset.value;
      renderAll();
      return;
    }

    const buildButton = event.target.closest("[data-build-id]");
    if (buildButton) {
      state.selectedBuildId = buildButton.dataset.buildId;
      renderBuildList();
      renderBuildDetail();
    }
  });

  function updateBuildSearch(event) {
    state.query = event.target.value;
    renderBuildList();
    renderBuildDetail();
  }

  els.searchInput.addEventListener("input", updateBuildSearch);
  els.searchInput.addEventListener("change", updateBuildSearch);

  els.resetFilters.addEventListener("click", () => {
    state.purpose = "全部";
    state.difficulty = "全部";
    state.query = "";
    state.selectedBuildId = guideData.builds[0].id;
    els.searchInput.value = "";
    renderAll();
  });

  els.gearSearchInput.addEventListener("input", (event) => {
    state.gearQuery = event.target.value;
    renderGearTable();
  });

  renderAll();
})();
