.DEFAULT_GOAL := help

.PHONY: help
help:  ## 顯示此說明訊息
	@echo "可用目標："
	@echo "  make build   - 建置 mdbook"
	@echo "  make serve   - 啟動本地預覽伺服器"
	@echo "  make clean   - 清理建置產物"
	@echo "  make github  - 部署到 GitHub Pages"

.PHONY: build
build:  ## 建置 mdbook
	@echo "清理 src 中不必要的檔案..."
	@find src -type d -name "target" -exec rm -rf {} + 2>/dev/null || true
	@find src -type d -name "checkpoints" -exec rm -rf {} + 2>/dev/null || true
	@find src -type d -name "node_modules" -exec rm -rf {} + 2>/dev/null || true
	@echo "開始建置..."
	@mdbook build 2>&1 | grep -v "search index is very large" || true
	@echo "套用中文搜尋支援..."
	@cp theme/searcher.js book/searcher.js 2>/dev/null || true
	@echo "清理 book 目錄中的大型檔案..."
	@find book -type d -name "data" -exec rm -rf {} + 2>/dev/null || true
	@find book -type f \( -name "*.tar.bz2" -o -name "*.tar.gz" -o -name "*.zip" -o -name "*.deb" -o -name "*.pdf" -o -name "*.pptx" \) -delete 2>/dev/null || true
	@find book -type f -size +20M -delete 2>/dev/null || true
	@echo "建置完成"

.PHONY: serve
serve:  ## 啟動本地預覽伺服器
	@mdbook serve

.PHONY: clean
clean:  ## 清理建置產物
	rm -rf book

.PHONY: github
github:  ## 部署到 GitHub Pages
	@ghp-import book -p -n
