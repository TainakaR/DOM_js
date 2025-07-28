document.addEventListener("DOMContentLoaded", function () {

    // フォーム要素を取得
    const searchForm = document.getElementById("push_demo_1");

    if (searchForm) {
        // フォームのsubmitイベントを監視
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // 白いスクリーン用のdivを作成
            const whiteOverlay = document.createElement('div');
            // whiteOverlayにクラスを追加
            whiteOverlay.classList.add('white-overlay');
            // スタイルを直接適用
            whiteOverlay.style.position = 'fixed'; // 固定位置にする
            whiteOverlay.style.top = '0'; // 画面の上部に配置
            whiteOverlay.style.left = '0'; // 画面の左端に配置
            whiteOverlay.style.width = '100%'; // 画面全体の幅
            whiteOverlay.style.height = '100%'; // 画面全体の高さ
            whiteOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // 半透明の白
            whiteOverlay.style.zIndex = '999'; // コンテンツより上に表示する
            whiteOverlay.style.pointerEvents = 'auto'; // クリックを無効にする（デフォルトはautoですが、明示的に指定）

            document.body.appendChild(whiteOverlay); // bodyに追加

            // 5秒後に要素を削除
            setTimeout(() => {
                whiteOverlay.remove(); // 白いスクリーンを削除
                console.log("overlay.js: 5秒が経過し、要素が削除されました。");
            }, 5000);
        });
    } else {
        console.log("4.js: 'searchForm' 要素が見つかりませんでした。");
    }
});