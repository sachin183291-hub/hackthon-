# 🚀 Render-ல் SYNOHACK 2026-ஐ Host செய்வதற்கான முழு வழிகாட்டி (Render Deployment Guide)

உங்கள் repository Render (render.com)-ல் எந்த பிழையும் இல்லாமல் வெற்றிகரமாக இயங்குவதற்கு தேவையான அனைத்து configuration-களும் (`render.yaml`, `server.mjs`, `package.json` scripts) தயார் செய்யப்பட்டுள்ளன.

---

## 🌟 முறை 1: Render Static Site (பரிந்துரைக்கப்படும் - 100% இலவசம் & அதிவேகம்)

Static Site முறையில் Host செய்வதால்:
- **100% முற்றிலும் இலவசம்** (Free Tier).
- **No Sleep / No Cold Starts**: Render Free Web Service போல 15 நிமிடத்திற்கு பின் தூங்காது (Never goes to sleep). எப்போதும் Instant Load ஆகும்.
- **Global CDN & Free SSL**.

### படிகள் (Steps):
1. [dashboard.render.com](https://dashboard.render.com) செல்லவும்.
2. **New +** பட்டனை கிளிக் செய்து **Static Site** என்பதைத் தேர்ந்தெடுக்கவும்.
3. உங்கள் GitHub repository-ஐ (`sachin183291-hub/hackthon-`) இணைத்து **Connect** செய்யவும்.
4. கீழ்வரும் அமைப்புகளை (Settings) உள்ளிடவும்:

| Field Name | Setting Value |
| :--- | :--- |
| **Name** | `synohack-2026` (அல்லது உங்கள் விருப்பப் பெயர்) |
| **Branch** | `main` |
| **Root Directory** | *(காலி விட்டுவிடவும் / Leave blank)* |
| **Build Command** | `npm install -g pnpm && pnpm install && pnpm --filter @workspace/synohack-2026 run build` |
| **Publish Directory** | `artifacts/synohack-2026/dist/public` |

5. **Redirects / Rewrites** பிரிவு (முக்கியமானது - Single Page App Routing-க்கு):
   - **Add Rule** கிளிக் செய்யவும்.
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
6. **Create Static Site** கிளிக் செய்யவும். 2 நிமிடங்களில் உங்கள் தளம் லைவ் ஆகிவிடும்! 🚀

---

## ⚙️ முறை 2: Render Web Service (Node.js Express Server)

நீங்கள் Full Node.js Express server மூலம் இயக்க விரும்பினால்:

### படிகள் (Steps):
1. [dashboard.render.com](https://dashboard.render.com) -> **New +** -> **Web Service**.
2. உங்கள் GitHub repo `sachin183291-hub/hackthon-` தேர்ந்தெடுக்கவும்.
3. கீழ்வரும் அமைப்புகளை உள்ளிடவும்:

| Field Name | Setting Value |
| :--- | :--- |
| **Name** | `synohack-2026-app` |
| **Language / Runtime** | `Node` |
| **Branch** | `main` |
| **Build Command** | `npm install -g pnpm && pnpm install && pnpm run build` |
| **Start Command** | `pnpm run start` |
| **Instance Type** | `Free` |

4. **Health Check Path** (Advanced):
   - `/healthz`
5. **Environment Variables**:
   - `NODE_ENV` = `production`
   - *(Note: `PORT` Render-ஆல் தானாகவே வழங்கப்படும், `server.mjs` அதை ஏற்றுக்கொண்டு இயங்கும்).*
6. **Create Web Service** கிளிக் செய்யவும்.

---

## ⚡ முறை 3: 1-Click Blueprint (`render.yaml`)

இந்த repository-ல் ஏற்கனவே `render.yaml` சேர்க்கப்பட்டுள்ளது.
1. Render Dashboard-ல் **New +** -> **Blueprint** கிளிக் செய்யவும்.
2. உங்கள் repo-வை இணைத்தால், Render தானாகவே `render.yaml` ஃபைலை படித்து தேவையான settings-ஐ தானாகவே நிரப்பிவிடும்.
3. **Apply** கிளிக் செய்தால் போதும்!

---

## 🔍 சரிபார்க்கப்பட்ட வசதிகள் (Pre-configured Features):
- ✅ **Node >= 20** engines specification added to `package.json`.
- ✅ **Express 5 SPA fallback router** configured in `server.mjs`.
- ✅ **Health check endpoint** (`/healthz` and `/api/healthz`) for zero-downtime health probes.
- ✅ **Pnpm workspace compatible build** scripts tested.
