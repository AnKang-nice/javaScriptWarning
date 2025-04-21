// 回调函数妙用
setTimeout(() => {
    console.log('定时器函数');
})

document.addEventListener('click', () => {
    console.log('事件回调函数');
})

// 简单示例理解
// 有一组狗的信息
const DogInfoList = [
    {
        name: '小白',
        age: 2,
        color: '白色',
        agent: '雄性',
    },
    {
        name: '小黑',
        age: 3,
        color: '黑色',
        agent: '雄性',
    },
    {
        name: '小黄',
        age: 1,
        color: '黄色',
        agent: '雌性',
    },
    {
        name: '旺旺',
        age: 4,
        color: '花色',
        agent: '雄性',
    },
    {
        name: '富贵',
        age: 1,
        color: '黑色',
        agent: '雌性',
    },
]

// 我想要拿到其中所有黑色狗的信息
function getBlackDogInfo() {
    const blackDogInfoList = [];
    for (let i = 0; i < DogInfoList.length; i++) {
        if (DogInfoList[i].color === '黑色') {
            blackDogInfoList.push(DogInfoList[i]);
        }
    }
    return blackDogInfoList;
}


// 我想要拿到其中所有雌性狗的信息
function getFemaleDogInfo() {
    const femaleDogInfoList = [];
    for (let i = 0; i < DogInfoList.length; i++) {
        if (DogInfoList[i].agent === '雌性') {
            femaleDogInfoList.push(DogInfoList[i]);
        }
    }
    return femaleDogInfoList;
}

// 我们发现，每次都会出现重复的代码  有通用的遍历逻辑  & 不同的条件判断
// 通用的遍历逻辑我们将它抽成公共函数
// 不同的条件判断我们当做参数传递   但是这个参数我们怎么传递呢？
// 我们可以传递一个函数  这个函数就是条件判断的逻辑
// 这个函数我们称之为回调函数

function getDogInfo(conditionCallback) {
    const dogInfoList = [];
    for (let i = 0; i < DogInfoList.length; i++) {
        if (conditionCallback(DogInfoList[i])) {
            dogInfoList.push(DogInfoList[i]);
        }
    }
    return dogInfoList;
}

getDogInfo((dogInfo) => {
    return dogInfo.color === '黑色';
})

getDogInfo((dogInfo) => {
    return dogInfo.agent === '雌性';
})

// 这样来看，getDogInfo函数  不就是  ES6 filter 函数吗
// 所以封装函数，你悟了吗
