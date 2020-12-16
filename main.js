 // 各idおよびclass、セレクタの取得
 const searchBtn = document.getElementById('search') //検索ボタンの取得
 const saveBtn = document.getElementById('save')　//保存ボタンの取得
 const clearBtn = document.getElementById('clear') //削除ボタンの取得
 const textBox = document.getElementById('textBox') //テキストボックスの取得
 const saveData = document.querySelector('.saveData')//<ul></ul>の取得→この下を加工する
 const saveClearBtn = document.getElementById('saveClear')//「保存先」の１つ削除ボタンの取得
 const saveClearAllBtn = document.getElementById('saveClearAll')//保存先の全削除ボタンの取得
 

//  関数、イベントの実行
// searchBtn.addEventListener('click', search)//🔍クリック時のイベント
saveBtn.addEventListener('click', save)//保存ボタンクリック時のイベント
clearBtn.addEventListener('click', clear1)//削除ボタンクリック時のイベント
saveClearBtn.addEventListener('click',saveClear)//保存先の１つ削除ボタンクリック時のイベント
saveClearAllBtn.addEventListener('click',saveClearAll)//保存全削除ボタンクリック時のイベント

// //  検索に関する関数 reactの後でやる
// function search() {
//     let searchInput = document.getElementById('search-input').value
//     if(saveData == searchInput) {
//        saveData.style.color = "red"
//     } else {
//        return
//     }
// }

 // 保存ボタンに関する関数
 function save () {
    if(!textBox.value) {return} else {
       localStorage.setItem(textBox, textBox.value)
       const newSaveData = document.createElement('li')
       newSaveData.textContent = textBox.value
       saveData.appendChild(newSaveData)
    }
     }

 // 入力データ削除に関する関数 
 function clear1 () {
    localStorage.clear()
    textBox.value = ""
 }

//保存先の１つ削除ボタンに関する関数
function saveClear() {
   saveData.removeChild(saveData.lastElementChild)
}

 // 保存データ全削除に関する関数
 function saveClearAll() {
    let result = confirm("本当に削除しますか？")
    if ( result ) {
      if (saveData.hasChildNodes()){
         // 子ノードを全削除
         for (let i=saveData.childNodes.length-1; i>=0; i--) {
            saveData.removeChild(saveData.childNodes[i]);
         }
      }
    } else {
       return
    }
 }
