document.addEventListener("DOMContentLoaded", function () {

    // フォーム要素を取得
    const searchForm = document.getElementById("push_demo_4");

    if (searchForm) {
        // フォームのsubmitイベントを監視
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // レターボックス上部用のdivを作成
            const letterboxTop = document.createElement('div');
            letterboxTop.classList.add('letterbox-top');
            // 黒い四角を表示するためのスタイルを直接適用
            letterboxTop.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            letterboxTop.style.position = 'fixed';
            letterboxTop.style.left = '0';
            letterboxTop.style.width = '100%';
            letterboxTop.style.height = '10vh'; // 画面の高さの10%
            letterboxTop.style.top = '0';
            letterboxTop.style.zIndex = '1000'; // 他の要素より手前に表示

            // レターボックス下部用のdivを作成
            const letterboxBottom = document.createElement('div');
            letterboxBottom.classList.add('letterbox-bottom');
            // 黒い四角を表示するためのスタイルを直接適用
            letterboxBottom.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            letterboxBottom.style.position = 'fixed';
            letterboxBottom.style.left = '0';
            letterboxBottom.style.width = '100%';
            letterboxBottom.style.height = '15vh'; // 画面の高さの10%
            letterboxBottom.style.bottom = '0';
            letterboxBottom.style.zIndex = '1000'; // 他の要素より手前に表示

            document.body.prepend(letterboxTop);
            document.body.append(letterboxBottom);

            // 白いスクリーン用のdivを作成
            const whiteOverlay = document.createElement('div');
            whiteOverlay.classList.add('white-overlay');
            whiteOverlay.style.position = 'fixed';
            whiteOverlay.style.top = '0';
            whiteOverlay.style.left = '0';
            whiteOverlay.style.width = '100%';
            whiteOverlay.style.height = '100%';
            whiteOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // 半透明の白
            whiteOverlay.style.zIndex = '999'; // レターボックスより下、他のコンテンツより上
            whiteOverlay.style.pointerEvents = 'auto'; // クリックを無効にする（デフォルトはautoですが、明示的に指定）

            document.body.appendChild(whiteOverlay);

            // 画像表示用のdivを作成
            const loadingImageContainer = document.createElement('div');
            loadingImageContainer.classList.add('loading-image-container');
            loadingImageContainer.style.position = 'fixed';
            loadingImageContainer.style.right = '0px'; // 右からの位置
            loadingImageContainer.style.bottom = '0px'; // 下からの位置
            loadingImageContainer.style.zIndex = '1001'; // レターボックスより手前に表示

            const loadingImage = document.createElement('img');
            loadingImage.style.height = '15vh'; // 画面の高さの15%
            loadingImage.style.width = 'auto'; // 比率を保持

            loadingImageContainer.appendChild(loadingImage);
            document.body.appendChild(loadingImageContainer);

            const images = [
                'loading1.png',
                'loading2.png',
                'loading3.png',
                'loading4.png'
            ];
            let currentIndex = 0;

            // 画像を切り替える関数
            function changeImage() {
                loadingImage.src = images[currentIndex];
                currentIndex = (currentIndex + 1) % images.length;
            }

            // 初回表示
            changeImage();

            // 0.5秒ごとに画像を切り替えるインターバルを設定
            const intervalId = setInterval(changeImage, 500);

            // 5秒後に要素を削除
            setTimeout(() => {
                clearInterval(intervalId); // 画像切り替えのインターバルを停止
                letterboxTop.remove(); // レターボックス上部を削除
                letterboxBottom.remove(); // レターボックス下部を削除
                whiteOverlay.remove(); // 白いスクリーンを削除
                loadingImageContainer.remove(); // ローディング画像コンテナを削除
                console.log("test.js: 5秒が経過し、要素が削除されました。");
            }, 5000);
        });
    } else {
        console.log("4.js: 'searchForm' 要素が見つかりませんでした。");
    }
});