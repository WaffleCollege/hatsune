'use strict'
// Please don't delete the 'use strict' line above

//ヒント： これまでにならったRecursionやメソッドの知識をフル活用する必要がありそうです・・・！
function mergeSort() {
    if (arr.length <= 1) {
        return arr; // 配列が1要素以下の場合はそのまま返す
        }
        
        // 配列を中央で分割
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        
        // 再帰的に左右の部分配列をソート
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);
        
        // ソートされた部分配列をマージ
        return merge(sortedLeft, sortedRight);
        }
        
        function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        // 左右の部分配列を比較しながらマージ
        while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
        } else {
        result.push(right[rightIndex]);
        rightIndex++;
        }
        }
        
        // 未処理の要素を結果に追加
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
        }
  


let arr = [1, 5, 4, 3, 8, 7, 6, 10, 18, 2];
let sortedArr = mergeSort(arr);
console.log(sortedArr); // => [1, 2, 3, 4, 5, 6, 7, 8, 10, 18]
mergeSort(arr); // => [1, 2, 3, 4, 5, 6, 7, 8, 10, 18]
