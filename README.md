# LinLinTeen 個人商品網站

這是一個簡單的個人商品展示和銷售網站，適合放在Instagram個人主頁的連結處。

## 功能特點

- 個人資料展示
- 社群媒體連結
- 商品展示與銷售
- 購買流程和付款資訊
- 完全響應式設計，適合手機和桌面訪問

## 如何使用

### 本地測試

1. 下載所有文件到您的電腦
2. 在瀏覽器中打開 `index.html` 文件

### 網站部署步驟

#### 方法一：使用GitHub Pages（免費）

1. 創建一個GitHub帳號（如果您還沒有）
2. 創建一個新的儲存庫 (Repository)
3. 上傳所有文件到該儲存庫
4. 在儲存庫設定中啟用GitHub Pages
5. 您的網站將可通過 `https://您的用戶名.github.io/儲存庫名稱/` 訪問

#### 方法二：使用Netlify（免費）

1. 註冊一個[Netlify](https://www.netlify.com/)帳號
2. 點擊"New site from Git"
3. 連接您的GitHub/GitLab/Bitbucket帳號
4. 選擇您的代碼儲存庫
5. 點擊部署，Netlify將自動部署您的網站
6. 您可以在設定中更改網站網址

#### 方法三：使用傳統網頁主機

1. 註冊一個網頁主機服務（如GoDaddy, Hostinger, Bluehost等）
2. 購買域名（可選）
3. 使用FTP客戶端（如FileZilla）將所有文件上傳到您的主機
4. 您的網站將可通過您的域名或主機提供的網址訪問

## 自定義

### 更改個人資料

編輯 `index.html` 文件中的個人資料部分：

```html
<div class="profile">
    <img src="您的照片URL" alt="個人照片" class="profile-img">
    <h1>您的名字</h1>
    <p class="bio">您的簡介</p>
</div>
```

### 更改社群媒體連結

編輯 `index.html` 文件中的社群連結部分：

```html
<div class="social-links">
    <a href="https://instagram.com/您的Instagram用戶名" class="social-link instagram">
        <i class="fab fa-instagram"></i> Instagram
    </a>
    <!-- 添加更多社群媒體連結 -->
</div>
```

### 更改商品資訊

編輯 `index.html` 文件中的商品部分：

```html
<div class="product-card">
    <img src="商品圖片URL" alt="商品名稱" class="product-img">
    <h3>商品名稱</h3>
    <p class="product-desc">商品描述</p>
    <p class="product-price">NT$ 價格</p>
    <button class="buy-btn" data-product="商品名稱" data-price="價格">立即購買</button>
</div>
```

### 更改付款資訊

編輯 `index.html` 文件中的付款資訊部分：

```html
<div class="payment-info">
    <p>銀行: 您的銀行名稱</p>
    <p>帳號: 您的銀行帳號</p>
    <p>戶名: 您的戶名</p>
</div>
```

## 注意事項

- 本網站是靜態網站，沒有後端數據庫支持
- 訂單數據僅存儲在訪問者的瀏覽器本地存儲中
- 若需完整的電子商務功能，建議升級到使用Shopify等平台 