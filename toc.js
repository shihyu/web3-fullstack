// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 封面</a></li><li class="chapter-item expanded "><a href="day01-day-1-前言.html"><strong aria-hidden="true">2.</strong> DAY 1｜Day 1 - 前言</a></li><li class="chapter-item expanded "><a href="day02-day-2-基礎-區塊鏈錢包.html"><strong aria-hidden="true">3.</strong> DAY 2｜Day 2 - 基礎：區塊鏈錢包</a></li><li class="chapter-item expanded "><a href="day03-day-3-基礎-操作測試鏈應用.html"><strong aria-hidden="true">4.</strong> DAY 3｜Day 3 - 基礎：操作測試鏈應用</a></li><li class="chapter-item expanded "><a href="day04-day-4-web3-與前端-實作第一個-dapp.html"><strong aria-hidden="true">5.</strong> DAY 4｜Day 4 - Web3 與前端：實作第一個 DApp</a></li><li class="chapter-item expanded "><a href="day05-day-5-web3-與前端-幫-dapp-加功能.html"><strong aria-hidden="true">6.</strong> DAY 5｜Day 5 - Web3 與前端：幫 DApp 加功能</a></li><li class="chapter-item expanded "><a href="day06-day-6-web3-與前端-rainbowkit-wallet-connect.html"><strong aria-hidden="true">7.</strong> DAY 6｜Day 6 - Web3 與前端：RainbowKit + Wallet Connect</a></li><li class="chapter-item expanded "><a href="day07-day-7-web3-與前端-實作錢包登入-part-1.html"><strong aria-hidden="true">8.</strong> DAY 7｜Day 7 - Web3 與前端：實作錢包登入 Part 1</a></li><li class="chapter-item expanded "><a href="day08-day-8-web3-智能合約基礎.html"><strong aria-hidden="true">9.</strong> DAY 8｜Day 8 - Web3 智能合約基礎</a></li><li class="chapter-item expanded "><a href="day09-day-9-web3-與後端-實作錢包登入-part-2.html"><strong aria-hidden="true">10.</strong> DAY 9｜Day 9 - Web3 與後端：實作錢包登入 Part 2</a></li><li class="chapter-item expanded "><a href="day10-day-10-web3-與後端-建立錢包與取得-token-balance.html"><strong aria-hidden="true">11.</strong> DAY 10｜Day 10 - Web3 與後端：建立錢包與取得 Token Balance</a></li><li class="chapter-item expanded "><a href="day11-day-11-web3-與後端-簽名與發送交易.html"><strong aria-hidden="true">12.</strong> DAY 11｜Day 11 - Web3 與後端：簽名與發送交易</a></li><li class="chapter-item expanded "><a href="day12-day-12-web-3-與-app-創多鏈錢包與發送交易.html"><strong aria-hidden="true">13.</strong> DAY 12｜Day 12 - Web 3 與 App：創多鏈錢包與發送交易</a></li><li class="chapter-item expanded "><a href="day13-day-13-web-3-與-app-代幣轉移-call-data-與-eip-1559.html"><strong aria-hidden="true">14.</strong> DAY 13｜Day 13 - Web 3 與 App：代幣轉移、Call Data 與 EIP-1559</a></li><li class="chapter-item expanded "><a href="day14-day-14-web-3-與-app-ens-域名與反向查詢.html"><strong aria-hidden="true">15.</strong> DAY 14｜Day 14 - Web 3 與 App：ENS 域名與反向查詢</a></li><li class="chapter-item expanded "><a href="day15-day-15-web3-與進階前端-revoke-cash-與-logs-查詢.html"><strong aria-hidden="true">16.</strong> DAY 15｜Day 15 - Web3 與進階前端：Revoke Cash 與 Logs 查詢</a></li><li class="chapter-item expanded "><a href="day16-day-17-web3-與進階前端-meta-transaction-免手續費交易.html"><strong aria-hidden="true">17.</strong> DAY 16｜Day 17 - Web3 與進階前端：Meta Transaction 免手續費交易</a></li><li class="chapter-item expanded "><a href="day17-day-16-web3-與進階前端-瀏覽器錢包-extension-原理.html"><strong aria-hidden="true">18.</strong> DAY 17｜Day 16 - Web3 與進階前端：瀏覽器錢包 Extension 原理</a></li><li class="chapter-item expanded "><a href="day18-day-18-web3-與進階後端-發送更複雜的交易.html"><strong aria-hidden="true">19.</strong> DAY 18｜Day 18 - Web3 與進階後端：發送更複雜的交易</a></li><li class="chapter-item expanded "><a href="day19-day-19-web3-與進階後端-同時發送大量交易.html"><strong aria-hidden="true">20.</strong> DAY 19｜Day 19 - Web3 與進階後端：同時發送大量交易</a></li><li class="chapter-item expanded "><a href="day20-day-20-web3-與進階後端-實作即時-erc-20-balance.html"><strong aria-hidden="true">21.</strong> DAY 20｜Day 20 - Web3 與進階後端：實作即時 ERC-20 Balance</a></li><li class="chapter-item expanded "><a href="day21-day-21-web3-與進階後端-交易歷史資料整理.html"><strong aria-hidden="true">22.</strong> DAY 21｜Day 21 - Web3 與進階後端：交易歷史資料整理</a></li><li class="chapter-item expanded "><a href="day22-day-22-web3-與進階-app-交易管理與-mempool-監聽.html"><strong aria-hidden="true">23.</strong> DAY 22｜Day 22 - Web3 與進階 App：交易管理與 Mempool 監聽</a></li><li class="chapter-item expanded "><a href="day23-day-23-web3-與進階-app-wallet-connect-協議與實作.html"><strong aria-hidden="true">24.</strong> DAY 23｜Day 23 - Web3 與進階 App：Wallet Connect 協議與實作</a></li><li class="chapter-item expanded "><a href="day24-day-24-web3-與進階-app-dapp-瀏覽器實作.html"><strong aria-hidden="true">25.</strong> DAY 24｜Day 24 - Web3 與進階 App：DApp 瀏覽器實作</a></li><li class="chapter-item expanded "><a href="day25-day-25-web3-與進階-app-swap-功能實作.html"><strong aria-hidden="true">26.</strong> DAY 25｜Day 25 - Web3 與進階 App：Swap 功能實作</a></li><li class="chapter-item expanded "><a href="day26-day-26-web3-與資安-攻擊方式與資產保護-上.html"><strong aria-hidden="true">27.</strong> DAY 26｜Day 26 - Web3 與資安：攻擊方式與資產保護（上）</a></li><li class="chapter-item expanded "><a href="day27-day-27-web3-與資安-攻擊方式與資產保護-下.html"><strong aria-hidden="true">28.</strong> DAY 27｜Day 27 - Web3 與資安：攻擊方式與資產保護（下）</a></li><li class="chapter-item expanded "><a href="day28-day-28-web3-與資安-私鑰保存與備份.html"><strong aria-hidden="true">29.</strong> DAY 28｜Day 28 - Web3 與資安：私鑰保存與備份</a></li><li class="chapter-item expanded "><a href="day29-day-29-web3-與前沿技術-基礎建設與去中心化應用.html"><strong aria-hidden="true">30.</strong> DAY 29｜Day 29 - Web3 與前沿技術：基礎建設與去中心化應用</a></li><li class="chapter-item expanded "><a href="day30-day-30-web3-與前沿技術-密碼學與應用.html"><strong aria-hidden="true">31.</strong> DAY 30｜Day 30 - Web3 與前沿技術：密碼學與應用</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
