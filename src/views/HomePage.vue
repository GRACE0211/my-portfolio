<template>
<div>
    
    <!-- Hero Section -->
    <section class="hero-section">

    <!-- 上半部：標題 -->
    <div class="hero-up">
      <div class="hero-title">
        <h1>Hi, I'm Grace.</h1>
        <h1>Welcome to my Portfolio.</h1>
      </div>
    </div>

    <!-- 下半部：目錄+大頭貼 -->
    <div class="hero-down">
      <div class="hero-menu">
        <ol class="menu-list">
          <a href="#skills"><li><span class="menu-number">1.</span><span class="menu-text">skills 技能</span></li></a>
          <a href="#timeline"><li><span class="menu-number">2.</span><span class="menu-text">timeline 時間軸</span></li></a>
          <a href="#story"><li><span class="menu-number">3.</span><span class="menu-text">transfer story 轉職歷程</span></li></a>
          <a href="#portfolio"><li><span class="menu-number">4.</span><span class="menu-text">portfolio 作品集</span></li></a>
          <a href="#job-experience"><li><span class="menu-number">5.</span><span class="menu-text">experience 工作經歷</span></li></a>
        </ol>
        <div class="social-icons">
          <a href="https://github.com/GRACE0211" target="_blank">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="mailto:gracejhuo0211@gmail.com">
            <img src="/gmail.png" alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/%E8%BB%92%E4%BA%98-%E5%8D%93-9432791a2/" target="_blank">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.cake.me/me/gracejhuo0211" target="_blank">
            <img src="/website.png" alt="CakeResume" />
          </a>
        </div>
      </div>

      <!-- 大頭貼一起放在 hero-down 裡 -->
      <div class="hero-pic">
        <img src="/my-avatar.png" alt="Your Photo" />
      </div>
    </div>
  
</section>






    <!-- Navbar （滑到這邊才黏住） -->
    <nav class="navbar">
      <a href="#skills">技能</a>
      <a href="#timeline">時間軸</a>
      <a href="#story">轉職歷程</a>
      <a href="#portfolio">作品集</a>
      <a href="#job-experience">工作經歷</a>
      <a href="https://www.cake.me/me/gracejhuo0211" target="_blank">CakeResume</a>
    </nav>
    <!-- 技能區塊 -->
    <section id="skills" class="main-section">
      <h2>技能</h2>
      <div class="skill-div">
        <div class="skill-card">
          <img src="/html.png" alt="html" />
          <span>HTML</span>
        </div>
        <div class="skill-card">
          <img src="/css.png" alt="css" />
          <span>CSS</span>
        </div>
        <div class="skill-card">
          <img src="/vue.png" alt="vue" />
          <span>Vue.js</span>
        </div>
        <div class="skill-card">
          <img src="/php.png" alt="php" />
          <span>PHP</span>
        </div>
        <div class="skill-card">
          <img src="/mysql.png" alt="mysql" />
          <span>MySQL</span>
        </div>
        <div class="skill-card">
          <img src="/c-plus-plus.png" alt="mysql" />
          <span>Basic C/C++</span>
        </div>
      </div>
      <div class='story-div2'>
        目前主要使用的工具為 <strong style="color:#707070; text-decoration: underline;">VSCode、XAMPP 與 phpMyAdmin</strong>，在 Mac 與 Windows 環境下開發前後端整合的小型專案。<strong style="color:#707070; text-decoration: underline;">熟悉 JavaScript 搭配框架 Vue.js，後端使用 PHP 與 MySQL</strong>，近期也在精進 PHP 語法和自學 Python。轉職過程中從實務需求出發，逐步累積 API 串接、資料庫設計與控制程式中的資料流等狀態管理能力。
      </div>
    </section>

    <!-- 甘特圖區塊 -->
    <section id="timeline" class="main-section">
      <h2>轉職時間軸：從前端到後端的學習歷程</h2>

      <div class="timeline-list">
        <div class="timeline-item">
          <div class="timeline-left">一月 2023 - 五月 2023</div>
          <div class="timeline-right">
            <ul>
              <li>學習前端語法：HTML, CSS, JavaScript 搭配 Vue.js, React.js 等框架</li>
              <li>製作前端網頁專案：To Do List、購物車、氣象預報網頁（串接中央氣象局 API）</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-left">六月 2023 - 三月 2025</div>
          <div class="timeline-right">
            <ul>
              <li>補足核心知識：計算機概論、資料結構、網路、資料庫</li>
              <li>準備資訊管理研究所一般生考試，成果：成功大學備取第 48 名</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-left">三月 2025 - 四月 2025</div>
          <div class="timeline-right">
            <ul>
              <li>精進 SQL、學習 PHP 語法</li>
              <li>實作專案：簡易進出貨系統、網頁版購物車、個人網頁</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 小故事區塊 -->
    <section id="story" class="main-section">
      <h2>轉職歷程</h2>
      <div class='story-div'>
        <div>
          過去的工作經歷中，我曾管理 1-3人的團隊，負責工作分配與排程協調，也參與過貨櫃內產品的進出貨流程。當時主要透過試算表進行庫存紀錄，讓我深刻體會到，面對大量資料時若缺乏合適的系統工具，會極大地降低效率。這段經驗也促使我在轉職學習時，<strong>格外重視「使用者角度」與「系統效率」的平衡。</strong>
      </div>
      <div>
        原本對程式一知半解的我，從自學 HTML、CSS、JavaScript 起步，一路實作到使用 Vue.js 開發互動式前端專案。在這個過程中，我逐漸意識到資料結構與系統設計的重要性，因此進一步補足了計算機概論、資料結構、網路、資料庫等基礎知識，並實際應用於專案中，學會了 API 串接、前後端整合與控制程式中資料流的狀態管理等實務技能。
</div>
<div>
        這段自學與實作並行的歷程，讓我對技術有了更深層的理解，也更加確立了未來的職涯方向——<strong>專注於前後端開發與資料庫設計，持續精進資料流管理與前後端整合技術，致力於打造穩定可靠、具擴展性的網頁系統，並以使用者需求為出發點，不斷優化資料流暢性與系統效能。</strong>
      </div>
      </div>
    </section>

    <!-- 作品集區塊 -->
    <section id="portfolio" class="main-section">
      <h2>作品集</h2>
      <div class="featured-projects">

<!-- 第一個 左圖右文 -->
        <div class="featured-item">
          <div class="featured-image">
            <img src="/inventory.png" alt="factory-inventory" style="border-radius: 0px;"/>
          </div>
          <div class="featured-text">
            <h3 style="">簡易進出貨系統專案</h3>
            <p>本專案為一套使用 Vue.js 開發的進出貨管理系統，透過 XAMPP 架設後端 API（PHP 撰寫），並串接 MySQL 資料庫。系統具備基本的前後端資料傳輸與庫存邏輯驗證功能，實作了產品清單、庫存查詢、交易紀錄、新增交易等功能。</p>
            <div class="button-area">
    <a class="github-button" href="https://github.com/GRACE0211/factory-inventory-system" target="_blank">GitHub →</a>
  </div>
          </div>
        </div>

        <!-- 第二個 右圖左文 -->
        <div class="featured-item">
          <div class="featured-text">
            <h3 style="">Shopping Cart</h3>
            <p>此前端專案使用 Vue.js 製作，透過串接後端 data.json 資料，實現商品分類顯示與加入購物車功能，並支援多頁切換與即時更新數量。</p>
            
            <div class="button-area">
    <a class="github-button" href="https://github.com/GRACE0211/breakfast-order-menu" target="_blank">GitHub →</a>
  </div>
          </div>
          <div class="featured-image wide">
            <img src="/shopping-cart.jpg" alt="shopping-cart" style="border-radius: 0px;"/>
          </div>
        </div>

</div>
      <div class="projects-grid">
        
  <div
    class="project-card"
    v-for="(project, index) in projects"
    :key="index"
    :class="{ wide: index === 0 || index === 1 }"
  >
    <div class="card-inner">
      <div class="card-front">
        <img :src="project.image" :alt="'作品 ' + (index + 1)" />
      </div>
      <div class="card-back">
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</div>



    </section>

    <section id="job-experience" class="main-section">
  <h2>工作經歷</h2>

  <div class="job-experience">
    <h3 class="company-name">
  國外行政人員｜鉅恒投資有限公司
  <img src="/CAP.png" alt="CAP logo" class="company-logo">
</h3>


    <div class="job-details">
      <div class="job-part">
        <h4>工作內容</h4>
        <ul>
          <li>貨櫃內產品進出貨的庫存管理</li>
          <li>透過信件與美國同事及客戶聯絡</li>
          <li>處理貨櫃進口文件清關</li>
          <li>審核美國貨櫃司機運送文件</li>
          <li>客戶申請運送貨櫃的訂單審核</li>
        </ul>
      </div>

      <div class="job-part">
        <h4>貢獻成果</h4>
        <ul>
          <li>小組工作分配與調度</li>
          <li>負責安排兩位工讀生的工作</li>
          <li>訓練過 6 位新人</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<footer>© GRACE JHUO</footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);
const isShrink = ref(false);

function handleScroll() {
  scrollY.value = window.scrollY;
  isShrink.value = scrollY.value > window.innerHeight * 0.4; // 滑動到40%開始縮小
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const projects = [

{
  image: '/my-portfolio/contact-list.jpg',
  description: '透過 Postman 模擬後端 API，支援新增、編輯、刪除聯絡人資料',
},
{
  image: '/my-portfolio/expense-tracker.jpg',
  description: '網頁版記帳本，利用React.js製作',
},
{
  image: '/my-portfolio/to-do-list.jpg',
  description: 'React.js版本的to do list',
},
{
  image: '/my-portfolio/shopping-list.jpg',
  description: '包含標示已完成以及完整刪除功能',
},
{
  image: '/my-portfolio/todolist.png',
  description: 'Vue.js版本的to do list，強調簡潔排版',
},
{
  image: '/my-portfolio/weather-app.jpg',
  description: '串接氣象局API，更新目前天氣狀況',
},
]
</script>



<style scoped>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
  font-family: "Courier New", Courier, monospace;
}
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 100px 40px 120px;
  background: url('/newspaper.jpg') no-repeat center center;
  background-size: cover;
  font-family: "Courier New", Courier, monospace;
}

/* hero-up固定在上面 */
.hero-up {
  flex-shrink: 0;
}

/* hero-title */
.hero-title {
  text-align: left;
  margin-left: 50px;
}

.hero-title h1 {
  font-size: 48px;
  margin: 0 0 20px 0;
  font-weight: bolder;
  color: #333;
  line-height: 1.2;
}

/* hero-down 左右並排 */
/* hero-down 左右並排，左70%右30% */
.hero-down {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* ⚡️讓左右兩邊一樣高 */
  flex: 1;
  margin-top: 20px;
  gap: 40px;
}

/* 左邊 hero-menu 占70% */
.hero-menu {
  flex: 0 0 70%;
  max-width: none; /* 移除 max-width 限制 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 右邊 hero-pic 占30% */
.hero-pic {
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
}

.hero-pic img {
  width: 100%;
  height: auto; /* 保持比例縮放 */
  object-fit: cover;
  opacity: 85%;
}


/* menu文字設定 */
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.menu-list li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.menu-list > a{
  text-decoration: none;
  color: #000000;
}

.menu-number {
  width: 30px;
  text-align: left;
}

.menu-text {
  flex-grow: 1;
  text-align: right;
  border-bottom: 2px dotted #333;
  padding-left: 10px;
}

/* 社群icons */
.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.social-icons img {
  width: 30px;
  height: 30px;
}



.navbar {
  position: sticky;
  top: 0;
  background: white;
  display: flex;
  justify-content: center;
  gap: 30px;
  /* padding: 16px; */
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.navbar a {
  padding: 10px 5px;
  font-weight: bold;
  color: rgb(79, 79, 79);
  text-decoration: none;
}

.navbar a:hover {
  background-color: #474646;
  color: #fff;
}


.main-section {
  background: #d2d2d2;
  padding: 80px 20px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 998;
}

.main-section h2 {
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
  color: #ffffff; 
  text-align: center;
  text-transform: uppercase;

  /* 陰影：模仿圖片中的立體感 */
  text-shadow:
    3px 3px 0 #898989,      /* 深紫色偏移陰影 */
    4px 4px 4px rgba(0, 0, 0, 0.447); /* 柔和陰影增加立體 */

    /* background-color: #f3f2f2; */
}


.skill-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.skill-card {
  width: 120px;
  height: 120px;
  background: #ffffff;
  box-shadow:2px 2px 5px rgb(139, 139, 139);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  transition: transform 0.2s;
}

.skill-card:hover {
  transform: translateY(-4px);
}

.skill-card img {
  width: 40px;
  height: 40px;
  margin-bottom: 6px;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 8px;
  
}

.timeline-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow:2px 2px 5px rgb(139, 139, 139);
}

.timeline-left {
  width: 30%;
  font-weight: bold;
  color: #9d9a9a;
  padding-top: 4px;
}

.timeline-right {
  width: 70%;
  /* border-left: 1.5px solid #9d9a9a; */
  margin-left: 5px;
}

.timeline-item ul {
  margin: 0;
}

.main-section ul li {
  margin-bottom: 8px;
  color: #444;
  list-style-type: disc;
  list-style-position: inside;
}

.main-section ul {
  color: #888; /* 改為灰色點點 */
}

.story-div2 {
  background-color: #eae9e9;
  width: 80%;
  padding: 40px;
  margin: 40px auto 0px;
  text-align: center;
  box-shadow: inset -3px -3px 8px 0px rgb(255, 255, 255), inset 3px 3px 8px 0px rgba(0, 0, 0, 0.37);
  border-radius: 5px;
  line-height:2.0;
}

.story-div {
  background-color: #eae9e9;
  width: 80%;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
  box-shadow: inset -3px -3px 8px 0px rgb(255, 255, 255), inset 3px 3px 8px 0px rgba(0, 0, 0, 0.37);
  border-radius: 5px;
}
.story-div > div {
  text-indent: 2em;
  padding: 20px 0;
  line-height:2.0;
}

.featured-projects {
  max-width: 620px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* 共同樣式 */
.featured-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

/* 右圖左文 */
.featured-item.reverse {
  flex-direction: row-reverse;
}

/* 圖片設定 */
.featured-image {
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.featured-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* 第二張圖片（長方形）稍微寬一點 */
.featured-image.wide img {
  width: 100%;
  height: auto;
}

/* 文字區塊設定 */
.featured-text {
  flex: 1;
  padding: 20px;
}

.featured-text h3 {
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
}

.featured-text p {
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.6;
}

.featured-text a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.button-area {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}



.github-button {
  background-color: #6e6e6e;
  padding: 8px 16px;
  border-radius: 50px;
  transition: background-color 0.3s;
  box-shadow:2px 2px 5px rgb(139, 139, 139);
}

.github-button:hover {
  background-color: #333; /* 滑過變更深一點 */
}


.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 兩欄 */
  gap: 20px;
  max-width: 620px;
  margin: 0 auto;
  column-count: 2; /* 2欄 */
  column-gap: 20px; /* 欄與欄之間的間距 */
}

/* 預設卡片：正方形 */
.project-card {
  width: 100%;
  height: 300px;
  perspective: 1000px;
  position: relative;
  break-inside: avoid; /* 避免卡片被切半 */
  margin-bottom: 20px;
}

/* 前兩張長方形作品卡片 */
.project-card.wide {
  grid-column: span 2;
  height: 400px;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
}

.project-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.card-front img {
  width: 100%;       /* ✅ 圖片不要滿版，內縮 */
  height: 100%;     /* ✅ 保持原始比例縮放 */
  object-fit: cover;
  margin: auto;
  display: block;   /* 配合 margin: auto 正常運作 */
  border-radius: 8px;
}


.card-back {
  background: #fff;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
  color: #444;
  font-size: 16px;
  text-align: center;
}


.job-experience {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  margin-top: 40px;
}

.job-experience h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}


.company-name {
  display: flex;
  align-items: center;
  gap: 8px; /* 文字跟圖片中間留一點空隙 */
}

.company-logo {
  width: 35px;
  height: 35px;
  object-fit: contain; /* 保持圖片比例 */
}


.job-details {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.job-part {
  flex: 1 1 300px;
}

.job-part h4 {
  font-size: 20px;
  margin-bottom: 8px;
  color: #666;
}

.job-part ul {
  padding-left: 20px;
}

.job-part ul li {
  margin-bottom: 8px;
  color: #444;
}

footer {
  margin-top: auto;
  background-color: #818181;
  color: white;
  text-align: center;
  padding: 10px 0;
  border: none;
}
@media (max-width: 768px) {
  .hero-title {
  text-align: center;
  margin-left: 0px;
}

.hero-title h1 {
  font-size: 35px;
  margin: 0 0 20px 0;
  font-weight: bolder;
  color: #333;
  line-height: 1.2;
}
  .hero-down {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .hero-menu {
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
  }

  .menu-list li {
    justify-content: center;
  }

  .hero-pic {
    justify-content: center;
  }

  .hero-pic img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 50%;
  }

  .navbar{
    font-size: 12px;
  }
}

</style>
