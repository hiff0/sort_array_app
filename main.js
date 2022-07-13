//создание рандомного цвета
const randColour = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//функция чтения слов из элементов input 
const readArray = (number) => {
    const array = [];
    for (let i = 20 * (number - 1) + 1; i <= number * 20; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        array.push(word.trim());
        if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(word.trim())) {
            alert('В массивах есть не только буквы');
            return false;
        }
    }
    if (array.includes('')) {
        if (number <= 5) alert(`Введены не все слова в ${number} массиве русских слов`);
        else alert(`Введены не все слова в ${number - 5} массиве английских слов`);
        return false;
    }
    else return array;
}

//функция записи слов из массива
const writeArray = (array, number) => {
    //записываем
    let j = 0;
    for (let i = 20 * (number - 1) + 1; i <= number * 20; i += 1) {
        document.getElementById(`words${i}`).value = array[j];
        j += 1;
    }
}

//сортировка массива русских слов
document.getElementById('sort-rus').onclick = function () {
    //запись массива из русских слов
    for (let i = 1; i <= 5; i += 1) {
        const array = readArray(i);
        //сортируем массив без учета регистра
        if (readArray(i) !== false) {
            const sortArray = array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            writeArray(sortArray, i);
        }
    }
}

//сортировка массива английских слов
document.getElementById('sort-eng').onclick = function () {
    //запись массивов из английских слов
    for (let i = 6; i <= 10; i += 1) {
        const array = readArray(i);
        //сортируем массив без учета регистра
        if (readArray(i) !== false) {
            const sortArray = array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            writeArray(sortArray, i);
        }
    }
}

//поиск совпадений слов в русском массиве
document.getElementById('equal-words-rus').onclick = function () {
    clearColourRus();
    //сохраняем все слова из всех массивов
    const arrayWords = [readArray(1), readArray(2), readArray(3), readArray(4), readArray(5)].flat();
    //получаем массив повторяющихся слов
    const tempArray = [...arrayWords].sort();
    let dublicates = [];
    for (let i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i + 1] === tempArray[i] && !dublicates.includes(tempArray[i])) {
            dublicates.push(tempArray[i]);
        }
    }
    //инициализируем массив рандомных цветов
    const randColourArray = [];
    for (let i = 0; i < dublicates.length; i += 1) {
        const colour = randColour();
        randColourArray.push(colour);
    }
    //выделяем повторяющиеся слова
    for (let i = 1; i <= 100; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        if (dublicates.includes(word)) {
            const index = dublicates.indexOf(word);
            document.getElementById(`words${i}`).style.background = randColourArray[index];
        }
    }
}

//поиск совпадений слов в английском массиве
document.getElementById('equal-words-eng').onclick = function () {
    clearColourEng();
    //сохраняем все слова из всех массивов
    const arrayWords = [readArray(6), readArray(7), readArray(8), readArray(9), readArray(10)].flat();
    //получаем массив повторяющихся слов
    const tempArray = [...arrayWords].sort();
    let dublicates = [];
    for (let i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i + 1] === tempArray[i] && !dublicates.includes(tempArray[i])) {
            dublicates.push(tempArray[i]);
        }
    }
    //инициализируем массив рандомных цветов
    const randColourArray = [];
    for (let i = 0; i < dublicates.length; i += 1) {
        const colour = randColour();
        randColourArray.push(colour);
    }
    //выделяем повторяющиеся слова
    for (let i = 101; i <= 200; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        if (dublicates.includes(word)) {
            const index = dublicates.indexOf(word);
            document.getElementById(`words${i}`).style.background = randColourArray[index];
        }
    }
}

//подсчет количества уникальных слов в каждом массиве, количества уникальных слов среди всех массивов русских слов
document.getElementById('unique-rus').onclick = function () {
    clearColourRus();
    //записываем количество уникальных слов в отдельных массивах
    for (let i = 1; i <= 5; i += 1) {
        const arrayWords = readArray(i);
        const resultArr = [];
        let countUniqWords;
        //ищем дубликаты
        const tempArray = [...arrayWords].sort();
        let dublicates = [];
        for (let j = 0; j < tempArray.length; j += 1) {
            if (tempArray[j + 1] === tempArray[j] && !dublicates.includes(tempArray[j])) {
                dublicates.push(tempArray[j]);
            }
        }
        const uniqArray = [...new Set(arrayWords)];
        for (const word of uniqArray) {
            if (!dublicates.includes(word)) {
                resultArr.push(word);
            }
        }
        countUniqWords = resultArr.length;
        const value = document.getElementById(`${i}uniq-rus`).textContent;
        if (value.split(':').length === 2) {
            const newValue = value.split(':')[0];
            document.getElementById(`${i}uniq-rus`).textContent = `${newValue}: ${countUniqWords}`;
        } else document.getElementById(`${i}uniq-rus`).textContent = `${value} ${countUniqWords}`;
    }
    //записываем количество уникальных слов среди всех массивов
    const arrayWords = [readArray(1), readArray(2), readArray(3), readArray(4), readArray(5)].flat();
    const resultArr = [];
    let countUniqWords;
    const tempArray = [...arrayWords].sort();
    let dublicates = [];
    for (let i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i + 1] === tempArray[i] && !dublicates.includes(tempArray[i])) {
            dublicates.push(tempArray[i]);
        }
    }
    const uniqArray = [...new Set(arrayWords)];
    for (const word of uniqArray) {
        if (!dublicates.includes(word)) {
            resultArr.push(word);
        }
    }
    countUniqWords = resultArr.length;
    const value = document.getElementById('alluniq-rus').textContent;
    if (value.split(':').length === 2) {
        const newValue = value.split(':')[0];
        document.getElementById('alluniq-rus').textContent = `${newValue}: ${countUniqWords}`;
    } else document.getElementById('alluniq-rus').textContent = `${value} ${countUniqWords}`;
    //выделяем графически уникальные слова
    const colour = randColour();
    for (let i = 1; i <= 100; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        if (resultArr.includes(word)) document.getElementById(`words${i}`).style.background = colour;
    }
}

//подсчет количества уникальных слов в каждом массиве, количества уникальных слов среди всех массивов английских слов
document.getElementById('unique-eng').onclick = function () {
    clearColourEng();
    //записываем количество уникальных слов в отдельных массивах
    for (let i = 6; i <= 10; i += 1) {
        const arrayWords = readArray(i);
        const resultArr = [];
        let countUniqWords;
        //ищем дубликаты
        const tempArray = [...arrayWords].sort();
        let dublicates = [];
        for (let j = 0; j < tempArray.length; j += 1) {
            if (tempArray[j + 1] === tempArray[j] && !dublicates.includes(tempArray[j])) {
                dublicates.push(tempArray[j]);
            }
        }
        const uniqArray = [...new Set(arrayWords)];
        for (const word of uniqArray) {
            if (!dublicates.includes(word)) {
                resultArr.push(word);
            }
        }
        countUniqWords = resultArr.length;
        const value = document.getElementById(`${i}uniq-eng`).textContent;
        if (value.split(':').length === 2) {
            const newValue = value.split(':')[0];
            document.getElementById(`${i}uniq-eng`).textContent = `${newValue}: ${countUniqWords}`;
        } else document.getElementById(`${i}uniq-eng`).textContent = `${value} ${countUniqWords}`;
    }
    //записываем количество уникальных слов среди всех массивов
    const arrayWords = [readArray(6), readArray(7), readArray(8), readArray(9), readArray(10)].flat();
    const resultArr = [];
    let countUniqWords;
    const tempArray = [...arrayWords].sort();
    let dublicates = [];
    for (let i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i + 1] === tempArray[i] && !dublicates.includes(tempArray[i])) {
            dublicates.push(tempArray[i]);
        }
    }
    const uniqArray = [...new Set(arrayWords)];
    for (const word of uniqArray) {
        if (!dublicates.includes(word)) {
            resultArr.push(word);
        }
    }
    countUniqWords = resultArr.length;
    const value = document.getElementById('alluniq-eng').textContent;
    if (value.split(':').length === 2) {
        const newValue = value.split(':')[0];
        document.getElementById('alluniq-eng').textContent = `${newValue}: ${countUniqWords}`;
    } else document.getElementById('alluniq-eng').textContent = `${value} ${countUniqWords}`;
    //выделяем графически уникальные слова
    const colour = randColour();
    for (let i = 101; i <= 200; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        if (resultArr.includes(word)) document.getElementById(`words${i}`).style.background = colour;
    }
}

//поиск наиболее часто встречающегося слова в каждом массиве и во всех массивах русских слов
document.getElementById('often-word-rus').onclick = function () {
    clearColourRus();
    const colour1 = randColour();
    //ищем наиболее часто встречающееся слова массивах
    for (let i = 1; i <= 5; i += 1) {
        const arrayWords = readArray(i);
        const countRepeat = arrayWords.reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});
        let maxReapeat = 0;
        let wordRepeat = '';
        for (const key in countRepeat) {
            if (countRepeat[key] > maxReapeat) {
                maxReapeat = countRepeat[key];
                wordRepeat = key;
            }
        }
        const value = document.getElementById(`${i}often-rus`).textContent;
        if (value.split(':').length === 2) {
            const newValue = value.split(':')[0];
            document.getElementById(`${i}often-rus`).textContent = `${newValue}: ${wordRepeat}`;
        } else document.getElementById(`${i}often-rus`).textContent = `${value} ${wordRepeat}`;
    }
    //ищем наиболее часто встречающееся слово во всех массивах
    const arrayWords = [readArray(1), readArray(2), readArray(3), readArray(4), readArray(5)].flat();
    const countRepeat = arrayWords.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    let maxReapeat = 0;
    let wordRepeat = '';
    for (const key in countRepeat) {
        if (countRepeat[key] > maxReapeat) {
            maxReapeat = countRepeat[key];
            wordRepeat = key;
        }
    }
    const value = document.getElementById(`alloften-rus`).textContent;
    if (value.split(':').length === 2) {
        const newValue = value.split(':')[0];
        document.getElementById(`alloften-rus`).textContent = `${newValue}: ${wordRepeat}`;
    } else document.getElementById(`alloften-rus`).textContent = `${value} ${wordRepeat}`;
    const colour2 = randColour();
    for (let i = 1; i <= 100; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        if (word === wordRepeat) document.getElementById(`words${i}`).style.background = colour2;
    }
}

//поиск наиболее часто встречающегося слова в каждом массиве и во всех массивах английских слов
document.getElementById('often-word-eng').onclick = function () {
    clearColourEng();
    const colour1 = randColour();
    //ищем наиболее часто встречающееся слова массивах
    for (let i = 6; i <= 10; i += 1) {
        const arrayWords = readArray(i);
        const countRepeat = arrayWords.reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});
        let maxReapeat = 0;
        let wordRepeat = '';
        for (const key in countRepeat) {
            if (countRepeat[key] > maxReapeat) {
                maxReapeat = countRepeat[key];
                wordRepeat = key;
            }
        }
        const value = document.getElementById(`${i}often-eng`).textContent;
        if (value.split(':').length === 2) {
            const newValue = value.split(':')[0];
            document.getElementById(`${i}often-eng`).textContent = `${newValue}: ${wordRepeat}`;
        } else document.getElementById(`${i}often-eng`).textContent = `${value} ${wordRepeat}`;
    }
    //ищем наиболее часто встречающееся слово во всех массивах
    const arrayWords = [readArray(6), readArray(7), readArray(7), readArray(9), readArray(10)].flat();
    const countRepeat = arrayWords.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    let maxReapeat = 0;
    let wordRepeat = '';
    for (const key in countRepeat) {
        if (countRepeat[key] > maxReapeat) {
            maxReapeat = countRepeat[key];
            wordRepeat = key;
        }
    }
    const value = document.getElementById(`alloften-eng`).textContent;
    if (value.split(':').length === 2) {
        const newValue = value.split(':')[0];
        document.getElementById(`alloften-eng`).textContent = `${newValue}: ${wordRepeat}`;
    } else document.getElementById(`alloften-eng`).textContent = `${value} ${wordRepeat}`;
    const colour2 = randColour();
    for (let i = 101; i <= 200; i += 1) {
        const word = document.getElementById(`words${i}`).value;
        if (word === wordRepeat) document.getElementById(`words${i}`).style.background = colour2;
    }
}

//подсчет процента уникальных слов среди всех массивов русских слов
document.getElementById('procent-rus').onclick = function () {
    //получаем количество уникальных слов
    const arrayWords = [readArray(1), readArray(2), readArray(3), readArray(4), readArray(5)].flat();
    const resultArr = [];
    let countUniqWords;
    const tempArray = [...arrayWords].sort();
    let dublicates = [];
    for (let i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i + 1] === tempArray[i] && !dublicates.includes(tempArray[i])) {
            dublicates.push(tempArray[i]);
        }
    }
    const uniqArray = [...new Set(arrayWords)];
    for (const word of uniqArray) {
        if (!dublicates.includes(word)) {
            resultArr.push(word);
        }
    }
    countUniqWords = resultArr.length;
    alert(`Процент уникальных слов среди всех массивов русских слов: ${countUniqWords}%`);
}

//подсчет процента уникальных слов среди всех массивов английских слов
document.getElementById('procent-eng').onclick = function () {
    //получаем количество уникальных слов
    const arrayWords = [readArray(6), readArray(7), readArray(8), readArray(9), readArray(10)].flat();
    const resultArr = [];
    let countUniqWords;
    const tempArray = [...arrayWords].sort();
    let dublicates = [];
    for (let i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i + 1] === tempArray[i] && !dublicates.includes(tempArray[i])) {
            dublicates.push(tempArray[i]);
        }
    }
    const uniqArray = [...new Set(arrayWords)];
    for (const word of uniqArray) {
        if (!dublicates.includes(word)) {
            resultArr.push(word);
        }
    }
    countUniqWords = resultArr.length;
    alert(`Процент уникальных слов среди всех массивов английских слов: ${countUniqWords}%`);
}

//задание белого цвета фону 
function clearColourRus() {
    for (let i = 1; i <= 100; i += 1) {
        document.getElementById(`words${i}`).style.background = 'rgb(255, 255, 255)';
    }
}

function clearColourEng() {
    for (let i = 101; i <= 200; i += 1) {
        document.getElementById(`words${i}`).style.background = 'rgb(255, 255, 255)';
    }
}
