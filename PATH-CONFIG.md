# 🗂️ PATH-CONFIG.md

## 🔖 專案資訊
- **專案名稱**: Vernon-website
- **專案用途**: 將 MacBook 上生成的網頁/JSON/報告，自動推送到 GitHub 並部署到 Vercel 或 Netlify

---

## 🖥️ MacBook 環境

| 項目 | 設定值 |
| --- | --- |
| **Username** | hudsonmar |
| **Base Path** | /Users/hudsonmar/Documents/GitHub/ |
| **專案路徑** | /Users/hudsonmar/Documents/GitHub/Vernon-website |
| **Terminal 編輯工具** | nano |

---

## 🔑 GitHub 設定

| 項目 | 設定值 |
| --- | --- |
| **Repository URL (SSH)** | git@github.com:Cullinan30a/Vernon-website.git |
| **GitHub Username** | Cullinan30a |
| **Deploy Key 名稱** | MacBook SSH Key |
| **Deploy Key 狀態** | Added on Jul 8, 2025, Never used (需啟用 ssh-agent) |
| **Git Remote** | origin |

---

## 📝 Script 文件

| 檔案名稱 | 功能描述 |
| --- | --- |
| `update-github.sh` | 將最新更改 commit & push 到 GitHub |
| `push-github.sh` | 替代式 push script |

---

## 🛠️ 需要確認事項

- [ ] 是否已執行 `eval "$(ssh-agent -s)"` 開啟 ssh-agent  
- [ ] 是否已使用 `ssh-add ~/.ssh/id_ed25519` (或你的私鑰名稱) 加入 deploy key  
- [ ] git remote url 是否為 SSH 格式而非 HTTPS

---

## 🔄 常用 Git 指令

```bash
cd /Users/hudsonmar/Documents/GitHub/Vernon-website
git add .
git commit -m "更新內容"
git push

