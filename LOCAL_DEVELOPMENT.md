# Running Jekyll Locally - Quick Guide

## Prerequisites (macOS)

You already have Ruby and Bundler installed! ✅

If you need to install them on a fresh system:
```bash
brew install ruby
brew install node
gem install bundler
```

## Quick Start

### 1. Install Dependencies
```bash
bundle install
```

If you encounter permission errors, install gems locally:
```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

### 2. Start Jekyll Server

**Option A: Standard (Recommended)**
```bash
bundle exec jekyll serve -l -H localhost
```

**Option B: With Live Reload**
```bash
bundle exec jekyll serve --livereload -H localhost
```

**Option C: Simple (if bundle exec not needed)**
```bash
jekyll serve -l -H localhost
```

### 3. Access Your Site

Once the server starts, open your browser and navigate to:
- **Local URL:** http://localhost:4000
- The server will automatically rebuild when you change Markdown (`.md`) and HTML files
- Changes to `_config.yml` require restarting the server

### 4. Stop the Server

Press `Ctrl + C` in the terminal where Jekyll is running.

---

## Alternative: Using Docker

If you prefer using Docker (no need to install Ruby dependencies):

```bash
chmod -R 777 .
docker compose up
```

Then access at: http://localhost:4000

---

## Troubleshooting

### Port Already in Use
If port 4000 is already in use:
```bash
bundle exec jekyll serve -l -H localhost -P 4001
```

### Build Errors
1. Delete `Gemfile.lock` and try again:
   ```bash
   rm Gemfile.lock
   bundle install
   ```

2. Clear Jekyll cache:
   ```bash
   rm -rf .jekyll-cache
   bundle exec jekyll serve -l -H localhost
   ```

### Permission Errors
Install gems locally (as shown in step 1 above).

### Configuration Changes
Remember: Changes to `_config.yml` require **restarting** the Jekyll server.

---

## Development Workflow

1. **Start server:** `bundle exec jekyll serve -l -H localhost`
2. **Edit files:** Make changes to `.md`, `.html`, `.scss` files
3. **Auto-reload:** Browser refreshes automatically (with `-l` flag)
4. **Check changes:** View at http://localhost:4000
5. **Stop server:** `Ctrl + C` when done

---

## File Change Behavior

- ✅ **Auto-reloads:** Markdown (`.md`), HTML, CSS/SCSS
- ❌ **Requires restart:** `_config.yml`, new plugins, Gemfile changes

---

## Current Status

✅ Ruby installed: `ruby 3.4.7`  
✅ Bundler installed: `bundler 4.0.1`  
✅ Dependencies installed: `bundle install` completed

**Next Step:** Run `bundle exec jekyll serve -l -H localhost` to start developing!

