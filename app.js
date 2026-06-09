(function () {
  const state = {
    selectedBuildId: guideData.builds[0].id,
    openGearKey: ""
  };

  const els = {
    buildList: document.getElementById("buildList"),
    buildDetail: document.getElementById("buildDetail"),
    sourceList: document.getElementById("sourceList")
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function gearKey(item, index) {
    return `${item.slot}-${item.cn}-${index}`;
  }

  function priorityClass(priority) {
    if (priority === "必刷") return "priority priority--must";
    if (priority === "推荐") return "priority priority--recommended";
    if (priority === "可替代") return "priority priority--alt";
    return "priority";
  }

  function renderBuildList() {
    els.buildList.innerHTML = guideData.builds.map((build) => `
      <button
        class="build-choice"
        type="button"
        aria-pressed="${build.id === state.selectedBuildId}"
        data-build-id="${escapeHtml(build.id)}"
      >
        <strong>${escapeHtml(build.name)}</strong>
        <span>${escapeHtml(build.rating)} 级 · ${escapeHtml(build.difficulty)}成型 · ${escapeHtml(build.purposes.join(" / "))}</span>
      </button>
    `).join("");

    els.buildList.querySelectorAll("[data-build-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedBuildId = button.dataset.buildId;
        state.openGearKey = "";
        renderAll();
      });
    });
  }

  function renderGearItem(item, index) {
    const key = gearKey(item, index);
    const isOpen = state.openGearKey === key;
    return `
      <article class="gear-row">
        <button class="gear-row__button" type="button" aria-expanded="${isOpen}" data-gear-key="${escapeHtml(key)}">
          <span class="slot-name">${escapeHtml(item.slot)}</span>
          <span class="gear-row__main">
            <strong>${escapeHtml(item.cn)}</strong>
            <small>${escapeHtml(item.en)}</small>
          </span>
          <span class="${priorityClass(item.priority)}">${escapeHtml(item.priority)}</span>
        </button>
        <div class="gear-row__details" ${isOpen ? "" : "hidden"}>
          <dl>
            <div>
              <dt>这是什么</dt>
              <dd>${escapeHtml(item.kind)}</dd>
            </div>
            <div>
              <dt>威能/作用</dt>
              <dd>${escapeHtml(item.power)}</dd>
            </div>
            <div>
              <dt>在哪里刷</dt>
              <dd>${escapeHtml(item.farm)}</dd>
            </div>
          </dl>
        </div>
      </article>
    `;
  }

  function renderBuildDetail() {
    const build = guideData.builds.find((item) => item.id === state.selectedBuildId);
    if (!build) return;

    els.buildDetail.innerHTML = `
      <div class="build-panel__head">
        <div>
          <p class="section-kicker">Selected Build</p>
          <h2>${escapeHtml(build.name)}</h2>
          <p>${escapeHtml(build.summary)}</p>
        </div>
        <span class="rating">${escapeHtml(build.rating)}</span>
      </div>

      <section class="quick-block">
        <h3>打法</h3>
        <ul>${build.gameplay.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>

      <section class="gear-list-block">
        <h3>装备清单</h3>
        <p class="hint">点开每一件装备，可以看到威能/作用和具体获取地点。</p>
        <div class="gear-list">
          ${build.gear.map(renderGearItem).join("")}
        </div>
      </section>

      <section class="quick-block">
        <h3>词条优先级</h3>
        <ul>${build.affixes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `;

    els.buildDetail.querySelectorAll("[data-gear-key]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.gearKey;
        state.openGearKey = state.openGearKey === key ? "" : key;
        renderBuildDetail();
      });
    });
  }

  function renderSources() {
    els.sourceList.innerHTML = [
      `<li>${escapeHtml(guideData.versionNote)}</li>`,
      ...guideData.sources.map((source) => `
        <li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>：${escapeHtml(source.note)}</li>
      `)
    ].join("");
  }

  function renderAll() {
    renderBuildList();
    renderBuildDetail();
    renderSources();
  }

  renderAll();
})();
