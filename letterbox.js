document.addEventListener("DOMContentLoaded", function () {

    // フォーム要素を取得
    const searchForm = document.getElementById("push_demo_2");

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

            // 以下にレターボックスの処理を追加
            // レターボックス上部用のdivを作成
            const letterboxTop = document.createElement('div');
            letterboxTop.classList.add('letterbox-top');
            // 黒い四角を表示するためのスタイルを直接適用
            letterboxTop.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            letterboxTop.style.position = 'fixed';
            letterboxTop.style.left = '0';
            letterboxTop.style.width = '100%';
            letterboxTop.style.height = '10vh'; // 画面の高さの"10"%
            letterboxTop.style.top = '0';
            letterboxTop.style.zIndex = '1000'; // 他の要素より手前に表示(オーバーレイより上)

            // レターボックス下部用のdivを作成
            const letterboxBottom = document.createElement('div');
            letterboxBottom.classList.add('letterbox-bottom');
            // 黒い四角を表示するためのスタイルを直接適用
            letterboxBottom.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            letterboxBottom.style.position = 'fixed';
            letterboxBottom.style.left = '0';
            letterboxBottom.style.width = '100%';
            letterboxBottom.style.height = '15vh'; // 画面の高さの"15"%
            letterboxBottom.style.bottom = '0';
            letterboxBottom.style.zIndex = '1000'; // 他の要素より手前に表示(オーバーレイより上)

            // レターボックスの要素をbodyに追加
            document.body.prepend(letterboxTop);
            document.body.append(letterboxBottom);

            // 5秒後に要素を削除
            setTimeout(() => {
                whiteOverlay.remove(); // 白いスクリーンを削除
                letterboxTop.remove(); // レターボックス上部を削除
                letterboxBottom.remove(); // レターボックス下部を削除
                console.log("letterbox.js: 5秒が経過し、要素が削除されました。");
            }, 5000);
        });
    } else {
        console.log("letterbox.js: 'searchForm' 要素が見つかりませんでした。");
    }
});