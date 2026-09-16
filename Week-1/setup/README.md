# Setup: p5.js + VS Code + GitHub

Goal: a running p5.js sketch on your machine, tracked in your own GitHub repo. ~15 minutes.

Everything in this course runs locally — your editor, your files, your repo. There's no web editor to fall back on, so get this working before Week 2.

## 1. Install the tools

- [VS Code](https://code.visualstudio.com/) — or another editor if you're already comfortable with one
- [Git](https://git-scm.com/downloads) — macOS: `xcode-select --install` also works
- A [GitHub account](https://github.com/join)

Check Git is installed. In VS Code, open the terminal (`` Ctrl+` ``) and run:

```bash
git --version
```

## 2. Tell Git who you are

Once per machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@sfu.ca"
```

## 3. Add the Live Server extension

In VS Code: Extensions sidebar (`Cmd/Ctrl+Shift+X`) → search **Live Server** (Ritwick Dey) → Install.

You need a local server, not a double-clicked file — `file://` pages can't load images, data, or models later in the course.

## 4. Make the repo on GitHub

On github.com: **New repository** → name it `iat806-week1` → **Public** → tick **Add a README** → **Create**.

Then **Code → HTTPS → copy the URL**, and in a terminal:

```bash
cd ~/Desktop            # or wherever you keep coursework
git clone https://github.com/YOUR-USERNAME/iat806-week1.git
cd iat806-week1
code .                  # opens the folder in VS Code
```

Your first push will ask you to sign in to GitHub — accept the browser prompt.

## 5. Create the two files

In VS Code, make `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/p5@2.3.3/lib/p5.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>p5 sketch</title>
  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

And `sketch.js`:

```js
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  noStroke();
  fill(255, 120, 60);
  circle(mouseX, mouseY, 60);
}
```

## 6. Run it

Right-click `index.html` → **Open with Live Server**. A browser opens with a dark canvas and an orange circle that follows your mouse. Edit `sketch.js`, save, and the page reloads itself.

## 7. Commit and push

```bash
git add .
git commit -m "First p5 sketch"
git push
```

Refresh your repo page on GitHub — both files should be there.

## Done

You have a local sketch, a live preview, and a remote copy. Repeat steps 5–7 for every sketch from here on.

---

**Troubleshooting**

- _Blank white page_ — open the browser console (`F12`) and read the error. A 404 on `sketch.js` means the filename or folder is wrong.
- _`git push` rejected_ — the remote changed, often because you edited the README on github.com. Run `git pull` first, then push.
- _Live Server does nothing_ — make sure you opened the **folder** in VS Code (`code .`), not just a single file.

**A note on p5 versions.** We use **p5.js 2.x**. Most tutorials and Stack Overflow answers you'll find were written for 1.x, and the change that will bite you is that **`preload()` no longer exists**. Where an old example does this:

```js
let img;
function preload() { img = loadImage("cat.png"); }   // 1.x — never runs
```

you write this instead:

```js
let img;
async function setup() {
  createCanvas(600, 400);
  img = await loadImage("cat.png");                  // 2.x
}
```

Everything else in this guide works the same in both versions. When an old tutorial and the docs disagree, trust [p5js.org/reference](https://p5js.org/reference/).
