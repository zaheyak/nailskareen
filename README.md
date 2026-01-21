# Kareen Nails - קטלוג ציפורניים

אתר קטלוג אלגנטי לטיפולי ציפורניים עם עיצוב מודרני ואנימציות.

## 🚀 טכנולוגיות

- **React** + **Vite**
- **CSS3** עם אנימציות
- **Vercel** לפרסום

## 📦 התקנה מקומית

```bash
cd frontend
npm install
npm run dev
```

## 🏗️ בנייה לפרודקשן

```bash
cd frontend
npm run build
```

## 📤 פרסום ל-Vercel

### הגדרה ראשונית

1. **התחבר ל-Vercel:**
   - היכנס ל-[vercel.com](https://vercel.com)
   - התחבר עם GitHub

2. **קבל את ה-Tokens:**
   - לך ל-[Vercel Settings > Tokens](https://vercel.com/account/tokens)
   - צור token חדש והעתק אותו

3. **קבל את ה-Project IDs:**
   - צור פרויקט חדש ב-Vercel (או השתמש בפרויקט קיים)
   - לך ל-Settings > General
   - העתק את **Project ID** ו-**Organization ID**

4. **הוסף Secrets ל-GitHub:**
   - לך ל-GitHub Repository > Settings > Secrets and variables > Actions
   - הוסף את ה-secrets הבאים:
     - `VERCEL_TOKEN` - ה-token שיצרת
     - `VERCEL_ORG_ID` - ה-Organization ID
     - `VERCEL_PROJECT_ID` - ה-Project ID

### הגדרת Vercel Project

אם אתה מגדיר את הפרויקט ב-Vercel לראשונה:

1. **Root Directory:** הגדר ל-`frontend`
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install`

### דחיפה אוטומטית

לאחר ההגדרה, כל push ל-`main` או `master` יגרום לדחיפה אוטומטית ל-Vercel דרך GitHub Actions.

## 📁 מבנה הפרויקט

```
Nails/
├── frontend/
│   ├── public/
│   │   └── images/          # תמונות ווידיאו
│   ├── src/
│   │   ├── App.jsx          # קומפוננטה ראשית
│   │   ├── App.css          # עיצוב
│   │   ├── index.css        # סגנונות בסיסיים
│   │   └── main.jsx         # נקודת כניסה
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .github/
│   └── workflows/
│       └── deploy-vercel.yml  # GitHub Actions workflow
└── README.md
```

## 🎨 תכונות

- ✅ עיצוב אלגנטי עם צבעי בז' וורוד-בייבי
- ✅ אנימציות חלקות
- ✅ רספונסיבי למובייל ומחשב
- ✅ וידיאו רקע
- ✅ מודל לפרטים
- ✅ תמיכה בעברית (RTL)

## 📝 הערות

- ודא שהתמונות והוידיאו נמצאים ב-`frontend/public/images/`
- הוידיאו יתחיל אוטומטית בלולאה (muted)

## 👤 פותח על ידי

Zaheya Kdmany - 2026
