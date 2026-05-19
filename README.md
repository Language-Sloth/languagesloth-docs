# Language Sloth Docs

Documentation site for the Language Sloth community, published at <https://language-sloth.github.io/languagesloth-docs/>.

Built with [Quartz v4](https://quartz.jzhao.xyz/) from Markdown notes under `content/`.

## Repository layout

- `content/` — the actual site content (Markdown). The `Language Sloth/` subfolder holds governance docs, decrees, etc. `index.md` is the homepage.
- `quartz/`, `quartz.config.ts`, `quartz.layout.ts` — Quartz framework and configuration.
- `.github/workflows/deploy.yml` — GitHub Actions workflow that builds and deploys on every push to `main`.
- `public/` — generated site output. Not committed (built by CI).

## Editing content

1. Edit or add Markdown files under `content/`. Folder structure becomes URL structure.
2. Commit and push to `main`. The workflow rebuilds and deploys to GitHub Pages automatically — no manual build needed.

For internal links between notes, use Obsidian-style wikilinks: `[[Page name]]` or `[[Page name|Custom text]]`.

## Previewing locally

```sh
npm install            # first time only
npx quartz build --serve
```

Then open <http://localhost:8080>. The server watches `content/` and rebuilds on save.

## License

Quartz is MIT-licensed (see `LICENSE.txt`). Site content is © Language Sloth contributors.
